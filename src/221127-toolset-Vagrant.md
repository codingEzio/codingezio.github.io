<!-- toc -->
> Thoughts and notes on Vagrant

### Choose the Right System

> For me, it should meet these standards at least
>
> - LTS (Long Term Support)
> - Not the newest one (for X.Y.Z, it's normally the *X* I care about)
> - The downloads should be sizable comparing to similar version (*Y*, *Z*)

### Why

> I mainly use *Vagrant* to use Docker
>
> - There were network issues when fetching images on a macOS laptop
> - Simply having the native experience using the Linux (VPS) ..

### Setup *Vagrant*

> Skipped at the moment because of my own time allocation

### Usage

#### You Should Know

- You shall be in a directory that is for initializing and installing systems from *Vagrant*
- You could move the directories whereever you want
- The systems were downloaded to `"~/VirtualBox VMs"` on a macOS laptop

#### Initialize and Install

- [CentOS](https://app.vagrantup.com/centos), the [version `7`](https://app.vagrantup.com/centos/boxes/7), according to [here](https://en.wikipedia.org/wiki/CentOS#End-of-support_schedule)

    ```bash
    vagrant init centos/7
    vagrant up
    ```

- [Ubuntu](https://app.vagrantup.com/ubuntu), the [version `20.04`](https://app.vagrantup.com/ubuntu/boxes/focal64), according to [here](https://wiki.ubuntu.com/Releases)

    ```bash
    vagrant init ubuntu/focal64
    vagrant up
    ```

#### Configuration

- The proxies

    > Mainly to [fix network issues](http://blog.lujun9972.win/blog/2018/07/29/vagrant%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html) when fetching Docker images and such

    ```ruby
    Vagrant.configure("2") do |config|

        # I prefer using this rather than putting the proxy config
        # in the VM as I need an extra layer to modify the files
        # around and I constantly need to switch between RJ-45
        # connection and Wi-Fi.
        proxy_string = "http://192.168.1.3:7890/"

        # Is this really necessary, actually no. This plugin simply
        # injects the proxies into the VM. You can get away with it
        # by simply adding environment variables like 'HTTP_PROXY'
        # to your shell config (e.g. .zshrc, .bashrc).
        if Vagrant.has_plugin?("vagrant-proxyconf")
            config.proxy.http     = proxy_string
            config.proxy.https    = proxy_string
            config.proxy.no_proxy = "localhost,127.0.0.1,.example.com"
        else
            system('vagrant plugin install vagrant-proxyconf')
            raise("vagrant-proxyconf installed. Run command again.");
        end

    end
    ```

- The port mapping

    ```ruby
    Vagrant.configure("2") do |config|

        # It would behave just like another machine in your local network
        config.vm.network "public_network"

        # For me it's Docker (3306) -> VM (3306) -> Host (3306)
        config.vm.network "forwarded_port", guest: 3306, host: 3306

        # Host, Guest (VM)
        config.vm.synced_folder "data_bridge", "/vagrant_data"

    end
    ```

#### Into the Vagrant

```bash
# cd to the place where you intialized the system in
vagrant up
vagrant ssh


# Change the default password of root in order to install packages and such
sudo passwd root
```

#### Usage

- Installing packages you like

    > Thanks to [here](https://unix.stackexchange.com/a/582623/549763) for *CentOS* related issues

    ```bash
    # For me there are
    # - ncdu    -> Disk usage analyzer
    # - htop    -> Better way of checking the processes running
    # - glances -> Another way of checking up the processes
    # - tldr    -> Cheatsheet for commonly used utilities

    # For CentOS
    sudo yum install epel-release
    sudo yum install ncdu htop glances tldr

    # For Ubuntu
    sudo apt install ncdu htop glances tldr
    ```

#### Other Common-used Commands

- e.g. Up, down, pause

    ```bash
    vagrant status

    vagrant suspend     # sleep
    vagrant up          # boot

    vagrant halt        # shutdown
    vagrant reload      # reboot
    ```

- e.g. Snapshot

    ```bash
    # How I name the snapshots
    vagrant snapshot save 20221127_basicsetup

    vagrant snapshot list

    vagrant snapshot restore THE_SNAPSHOT_NAME
    vagrant snapshot delete  THE_SNAPSHOT_NAME
    ```
