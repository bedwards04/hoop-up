INSERT INTO invitations (user_id, message, event_id, user_received_id)
VALUES ($1, $2, $3, $4)
returning *;