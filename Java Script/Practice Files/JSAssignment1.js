/* 
Filter and Map Questions
How would you get an array of user emails of all users who are admins?How would you get an array
of users who have the skill 'Python'?

const Data = require("../JSON Files/userdata.json");
// console.log(Data);

//Admin Emails
    const adminUsers = Data.filter(user=>user.role==='admin');
    console.log(adminUsers);
    console.log(adminUsers.length);
    const adminEmails = adminUsers.map(admin=>admin.useremail);
    console.log(adminEmails);


//Python User
    // const pythonUsers = Data.filter(userPython => userPython.skills.includes('Python'));
    // console.log(pythonUsers);
    const pythonUsers = Data.filter(userPython => userPython.skills='Python');
    console.log(pythonUsers);



How would you get an array of users who are older than 30?How would you get an array of usernames
of all users who live in 'Goa'?

const Data = require("../JSON Files/userdata.json");
// console.log(Data);

//User with age 30 or 30 above
    const userOlderthan30 = Data.filter(age=>age.age>=30);
    console.log(userOlderthan30);

//All Username which is live in goa
    const goaUser = Data.filter(goa=>goa.city==='Goa');
    console.log(goaUser);
    console.log(goaUser.length);
    const userNamegoaUser = goaUser.map(userName=>userName.username);
    console.log(userNamegoaUser);



How would you get an array of users whose salary is greater than 1,000,000?How would you get an
array of female users?How would you get an array of first names of all users who are customers?

const Data = require("../JSON Files/userdata.json");
// console.log(Data);

//High salary user
    const highSalaryUser = Data.filter(highSalary=>highSalary.salary>1000000);
    console.log(highSalaryUser);

//Female user
    const femaleUser = Data.filter(female=>female.gender==='Female');
    console.log(femaleUser);

//customer firstName
    const allCustomer = Data.filter(customer=>customer.role=='customer');
    console.log(allCustomer);
    const cstmFirsName = allCustomer.map(user=>user.firstName);
    console.log(cstmFirsName);



How would you get an array of users who have 'JavaScript' as one of their skills?

    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    // const jsUser = Data.filter(userjs=> userjs.skills='JavaScript');
    // console.log(jsUser);
    const jsUsers = Data.filter(userjs => userjs.skills.includes('JavaScript'));
    console.log(jsUsers);



How would you get an array of users who live in 'Mumbai' and have a salary less than 800,000?

    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const mumbaiUser = Data.filter(userMumbai => userMumbai.city==='Mumbai' && userMumbai.salary<'800000');
    console.log(mumbaiUser);



How would you get an array of male users who are customers?
    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const maleCustomer = Data.filter(maleCustomer=>maleCustomer.gender==='Male' && maleCustomer.role==='customer');
    console.log(maleCustomer);




Find Questions
How would you find the first user who lives in 'New Delhi'?
    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const delhiUser = Data.find(delhiUser => delhiUser.city==='New Delhi');
    console.log(delhiUser);



How would you find the first user who has the skill 'React'?
    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const firstReactUser = Data.find(reactUser=>reactUser.skills='React');
    console.log(firstReactUser);



How would you find the first user who is an admin and lives in 'Jaipur'?
    const Data = require("../JSON Files/userdata.json");
            // console.log(Data);

    const firstUser = Data.find(jaipurADmin=>jaipurADmin.role==='admin' && jaipurADmin.city==='Jaipur');
    console.log(firstUser);


How would you find the first user with a salary of exactly 900,000?

    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const firstUser = Data.find(exactlySalary=>exactlySalary.salary==='900000');
    console.log(firstUser);




How would you find the first user whose username is 'Rahul Verma'?

    const Data = require("../JSON Files/userdata.json");
    // console.log(Data);

    const firstUser = Data.find(firstName=>firstName.firstName ='Rahul Verma');
    console.log(firstUser);



    
Splice and Slice QuestionsHow
would you remove the first user who lives in 'Kolkata' from the array?
How would you get a new array containing the first 5 users?
How would you get a new array containing the last 5 users?
How would you create a new array with users from the 3rd to the 7th position (inclusive)?
How would you replace the user at the 10th position with a new user object?

*/