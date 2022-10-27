/* MySQL */
/* solution 1: use IF */
update salary
set sex = if(sex = 'f', 'm', 'f')