UPDATE events
SET title = $1, date = $2, start_time = $3, end_time = $4, location = $5, type = $6, description = $7
WHERE id = $8
returning *;