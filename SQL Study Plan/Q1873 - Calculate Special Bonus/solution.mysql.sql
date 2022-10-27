/* MySQL */
/* solution 1: use CASE */
Select employee_id,
case 
    when employee_id%2 = 1 and name not like 'M%' then salary
    else 0
    end 
    as bonus
from Employees
order by employee_id

/* solution 2: use IF */
Select employee_id, 
IF (employee_id%2 = 1 and name not like 'M%',salary,0) bonus
from Employees
order by employee_id