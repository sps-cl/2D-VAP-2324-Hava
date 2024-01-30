CREATE TABLE students(
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(20),
  surname varchar(20),
  class varchar(3)
);

INSERT INTO students(class, surname, name)
VALUES("1.A","Fiala","Luďek"),
      ("1.A","Harašta","Milan"),
      ("1.A","Michna","Michal"),
      ("1.B","Fojtík","Jan"),
      ("1.B","Kuba","Miroslav"),
      ("1.B","Moravec","Lukáš"),
      ("1.C","Nykendajová","Milada"),
      ("1.C","Čechová","Gabriela"),
      ("1.C","Votýpka","Martin");

SELECT * 
FROM students;

SELECT  id, name
FROM students
WHERE class = "1.A";

SELECT name, class
FROM students
WHERE id > 6;