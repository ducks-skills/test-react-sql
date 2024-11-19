CREATE VIEW daily_sales AS
SELECT DATE(o.order_date) AS order_date,
       p.product_id,
       SUM(o.quantity) AS total_quantity,
       SUM(p.price * o.quantity) AS total_sales
FROM orders o
JOIN products p ON o.product_id = p.product_id
GROUP BY DATE(o.order_date), p.product_id;

WITH sales_data AS (
    SELECT product_id,
           AVG(total_sales) OVER (PARTITION BY product_id ORDER BY order_date ROWS BETWEEN 7 PRECEDING AND CURRENT ROW) AS avg_sales
    FROM daily_sales
)
SELECT product_id,
       AVG(avg_sales) AS predicted_sales
FROM sales_data
GROUP BY product_id;