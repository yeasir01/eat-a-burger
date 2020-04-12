USE burger_db;

INSERT INTO burgers_tbl (burger, devoured, createdAt, updatedAt)
VALUES ("Double Double", true, "2020-04-11 20:47:35", "2020-04-11 20:47:35" );

INSERT INTO burgers_tbl (burger, devoured, createdAt, updatedAt)
VALUES ("Quarter Pounder", true, "2020-04-11 20:47:35", "2020-04-11 20:47:35" );

INSERT INTO burgers_tbl (burger, devoured, createdAt, updatedAt)
VALUES ("Chicken Parm", false, "2020-04-11 20:47:35", "2020-04-11 20:47:35");

INSERT INTO burgers_tbl (burger, devoured, createdAt, updatedAt)
VALUES ("Steak Burger", false, "2020-04-11 20:47:35", "2020-04-11 20:47:35");

SELECT * FROM burgers_tbl;