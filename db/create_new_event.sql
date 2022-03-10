INSERT INTO events (user_id, title, date, start_time, end_time, location, type, public, description)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;