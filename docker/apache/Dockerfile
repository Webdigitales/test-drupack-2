FROM webdevops/php-apache-dev:7.1

RUN apt-get update \
    && apt-get install -y mysql-client unzip curl sqlite3 git

# Configure volume/workdir
WORKDIR /app/
