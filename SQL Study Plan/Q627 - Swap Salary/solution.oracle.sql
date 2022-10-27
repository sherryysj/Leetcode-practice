/* Oracle SQL */
/* solution 1: use CASE */
update salary
set sex =
    case 
    when sex = 'f' then 'm' 
    else 'f' 
    end