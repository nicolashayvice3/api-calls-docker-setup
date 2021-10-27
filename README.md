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
To implement the uuid I used a package called ."uuid" that I added to database function insertCow,line 17.

Client side-
Used React as my client side user interface.
Used Superagent for my api calls to the sever side.

Problems that I encountered-
I had to put my migrations and seeds out of my server folder becuase knexfile.js could not access them. I tried changing the placement of the knex file as well but it did alter the error message.

Solution to problem-
I simply put the migrations, seeds and knexfile.js outside of the server folder and it worked!


- Guide to run service locally - 

npm install
npx knex migrate:latest
npx knex seed:run
npm run dev

(if you want to reset the database delete dev.sqlite3 and re-run the npx commands above)
