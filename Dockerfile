FROM node:alpine

RUN apk add git

ADD ./docker_dev/app/ /siep-gw/
WORKDIR /siep-gw/
RUN npm install
CMD ["nodemon","server.js"]
