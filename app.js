/* 
write a for loop that loops from 1 to 15
if the number is odd print "ASAP"
if the number is even print "Frontend"
if the number is divisible by 5 print "ASAP frontend"
*/
for (let i = 1; i <= 15; i++){
    if (i % 5 ===0)
        console.log(`${i} - ASAP frontend`);
    else if (i % 2 === 0)
        console.log(`${i} - Frontend`);
    else
        console.log(`${i} - ASAP`);

    
    }