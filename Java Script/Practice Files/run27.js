// 1. create an object of user as created in mongodb and you have to pass that object in function
//    and print all its values by destructing and without destructing.

   const user={
      "id": "1",
      "username": "Prajjal Dhar",
      "useremail": "prajjal.dhar@gmail.com",
      "password": "Regex1234",
      "firstName": "Prajjal",
      "lastName": "Dhar",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 300000,
      "skills": ["Java", "Python"]
    };

    // function greet({...name}){
    //     console.log(`Hello my name is ${username} and i am from ${city}`);
    // }

    // greet("user");

    function printUserDetails(user) {
      console.log("ID: " + user.id);
      console.log("Username: " + user.username);
      console.log("Email: " + user.useremail);
      console.log("Password: " + user.password);
      console.log("First Name: " + user.firstName);
      console.log("Last Name: " + user.lastName);
      console.log("Role: " + user.role);
      console.log("Gender: " + user.gender);
      console.log("Age: " + user.age);
      console.log("City: " + user.city);
      console.log("Salary: " + user.salary);
      // console.log("Skills: " + user.skills.join(", "));
  }  
  printUserDetails(user);

