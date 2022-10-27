/* Oracle SQL */
/* solution 1: use INICAP */
Select user_id, INITCAP(name) as name
from users
order by user_id