/* MS SQL Server */
/* solution 1: use AND for conditions */
select product_id from Products
where low_fats = 'Y'
and recyclable = 'Y'