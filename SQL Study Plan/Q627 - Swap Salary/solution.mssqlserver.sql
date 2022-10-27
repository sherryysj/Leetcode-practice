/* MS SQL Server */
/* solution 1: use AND for conditions */
update salary
set sex =
    case 
    when sex = 'f' then 'm' 
    else 'f' 
    end
