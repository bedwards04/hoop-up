INSERT INTO users (username, password, first_name, last_name)
VALUES ($1, $2, $3, $4)
returning *;