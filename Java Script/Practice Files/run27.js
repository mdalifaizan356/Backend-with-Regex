// 1. create an object of user as created in mongodb and you have to pass that object in function
//    and print all its values by destructing and without destructing.

   const user={
      "id": "1",
      "username": "Prajjal Dhar",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "skills": ["Java", "Python"]
    };


  function printUserValues(user) {
  console.log(user.id, user.username, user.role, user.gender, user.age, user.skills.join(", "));
}
printUserValues(user);


//calculate find factorial using reduse 