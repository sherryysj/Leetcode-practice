/* MS SQL Server */
/* solution 1: use OR for conditions */
select name from Customer
where referee_id != 2 or referee_id is null
