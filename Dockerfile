FROM alpine:3

RUN apk --no-cache update \
 && apk --no-cache upgrade \
 && apk --no-cache add nginx \
 && mkdir -p /srv/www

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /srv/www

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
