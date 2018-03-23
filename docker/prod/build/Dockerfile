FROM node:latest
LABEL maintainer ="Rick van Lieshout <info@rickvanlieshout.com>"

ENV HOME=/app
RUN mkdir $HOME
VOLUME [/app]
WORKDIR $HOME

RUN apt-get update && apt-get -y install python python-virtualenv build-essential python-dev

ADD https://bootstrap.pypa.io/get-pip.py /get-pip.py

RUN python /get-pip.py

RUN pip install sphinx sphinx-autobuild sphinx_rtd_theme recommonmark restructuredtext-lint

CMD npm install && npm run build
