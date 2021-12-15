-- drop all tables

-- create all tables

-- alter all tables

-- insert into

DROP TABLE IF EXISTS "users", "events", "users_attending", "users_not_attending", "invitations";

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
  "user_id" int,
  "public" boolean
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
  "event_id" int,
  "accepted" boolean,
  "user_received_id" int
);

ALTER TABLE "events" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("users_attending") REFERENCES "users_attending" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("invited") REFERENCES "invitations" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("users_not_attending") REFERENCES "users_not_attending" ("id");

ALTER TABLE "users_attending" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_attending" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "users_not_attending" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_not_attending" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "invitations" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "invitations" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "invitations" ADD FOREIGN KEY ("user_received_id") REFERENCES "users" ("id");


INSERT INTO users (username,password,first_name,last_name,city,state,preferred_position,bio)
VALUES
  ('Barclay Livingston','Justine Sharpe','Colton Kim','Ian Rutledge','Hải Phòng','Mokpo','tellus','ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida'),
  ('Quinlan Glass','Lani Collier','Herrod Marsh','Blythe Clemons','Essen','Tire','dui','ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac'),
  ('MacKenzie Ewing','Erich Ortega','Allistair Hartman','Vivien Bennett','Bhimber','Koszalin','ante,','Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim,'),
  ('Herrod Wiley','Declan Mcintyre','Lee Mckay','Derek Frye','Asan','Cuautla','nec','montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In'),
  ('Buckminster Shaw','Oliver Mcmahon','Brielle Gould','Britanney Brewer','Rum','Pınarbaşı','nibh','elit. Aliquam auctor, velit eget laoreet posuere, enim');


INSERT INTO events (type,description,location,title,date,start_time,end_time,user_id)
VALUES
  ('Neville Sexton','morbi tristique senectus et netus et malesuada fames','Leersum','metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt','Sep 16, 2022','07:55:42','23:13:42',1),
  ('Wade Roberson','hendrerit a, arcu. Sed et libero.','Tehuacán','lacinia orci, consectetuer euismod est','May 3, 2021','07:18:35','09:35:02',2),
  ('Nathaniel Hull','vitae, orci. Phasellus dapibus quam','Jiutepec','sociis natoque','Nov 21, 2020','09:19:57','03:46:16',3),
  ('Shoshana Vargas','rutrum lorem ac risus.','Singkawang','est','Sep 26, 2022','03:21:21','13:06:00',4),
  ('Rose Fischer','leo elementum sem, vitae aliquam eros turpis','Neustrelitz','sapien molestie','Jun 26, 2022','04:40:09','17:45:16',5);


INSERT INTO invitations (user_id,message,event_id)
VALUES
  (1,'morbi tristique senectus et netus et malesuada fames',1),
  (2,'hendrerit a, arcu. Sed et libero.',2),
  (3,'vitae, orci. Phasellus dapibus quam',3),
  (4,'rutrum lorem ac risus.',4),
  (5,'leo elementum sem, vitae aliquam eros turpis',5);
