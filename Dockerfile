FROM node:14-alpine

RUN mkdir -p /home/poetry-s

WORKDIR /home/poetry-s

COPY . /home/poetry-s/

RUN npm install

EXPOSE 4000

CMD [ "npm", "start"]
