# Covid Project assignment

- This Covid website clone uses 2 databases to create combined objects for the React app.

- SQL server here is used for the data tables and MongoDB for ui component configuration.

- Redis stores ready to use objects when the react app requests for Cards.

- Caching happens on start of a script and runs a cron job to make sure data gets updated once a day.

- There is a small api server used to fetch data objects from redis.

## DEV SETUP

### 1. setup Docker containers and environment variables:

docker compose is located in ./config/compose.yml

- you may remove volumes in the compose file (and DOCKER_VOLUMES_PATH variable) if you do not want to store Database data on your local machine.
  it will be reset every time you restart the containers.

  **Create env file ./config/dev.env (FRONT/config/dev.env) and add the folowing variables**

  **_example:_**

```

SQL_PASSWORD = "Connect123"

SQL_USERNAME = "SA"

SQL_DB = "CovidStatistics"

SQL_SERVER = "localhost"

SQL_PID = "Developer"

MONGO_PASSWORD = "Connect123"

MONGO_USERNAME = "root"

MONGO_DB = "CovidStatistics"

MONGO_SERVER = "localhost:27017"

MONGO_ROOT_USER = "root"

MONGO_ROOT_PASSWORD = "Connect123"

MONGO_INIT_DB = "CovidStatistics"

*DOCKER_VOLUMES_PATH = '/home/\*Username\*/DockerVolumes'  (ubuntu example)*

```

open terminal in the ./config dir, where the compose file is located.

```
cd config

```

run compose:

```
docker compose --env-file ./dev.env -p CovidCompose up

```

to run the containers in background add -d flag:

```
docker compose --env-file ./dev.env -p CovidCompose up -d
```

- If you are using volumes insure that you have directorie that can be bind mounted into Docker containers ( settings/Resourses/File sharing ).

### 2. Setup sql Database

make sure your sql container is working.

SQL server here stores all the covid data.

in CovidDatabase folder create ./config/dev.env file and setup variables:

```
SQL_PASSWORD = "Connect123"

SQL_USERNAME = "SA"

SQL_DB = "CovidStatistics"

SQL_SERVER = "localhost"
```

install dependencies

```
npm i
```

to create the Database run twise

```
npm run create
```

then update the tables with data (read more in the code):

_as part of this process it will fetch data from an open api._

```
npm run update
```

database is ready with mock data inserted.

### 3. Setup mongoDB

in the FRONT folder install dependencies

```
npm init
```

_MongoDB is used here to store component objects wich define apperence and functionality in the react app. the do not store the actual graph numbers._

```
npm run mongo_init
```

This command will initiate the database and insert some objects.

### 4. start caching

This step will combine and create object 'components' from sql data and mongoDB data, then store it in redis for quick access.

It also runs a cron job so that the objects update once a day at midnight.

```
npm run cache

```

### 5. Starting the app

from the FRONT dir start the server.

```
npm run server
```

Now we can start the react app.

cd to REACT folder and start the react app.

```
npm start
```

**check out the scripts in package.json**
