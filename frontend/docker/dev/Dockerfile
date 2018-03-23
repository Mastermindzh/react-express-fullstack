FROM node:latest
MAINTAINER "Rick van Lieshout <info@rickvanlieshout.com>"

ENV HOME=/app
RUN mkdir $HOME
VOLUME [/app]
WORKDIR $HOME

# install
RUN apt-get update

CMD npm install && npm start
