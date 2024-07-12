CREATE DATABASE IF NOT EXISTS incident_management;
USE incident_management;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255),
    address VARCHAR(255),
    pin_code VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS incidents (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    incident_id VARCHAR(255) NOT NULL UNIQUE,
    reporter VARCHAR(255),
    details TEXT,
    reported_date TIMESTAMP,
    priority VARCHAR(255),
    status VARCHAR(255),
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
