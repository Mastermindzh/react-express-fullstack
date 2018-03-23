FROM node:latest
LABEL maintainer ="Rick van Lieshout <info@rickvanlieshout.com>"

ENV HOME=/app
RUN mkdir $HOME
VOLUME [/app]
WORKDIR $HOME

CMD npm install && npm start
