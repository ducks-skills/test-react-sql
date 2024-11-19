CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table orders
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO users (email, name) VALUES
('user1@example.com', 'User One'),
('user2@example.com', 'User Two'),
('user3@example.com', 'User Three');

INSERT INTO products (name, price) VALUES
('PRODUCT_1', 10.00),
('PRODUCT_2', 20.00),
('PRODUCT_3', 30.00);

INSERT INTO orders (user_id, product_id, quantity, order_date) VALUES
(1, 1, 2, NOW() - INTERVAL '1 day'),
(2, 1, 1, NOW() - INTERVAL '2 days'),
(3, 2, 3, NOW() - INTERVAL '3 days'),
(1, 3, 1, NOW() - INTERVAL '4 days'),
(2, 1, 2, NOW() - INTERVAL '5 days'),
(3, 1, 1, NOW() - INTERVAL '6 days'),
(1, 2, 2, NOW() - INTERVAL '7 days');