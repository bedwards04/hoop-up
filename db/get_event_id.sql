SELECT event_id FROM invitations
WHERE user_received_id = $1 AND accepted = true;