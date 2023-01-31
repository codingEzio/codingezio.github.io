<!-- toc -->

# Prior Knowledge

## Context

> I've used *Redis* a few years ago in my Django project which is simply for recording the views of the images posted. Now I wanna give it a review and diving deep about the details and explore more use cases.

## Termiology

### [Data store](https://en.wikipedia.org/wiki/Data_store)

> In short, it's all about *data* but in different ways of storing it

- *Database* is a narrow sense of storing specific types of bytes
  - managed by a DBMS
  - have constraints of what the data could be
- *Data Store* also does persistence, and goes beyond the database
  - a repository for storing and managing collections of data
  - any ways of storing some forms of data can be considered as it

    | Form | Content |
    | :--- | :--- |
    | Paper | Letters written on it |
    | File System | Files and directories |
    | Spreadsheet | Cell |

### [What Redis Is](https://developer.redis.com/explore/what-is-redis/)

> Different ways of using it. And it certainly could be easily replaced

- An in-memory *data store*
- A *message broker*
- A *cache*
- A *queue*

## Data Type

### Context

> Redis by itself is much simpler than RDBMS like MySQL, whether it's about the data types or the amount of the hidden concepts to learn.
>
> The data types **are** Redis itself. So you gotta give more real-life examples along with all the data types you presented. Almost all the tutorials were **not** doing a good job of it and written in the perspective of a senior developer who has already understood the business use cases and only writing notes that were really abstract <small>(notes were written by the junior developers that were all about syntax would not be taken in consideration)</small>.
>
> What I wanna say is that you gotta get closer to the real-life project. It means I would need to find

### Overview

- N/A

-----

# Usage

## Environment Preparation

> Suppose you already have Docker installed. For me, it's Docker in VM. To be more exact, it's Installing Docker inside a VM, which is managed by Vagrant, then I edit the relevant config file `Vagrantfile` in order to expose the ports which is already available inside the VM to the host <small>(port mapping: Docker -> VM -> Host)</small>.
>
> Updated: Now I'm using *Docker* directly in the host <small>(macOS)</small>

```bash
# ----- Now you're in the host ----

# Local directories for volume mapping (persistence)
mkdir -p ~/Database/redis616/redis616_{conf,data}

# Easier identification for the container created
container_name="redis616-dev"

# Initiation for Redis
rd_host_conf=~/Database/redis616/redis616_conf
rd_host_data=~/Database/redis616/redis616_data
rd_host_port=6379

# Configuration customization
touch "${rd_host_conf}/redis.conf"
echo 'appendonly yes' > ${rd_host_conf}/redis.conf


# ----- Now you're in where the place you run `docker` ----

docker run --detach \
    --name=$container_name \
    --publish ${rd_host_port}:6379 \
    --volume=${rd_host_conf}/:/etc/redis/redis.conf \
    --volume=${rd_host_data}/:/data \
    redis:6.0.16 \
    redis-server /etc/redis/redis.conf

# Common commands you would use
docker container            # show all the relevant commands you could use
docker container ls         # list all the containers (whether started or not)
docker container start      # start the container
docker update redis616-dev --restart=always  # start Redis when Docker starts
docker exec     redis616-dev ls              # run `ls` in container
docker exec -it redis616-dev bash            # run `bash` into the container
```

## Actual Use Case

> When being in use with code, consider it as a fast database backend with nice APIs <small>(e.g. `SADD HSET LPUSH ZADD`)</small> and free naming convensions <small>(e.g. `job:github:0001`</small>

### N/A

- N/A

-----

# References

## Learning Materials

- [Redis 入门](https://pdai.tech/md/db/nosql-redis/db-redis-introduce.html)
- [Redis Data Types](https://redis.io/docs/data-types/)
- [Redis 缓存问题：一致性, 穿击, 穿透, 雪崩, 污染等](https://pdai.tech/md/db/nosql-redis/db-redis-x-cache.html)
- [Redis 概览](https://tobebetterjavaer.com/sidebar/sanfene/redis.html)

## Directly Inspired

- N/A

## References for References

> A snippet of how I use it with Django (a few years ago)

```python
def image_detail(request, image_id, slug):
    image = get_object_or_404(Image, id=image_id, slug=slug)

    total_views = redis_inst.incr(f'image:{image.id}:views')  # image:X:Y as key
    redis_inst.zincrby('image_ranking', image.id, 1)

    return render(request,
                'images/image/detail.html',
                { 'section'    : 'images',
                    'image_inst' : image,
                    'total_views': total_views })
```
