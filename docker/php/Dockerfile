FROM php:8-fpm

RUN apt-get update && \
    apt-get -y --no-install-recommends install git

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html
