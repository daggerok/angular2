# docker build --rm -t daggerok/angular2:master -f config/nginx/Dockerfile .
# docker push daggerok/angular2:master
# docker run -d -p 80:80 --name daggerok-angular2-master daggerok/angular2:master
FROM nginx:1.10.3-alpine
COPY dist /usr/share/nginx/html
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
