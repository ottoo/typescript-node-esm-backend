#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE "example_database" ENCODING UTF8 LC_CTYPE 'en_US.UTF-8' LC_COLLATE 'en_US.UTF-8' TEMPLATE template0;
    GRANT ALL PRIVILEGES ON DATABASE "example_database" TO "$POSTGRES_USER";
EOSQL
