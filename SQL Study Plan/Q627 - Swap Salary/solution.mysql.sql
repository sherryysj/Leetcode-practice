/* MySQL */
/* solution 1: use IF */
update salary
set sex = if(sex = 'f', 'm', 'f')

/* solution 2: use CASE */
update salary
set sex =
    case 
    when sex = 'f' then 'm' 
    else 'f' 
    end