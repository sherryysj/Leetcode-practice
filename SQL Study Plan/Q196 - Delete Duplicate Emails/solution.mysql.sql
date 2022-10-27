/* MySQL */
/* solution 1: use DELETE and WHERE */
Delete p1 from Person p1, Person p2
where p1.email = p2.email
and p1.id>p2.id
