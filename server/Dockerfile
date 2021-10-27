FROM node:alpine
RUN mkdir /app
WORKDIR /app
ADD package.json /package.json
COPY ./ ./
RUN npm i
RUN npm run knex migrate:latest
RUN npm run knex seed:run
CMD ["npm", "run", "dev"]
