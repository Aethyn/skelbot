FROM node:16.14.2-alpine3.15

WORKDIR /app
COPY . /app

RUN npm install
RUN npm i -g nodemon

ENTRYPOINT ["nodemon", "/app/main.js"]
