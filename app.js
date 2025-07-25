function signUp(
        email,
        password,
        name,
        discord,
        subscription,
        lessonsCompleted
        ) {
            let user = {
                email: email,
                password: password,
                name: name,
                discord: discord,
                subscription: subscription,
                lessonsCompleted: lessonsCompleted,
            }; 
            users.push(user);
             
        }
    
signUp("smith@gmail.com", 
    "password123",
     "John Smith",
     "johnsmith#1234",
     "VIP+",
     [1,2]);

console.log(users);
