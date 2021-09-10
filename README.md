# Platform (Front-end Client UI)
## Basic Guide
``` bash
### package location
$ cd .\packages\platform\ 

### install
$ \packages\platform\yarn install

### execute
$ \packages\platform\yarn start
```




# Server (Back-end Server)
## Basic Guide
``` bash
### package location
$ cd .\packages\server\ 

### install
$ \packages\server\yarn install

### execute
$ \packages\server\yarn start
```
## Database Configuration
Please create a conf file named as `ormconfig.json` inside `./packages/server/` before executing.

And the contents in the file should be
```
{
  "type": "postgres",
  "host": "{host}",
  "port": "{port}",
  "username": "{username}",
  "password": "{password}",
  "database": "{database}",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "ssl": true
}
```
