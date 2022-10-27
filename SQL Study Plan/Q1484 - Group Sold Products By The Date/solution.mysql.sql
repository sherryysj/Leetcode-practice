/* MySQL */
/* solution 1: use GROUP_CONCAT, GROUP BY, COUNT */
select sell_date, count(distinct product) as num_sold, 
    GROUP_CONCAT(DISTINCT product 
                ORDER BY product 
                SEPARATOR "," ) 
    as products
from Activities
group by sell_date