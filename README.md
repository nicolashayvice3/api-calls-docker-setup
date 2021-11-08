Solution descryption -

Language-
I used JS as it is my strongest programming language (as of right now).

Linting-
My linting preferences were set to EDA, which was my tertiary educational provider.

Testing-
I was going to use jest to test my functions but I did not have enough time. Cheerio and supertest are also for testing.

Template-
I initally used prior project I had done for the skeletal structure of this project.

I installed babel for transcompatibility with older versions of js.

Server side -
For the back end I used knex for the databases.
Sqlite3 was used for database managment. It follows PostgreSQL syntax.
For the routes I used express.
To implement the uuid I used a package called ."uuid" that I added to database function insertCoin,line 17.

Client side-
Used React as my client side user interface.
Used Superagent for my api calls to the sever side.


- Guide to run service locally - 

1- Running client
a- `cd` in to client folder
b- `npm i`
c- `npm run dev`

2- Running server
(remember to do this in separate terminal windows)
a- `cd` in to server folder
b- `npm i`
c- `npm run knex migrate:latest`
d- `npm run knex seed:run`
e- `npm run dev`

3- Navigate to localhost in browser
a- `http://localhost:3000`

Here you can access all of the functionalities. No css.

(if you want to reset the database delete dev.sqlite3 and re-run the npm knex commands above)


- Guide to run service with docker - (Not fully functional)

a- run `docker-compose build` in terminal within root of project
b- run `docker-compose up` in terminal within root of project
c- navigate to `http://localhost:3000` and open inspect tool to see errors

Explanation of problem-
I tried fixing this problem many ways yet I could not get past the problem within the node modules. I implemeted .dockerignore and it seemed to fix one of the problems but once I inputed the commands `npm run knex migrate:latest` & `npm run knex seed:run` in the Dockerfilez(server) the prior problem arose again. Example of problem below:

`server_1  | Cannot find module '/app/node_modules/sqlite3/lib/binding/napi-v3-linux-x64/node_sqlite3.node'`

I looked within the node modules and found that sqlite3 was changing the required path `linux-x64` with
`darwin-x64`.

https://stackoverflow.com/questions/51769034/how-to-use-sqlite3-with-docker-compose

The link above was the closet solution I found to the problem.




