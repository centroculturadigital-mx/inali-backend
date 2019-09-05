FROM node:11

ENV HOME=/home/src/app


WORKDIR $HOME

COPY ./app $HOME



RUN npm install

COPY .  $HOME

EXPOSE 4000

# RUN npm install -g pm2


CMD [ "node", "index.js" ]





