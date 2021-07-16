FROM node:14-alpine

ADD . /app/

WORKDIR /app

RUN yarn install

EXPOSE 4000

CMD [ "npm", "start"]
