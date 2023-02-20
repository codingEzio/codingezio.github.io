> The Usual LAMP stack, but manually installed
<!-- toc -->

> This post was written quite a while/few years ago. Consider this as outdated before I make any edits to this so I could remove this line!

## About Installation

> I like to install the dev environment **manually** to have full control over them (ayy)

### *LAMP*

> They're actually all separated softwares,  we use this term simply because they together worked pretty good, just like *Node* + *MongoDB*, is *MongoDB* any special than other DBs like *MySQL*? No!

1. *Linux*: optional, every platforms are fine
2. *PHP*: install separately
3. *Apache*: install separately, then tweaking config for *PHP*
4. *MySQL*: install separately, the previous two simply *use* this

### Integrated Environment

- *phpStudy*
- *XAMPP*

### Conceptual Reasoning

1. [What is the difference between www folder and htdocs folder?](https://stackoverflow.com/questions/21948154/what-is-the-difference-between-www-folder-and-htdocs-folder)
    > That means you could put your `.php` files **anywhere** as long as you configure the path in the `httpd.conf`
2. [Running PHP script from the command line](https://stackoverflow.com/questions/10262532/running-php-script-from-the-command-line)

### How Do You Run a `.php` file

> See *Usage* -> *PHP* (near the bottom)

### REPL

> [Built-in](https://www.php.net/manual/en/features.commandline.interactive.php), [third-party :: psych](https://psysh.org/)

```bash
# built-in
php -a

# third-party :: psych
wget https://psysh.org/psysh && chmod +x psych
./psych
```

-----

## Installation

> You might need to {re-launch your terminal, `source ~/.SHELLrc`} and might need to run them as administrator.
>> I really want to install `Apache` and `PHP` manually <small>(there are ?*NO* **official** ready-to-use tarballs or binaries)</small>, but it's too much a hassle for me compile this whole thing **and manage the dependencies**.

### Apache

#### on Windows, the manual way

1. Go to [here](https://www.apachelounge.com/download/) then search for "*httpd-*"
2. Download the `.zip` file

    ```bash
    # The one I'm using is 'httpd-2.4.47-win64-VS16'

    # 1. extract - select where it extracts
    # 2. extract - extracted result: 'C:\httpd-2.4.47-win64-VS16'
    # 3. addpath - search 'edit environment' by pressing 'WIN'
    # 4. addpath - double-click the 'PATH' on the top-half (User Variables)
    # 5. addpath - click 'NEW' then paste the full path above here, done!

    httpd

    # :: expected message ::
    # httpd: Syntax error on line 39 of YOUR_EXTRACT_PATH/Apache24/conf/httpd.conf: ServerRoot must be a valid directory
    ```

#### on macOS, the `brew` way

```bash
# stable v2.4.47
brew install httpd

# :: expected message ::
# the results might vary, but it'd definitely output some kind of error msg
```

### PHP

#### on Windows, the manual way

1. Go to [here](https://windows.php.net/download) then search for "*x64 Thread Safe*"
2. Download the `.zip` file

    ```bash
    # The one I'm using is 'php-7.4.19-Win32-vc15-x64'

    # 1. extract - select where it extracts
    # 2. extract - extracted result: 'C:\php-7.4.19-Win32-vc15-x64'
    # 3. addpath - search 'edit environment' by pressing 'WIN'
    # 4. addpath - double-click the 'PATH' on the top-half (User Variables)
    # 5. addpath - click 'NEW' then paste the full path above here, done!

    php --version

    # :: expected message ::
    # PHP 7.4.19 (cli) (built: May  4 2021 14:24:38) ( ZTS Visual C++ 2017 x64 )
    # Copyright (c) The PHP Group
    # Zend Engine v3.4.0, Copyright (c) Zend Technologies
    ```

#### on macOS, the `brew` way

```bash
brew install php         8.0.6      # till 2021-05-21
brew install php@7.4    7.4.19      # the one I'm using
brew install php@7.3    7.3.28
brew install php@7.2    7.2.34

# add $PATH to your ~/.SHELLrc file
export PATH="/usr/local/opt/php@7.4/bin:$PATH"  # path,version vary
export PATH="/usr/local/opt/php@7.4/sbin:$PATH" # path info provided by brew

# should be two lines since macOS has a pre-installed php (7.1.7)
ls -l $(which -a php)
```

### MySQL

> Remember the only two things we need is the `mysql` <small>(`mysqlsh` on Windows)</small> and the *optional* Workbench.

#### on Windows, the `.msi` way <small>(GUI Installer)</small>

1. Go to [here](https://dev.mysql.com/downloads/installer/) then search for "*mysql-installer-community*"
2. Down the `.zip` file <small>(the *big* one)</small>

    ```bash
    # The one I'm using is 'mysql-installer-community-8.0.25.06'

    # Issues
    # Q1 warning message: 'One or more product .. not been satisfied'
    # A1 ignore it if you do in fact not having Visual Studio in your PC

    # 1. double-click the .msi file (it might take a while to open)
    # 2. :: Choosing a Setup Type -> Full (other choices are fine!)
    # 3. :: Installation (a list of product will be installed) -> Execute

    # Normally it would
    # - be installed to 'C:\Program Files\MySQL\'
    # - setup the env variables for you 'PATH_ABOVE\MySQL Shell 8.0\bin\'

    mysqlsh

    # :: expected message ::
    # MySQL Shell 8.0.25
    #
    # Copyright (c) 2016, 2021, Oracle and/or its affiliates.
    # Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
    # Other names may be trademarks of their respective owners.
    #
    # ... and the shell-related message ...
    ```

#### on macOS, the `brew` way

```bash
# stable v8.0.25
brew install mysql
```

## Configuration

### Apache

> I'll stay away from `DocumentRoot` unless I have more knowledge on this <small>([directives in `httpd.conf`](https://httpd.apache.org/docs/2.4/mod/core.html))</small>.

#### on Windows

> If you install it a custom location, you'll need to modify the `SRVROOT` to `drive:/YOUR_EXTRACT_PATH/Apache24/`

```bash
# go to 'YOUR_EXTRACT_PATH/Apache24/'

# 1. edit-config    ./conf/httpd.conf
#   search 'ServerName'     add 'ServerName localhost'
#   search 'Listen'         add 'Listen 8080'    (optional)
# 2. run-binary
#   - httpd
#   - open browser, access 'localhost:8080'   (localhost if not set 'Listen')

# As for configure Apache to work with PHP, see the PHP section below.
```

#### on macOS, the `brew` way

```bash
# go to '/usr/local/Cellar/httpd/' (post-installation msg provided by brew)

# 0. resolve the confict between the macOS built-in Apache
#   - sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
#   - killall httpd
#   - sudo /usr/sbin/apachectl stop     (possibly optional (built-in httpd))

# 1. edit-config    /usr/local/etc/httpd/httpd.conf
#   search 'ServerRoot'     Windows equivalent '/usr/local/Cellar/httpd/2.4.47/'
#   search 'ServerName'     add 'ServerName localhost'
#   search 'Listen'         add 'Listen 8080'    (optional)
# 2. run-binary
#   - /usr/local/opt/httpd/bin/httpd -D FOREGROUND
#   - open browser, access 'localhost:8080'   (localhost if not set 'Listen')

# If you installed Nginx before, the page you opened might display 'Welcome
# to Nginx' instead, which is pretty funny 😂. Well, as long as it displays
# SOMETHING, it IS working.
# - action      you could modify the 'index.html'
# - location    /usr/local/var/www/ (config: DocumentRoot)
```

### MySQL

#### on Windows

```bash
# continue from the mysql installation above

# Product Configuration :: MySQL Server
# :: Type and networking    Dev Computer | TCP:3306,33060, Firewall
# :: Authentication Method  Use Strong Password Encryption
# :: Accounts and Rules     #PSWD | AddUser (john,localhost,DBAdmin,$PSWD)
# :: Windows Service        AsWinService MySQL80 Startup | Standard SyAcct
# :: Apply Configuration    Click 'Execute' to apply all the config above!

# Product Configuration :: MySQL Server
# > I don't what this is, so I'll just leave it by default (-> Finish)

# Product Configuration :: Samples and Examples
# > Type your root password to check (#PSWD) -> Check, Execute

# ... next and other simple clicks ...

# After all this, it would
# - open the 'mysqlsh.exe' in Command Prompt
# - open the 'MySQL Workbench' GUI software
```

### PHP

#### on Windows

##### Step 1

```ini
# Configure PHP

# before starting: GOTO 'YOUR_EXTRACT_PATH/php-7.4.19-Win32-vc15-x64/'

# Enable extensions
# - Make a copy of 'php.ini-development' then rename it to 'php.ini'
# - Search 'extension_dir = "ext"' then remove the ';' (comment)
extension_dir = "ext"
```

##### Step 2

```bash
# see what extensions were (even) loaded
php -m
```

##### Step 3

```xml
# Configure Apache (to use PHP)

# before starting: OPEN 'YOUR_EXTRACT_PATH/Apache24/conf/httpd.conf'

Define PHPROOT "drive:/YOUR_EXTRACT_PATH/php-7.4.19-Win32-vc15-x64"

# search '#LoadModule xml2enc' then add these lines afer it (after all mod)
LoadModule php7_module "${PHPROOT}/php7apache2_4.dll"
<IfModule php7_module>
    AddHandler application/x-httpd-php .php
    AddType application/x-httpd-php .php .html
    PHPIniDir "${PHPROOT}"
</IfModule>
```

##### Step 4

```bash
# Test whether your configuration is working (no output means ?SUCCESS)
httpd
```

#### on macOS <small>(installed via `brew`)

##### Step 1

```ini
# Configure PHP

# before starting: GOTO '/usr/local/etc/httpd/' (via brew)

# Enable extensions
# - Make a backup copy of 'php.ini' by `cp -f php.ini php.ini.default`
# - Search 'extension_dir' (had values being set? leave it be, no need to change!)
```

##### Step 2

```bash
# see what extensions were (even) loaded
php -m
```

##### Step 3

```xml
# Configure Apache (to use PHP)

# before starting: OPEN '/usr/local/etc/httpd/httpd.conf' (via brew)

# all of these instructions were based on the post-installation msg provided by brew
# only this line won't work properly (these two are the same)
# - LoadModule php7_module /usr/local/Cellar/php@7.4/7.4.19_1/lib/httpd/moduleslibphp7.so
# - LoadModule php7_module /usr/local/opt/php@7.4/lib/httpd/modules/libphp7.so

# search 'LoadModule' then navigate to the last one (built-in provided by macOS)
LoadModule php7_module /usr/libexec/apache2/libphp7.so

<FilesMatch \.php$>
    SetHandler application/x-httpd-php
</FilesMatch>

# search 'DirectoryIndex' to change the config to
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
```

##### Step 4

```bash
# Test whether your configuration is working (no output means ?SUCCESS)
/usr/local/opt/httpd/bin/httpd -D FOREGROUND
```

## Usage

### Apache

#### on Windows

```bash
httpd
```

#### on macOS/Linux

```bash
# foreground
/usr/local/opt/httpd/bin/httpd -D FOREGROUND

# background
apachectl       [start, stop, restart]
brew services   [start, stop, restart] httpd
```

### MySQL

#### on Windows

```sql
-- I couldn't quite figure out how to use 'mysqlsh.exe', so I'll just use
-- the 'MySQL Workbench' (GUI software).

-- Shell
-- 0. open it then right click the existing 'MySQL Connections'
-- 1. click 'Start Command Line Client'
-- 2. type your password in the opened Command Prompt

-- Now you are INSIDE the database "warehouse"
-- 1. Make to sure to add ';' in the end
-- 2. Command below can be lowercase as well.
SHOW DATABASES;
```

### PHP

#### PHP *alone*

```bash
# [TYPE]                        [EQUIVALENT-in-Python]
# REPL                          python3
# Interpreter                   python3 FILE.py
# Program Passed in as String   python3 -c "print(10)"
php -a
php -f FILE.php
php -c "echo 10;"

# PHP server
php -S localhost:8081
```

#### PHP *with Apache*

```xml
# ----- -----  ----- PHP file ----- -----  -----

# > normally you would put your `.php` under 'YOUR_INSTALLATION/htdocs/'
# > but you could put them anywhere by changing these (if not using `php -S URL:PORT`)

# -- Windows
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">  ... </Directory>

# -- macOS (install via brew)
DocumentRoot "/usr/local/var/www"
<Directory "/usr/local/var/www"> ... </Directory>
```

```bash
# ----- -----  ----- Server ----- -----  -----
httpd &
```

```php
# ----- -----  ----- The Code ----- -----  -----
# save it as 'testings.php'
# expected   'YOUR_INSTALLATION/htdocs/testing.php'
<?php
phpinfo();
?>
```

```bash
# ----- -----  ----- Execute ----- -----  -----
# httpd.conf - ServerName:Listen:DocumentRoot/testing.php
# - ServerName      localhost
# - Listen          8080
# - DocumentRoot    win: ${SRVROOT}/htdocs, macOS: /usr/local/var/www/

# Examples
localhost:80/testing.php
localhost:8080/testing.php
localhost:8080/folder/testing.php
```

## More on *AMP* Stack

> *Apache*, *MySQL* and *PHP*

### Apache

```bash
man httpd

httpd -S    'virtualhost' settings parsed from the config file
httpd -V    build parameters of httpd
```
