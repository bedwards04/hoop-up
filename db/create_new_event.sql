INSERT INTO events (type, description, location, title, date, start_time, end_time, public, user_id)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;