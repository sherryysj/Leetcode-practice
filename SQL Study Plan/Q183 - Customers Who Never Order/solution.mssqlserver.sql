/* MS SQL Server */
/* solution 1: use NOT IN */
select name as Customers from Customers
where id not in (select customerId from orders)
