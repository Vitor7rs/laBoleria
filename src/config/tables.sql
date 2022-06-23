CREATE TABLE cakes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price NUMERIC NOT NULL,
  image TEXT NOT NULL,
  description TEXT
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR
)