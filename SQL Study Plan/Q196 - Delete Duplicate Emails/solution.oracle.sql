/* Oracle SQL */
/* solution 1: use DELETE, SELECT and GROUP BY */
DELETE FROM person
where id not in
    (select min(id) 
     from person 
     GROUP BY email)