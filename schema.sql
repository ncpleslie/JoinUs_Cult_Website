CREATE DATABASE join_us;
USE join_us;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
-- FLUSH PRIVILEGES;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

DROP VIEW IF EXISTS total_users;
CREATE VIEW total_users AS
SELECT COUNT(*) as total FROM users;