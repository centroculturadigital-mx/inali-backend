FROM node:11


WORKDIR /inali-backend

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3000

RUN npm install -g nodemon

CMD [ "nodemon", "server.js" ]





