FROM node:14-alpine

ADD . /app/

WORKDIR /app

RUN npm install

EXPOSE 4000

CMD [ "npm", "start"]
