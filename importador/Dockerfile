FROM node:11

ENV HOME=/home/src/importador


WORKDIR $HOME


COPY ./importador $HOME

RUN npm install

COPY .  $HOME

# RUN npm install -g pm2


CMD [ "node", "index.js" ]





