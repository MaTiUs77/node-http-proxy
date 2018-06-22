FROM node:alpine

ADD ./docker_dev/app/ /siep-gw/
WORKDIR /siep-gw/
RUN npm install
CMD ["nodemon","server.js"]
