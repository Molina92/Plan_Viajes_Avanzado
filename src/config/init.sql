-- Active: 1729899505784@@127.0.0.1@5432@plan_de_viajes

CREATE DATABASE plan_de_viajes;

CREATE TABLE viajes (id SERIAL, destino VARCHAR(50) NOT NULL,
presupuesto INT NOT NULL);

CREATE TABLE equipamiento (id SERIAL, nombre VARCHAR(50));

INSERT INTO viajes (destino, presupuesto) VALUES
('París', 1500),
('Tokio', 2000),
('Nueva York', 1800),
('Londres', 1700),
('Sídney', 2200);

SELECT * FROM viajes;
