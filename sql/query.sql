-- E-mail addresses of users who have bought PRODUCT_1 in the past 7 days.
SELECT DISTINCT u.email
FROM users u
JOIN orders o ON u.user_id = o.user_id
JOIN products p ON o.product_id = p.product_id
WHERE p.name = 'PRODUCT_1'
AND o.order_date >= NOW() - INTERVAL '7 days';

-- Total sales amount, per day
SELECT DATE(o.order_date) AS order_date,
       SUM(p.price * o.quantity) AS total_sales
FROM orders o
JOIN products p ON o.product_id = p.product_id
GROUP BY DATE(o.order_date)
ORDER BY DATE(o.order_date);