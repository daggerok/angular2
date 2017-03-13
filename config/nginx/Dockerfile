## docker build --rm -t daggerok/angular2:PrimeNG -f config/nginx/Dockerfile .
## docker push daggerok/angular2:PrimeNG
## docker run -d -p 80:80 --name daggerok-angular2-primeng daggerok/angular2:PrimeNG

FROM nginx:1.10.3-alpine
COPY dist /usr/share/nginx/html
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
