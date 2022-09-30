/* MS SQL Server */
/* solution 1: use OR for conditions */
select name, population, area from World
where area >= 3000000
or population >= 25000000

/* solution 2: use UNION to join two queries */
select name, population, area from World
where area >= 3000000
union
select name, population, area from World
where population >= 25000000