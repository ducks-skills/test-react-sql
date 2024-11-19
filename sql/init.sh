docker build -t ecommerce-db .
docker run --name ecommerce-db-container -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d ecommerce-db