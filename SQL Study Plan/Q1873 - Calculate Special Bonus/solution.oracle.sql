/* Oracle SQL */
/* solution 1: use CASE */
Select employee_id,
case 
    when mod(employee_id,2) = 1 and name not like 'M%' then salary
    else 0 
    end bonus
from Employees
order by employee_id