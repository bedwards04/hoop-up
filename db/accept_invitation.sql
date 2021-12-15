UPDATE invitations
SET accepted = $1
WHERE id = $2
returning *;