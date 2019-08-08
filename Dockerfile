FROM node:11

ENV HOME=/home/src

COPY . $HOME

WORKDIR $HOME


#WORKDIR /inali-backend

COPY package.json $HOME/package.json

RUN npm install

COPY .  $HOME

EXPOSE 3000

RUN npm install -g nodemon


CMD [ "nodemon", "server.js" ]





