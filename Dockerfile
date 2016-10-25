# To build and run with Docker:
#
#  $ docker build -t angular2-quickstart .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 angular2-quickstart
#
FROM node:latest

RUN mkdir -p /opt/app/angular2 /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /opt/app/angular2
COPY package.json /opt/app/angular2/
RUN npm install --unsafe-perm=true

COPY . /opt/app/angular2
RUN chown -R nodejs:nodejs /opt/app/angular2
USER nodejs

CMD npm start
