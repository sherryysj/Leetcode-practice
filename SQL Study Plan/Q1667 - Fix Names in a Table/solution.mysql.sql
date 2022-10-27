/* MySQL */
/* solution 1: use CONCAT, UPPER, LOWER, SUBSTRING */
select user_id, concat(
                    Upper(substring(name,1,1)),
                    lower(substring(name,2,length(name)))) 
                as name
from users
order by user_id

/* solution 2: use CONCAT, UPPER, LOWER, LEFT, RIGHT */
select user_id, concat(
                    Upper(LEFT(name,1)),
                    lower(RIGHT(name,length(name)-1))) 
                as name
from users
order by user_id