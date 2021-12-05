CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "city" varchar,
  "state" varchar,
  "preferred_position" varchar,
  "bio" varchar
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar,
  "description" text,
  "location" varchar,
  "title" varchar,
  "date" date,
  "start_time" time,
  "end_time" time,
  "users_attending" int,
  "users_not_attending" int,
  "invited" int,
  "user_created_event" int
);

CREATE TABLE "users_attending" (
  "id" SERIAL PRIMARY KEY,
  "event_id" int,
  "user_id" int
);

CREATE TABLE "users_not_attending" (
  "id" SERIAL PRIMARY KEY,
  "event_id" int,
  "user_id" int
);

CREATE TABLE "invitations" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "message" varchar,
  "event_id" int
);

ALTER TABLE "events" ADD FOREIGN KEY ("user_created_event") REFERENCES "users" ("id");

ALTER TABLE "users_attending" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_attending" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("users_attending") REFERENCES "users_attending" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("users_not_attending") REFERENCES "users_not_attending" ("id");

ALTER TABLE "users_not_attending" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_not_attending" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("invited") REFERENCES "invitations" ("id");

ALTER TABLE "invitations" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "invitations" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");
