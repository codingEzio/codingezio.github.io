> Thoughts and notes on Docker
<!-- toc -->

## Foreword

> Platforms other than Linux like *macOS* and *Windows* would experience all kinds of different problems. If you do not want too much hassle, better to do this whole thing inside Linux only :)
>
> And, I'm **not** going to make the installation more uniform (similar logic for an easier transfer effort) before I have more time to refine this.
>

## Installation & Configuration

> I Assume You Already Have
>
> - **Configured** the *proxies* to access the *normal* Internet
> - **Gained** the *access to root* in your VM in order to run `sudo`

### macOS

#### Rant

> Hmm, in the default setting <small>(like using the binary `docker` with the GUI *Docker Desktop*</small>), you couldn't run it as daemon, which some apps like `docker-maven-plugin` won't be able to work properly.
>
> Changes made to *Docker Desktop* did not work ([add something like `tcp://MY_HOST_LAN_IP:2375`](https://docs.docker.com/engine/reference/commandline/dockerd/) and relaunch), and the process is painfully slow <small>(more than 2 minutes, context: i7 + 16GB RAM)</small> and buggy <small>(no longer be able to start up *Docker Desktop* any more even though I tried to revert the setting back!)</small>. Anyway, it was **slow** to me before I encounter issues like this. So it's time to switch to something lighter and easy to use!

#### Notes

> Docker Desktop serves almost *nothing* if all you do is meddling with images and containers, and were **confortable with the terminal**. It merely provides you *a* good-looking *UI* for you to do the same thing.
>
> The alternative I found is *colima* <small>(**C**ontainers **o**n **Li**nux on **Ma**c)</small>. Here's the whole processs of getting a MySQL container working <small>(as an example)</small> 😊

- Necessary Tooling

  ```bash
  brew install docker
  brew services start docker

  brew install colima

  # Do please change the config if you plan to start a bunch of
  # services, or, simply put, you wanna use 'docker-compose' :)
  colima stop && colima start --cpu 6 --memory 9 --disk 60
  ```

- [Authentication](https://stackoverflow.com/a/72888813/6273859)

  > Install `brew install docker-credential-helper`<br/>then edit `~/.docker/config.json` to something like this, finally, authenticate with your *Docker* credentials by running `docker login -u DOCKER_USERNAME`

  ```json
  {
      "auths": {
          "https://index.docker.io/v1/": {}
      },
      "credsStore": "osxkeychain",
      "currentContext": "colima",
      "experimental": "enabled"
  }
  ```

- Tryout

  ```bash
  # Run
  docker run --name mysql8-mall \
    --publish 3306:3306 \
    --env MYSQL_ROOT_PASSWORD=password \
    --volume /tmp:/mydata \
    --detach \
    mysql:8

  # Check
  docker logs mysql8-mall
  ```

- Beyond

  > [How I switched from Docker Desktop to Colima](https://opensource.com/article/22/9/docker-desktop-colima)

### [CentOS](https://app.vagrantup.com/centos/boxes/7)

> Thanks to [How To Install and Use Docker on CentOS 7 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-centos-7) and [**this**](https://stackoverflow.com/a/71985088/6273859)

```bash
# Resolve issues around fetching packages
# https://stackoverflow.com/a/71985088/6273859
cd /etc/yum.repos.d/
sudo sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sudo sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

# Preparation overall
sudo yum update -y
sudo yum check-update

# Preparation for Docker
curl -fsSL https://get.docker.com/ | sh


# Check the Docker status
sudo systemctl start docker
sudo systemctl status docker

# Launch Docker every time the VM boots
sudo systemctl enable docker

# Test if it works as expected
sudo docker run hello-world
```

### [Ubuntu](https://app.vagrantup.com/ubuntu/boxes/focal64)

> Thanks to [How To Install and Use Docker on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

```bash
# Preparation overall
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Preparation for Docker
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce


# Check the Docker status
sudo systemctl start docker
sudo systemctl status docker

# Launch Docker every time the VM boots
sudo systemctl enable docker

# Test if it works as expected
sudo docker run hello-world
````

## Practical Usage

### MySQL

```bash
# The base to modify on
sudo docker pull mysql:8.0
sudo docker images | grep mysql

# The instance we actually use (based on the image (class))
sudo docker container ls
sudo docker container start mysql80-dev
sudo docker container stop mysql80-dev
sudo docker container rm   mysql80-dev

# Create the instance
sudo docker run \
    --name=mysql80-dev \
    --publish 3306:3306 \
    --volume=/mydata/mysql80_conf/:/etc/mysql/conf.d \
    --volume=/mydata/mysql80_data/:/var/lib/mysql \
    --volume=/mydata/mysql80_log/:/var/log/mysql \
    --env="MYSQL_ROOT_PASSWORD=password" \
    --detach mysql:8.0

# The content were down below
sudo vi /mydata/mysql80_conf/my.cnf

# Restart and adding to boot list
sudo docker restart mysql5dot7
sudo docker update mysql80-dev --restart=always

# Go into the Docker container
sudo docker exec -it mysql80-dev /bin/bash
```

```ini
[client]
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
init_connect='SET NAMES utf8'
init_connect='SET collation_connection = utf8_unicode_ci'

character-set-server=utf8
collation-server=utf8_unicode_ci

skip-character-set-client-handshake
skip-name-resolve
```
