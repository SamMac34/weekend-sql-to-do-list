CREATE TABLE "tasks" (
"id" serial primary key,
"task" varchar(100) not null,
"dueDate" varchar(10),
"completed" varchar(10)
);

INSERT INTO "tasks" ( "task", "dueDate", "completed" )
VALUES ( 'Laundry', '05/12/2023', 'NO' ), ('Dishes', '06/25/2023', 'NO' ), ( 'Pay mortgage', '06/30/2023', 'NO' ), ( 'Take Lambo in for car wash', '', 'NO' );
