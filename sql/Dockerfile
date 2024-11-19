FROM postgres:latest

WORKDIR /app

COPY structure.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=ecommerce

EXPOSE 5432