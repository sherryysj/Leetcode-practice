/* MS SQL Server */
/* solution 1: use STRING_AGG */
select sell_date, count(distinct product) as num_sold, 
    string_agg(product,',') within group (order by product) as products
from 
    (select distinct *
    from Activities) a
group by a.sell_date
order by a.sell_date