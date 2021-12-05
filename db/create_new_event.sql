INSERT INTO events (type, description, location, title, date, start_time, end_time)
VALUES($1, $2, $3, $4, $5, $6, $7)
returning *;