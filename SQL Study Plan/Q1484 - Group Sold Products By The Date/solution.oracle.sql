/* Oracle SQL */
/* solution 1: use LISTAGG */
select To_char(sell_date) as sell_date, count(distinct product) as num_sold, 
    Listagg(product,',') within group (order by product) as products
from 
    (select distinct *
    from Activities)
group by sell_date
order by sell_date