// const tinderUser = new Object();
const tinderUser = {}


 tinderUser.id = "123abc";
 tinderUser.name ="Samay";
 tinderUser.isLoggedIn = false;



console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
        firstname: "yash",
        lastname: "pawar"
    }
}
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"a", 6:"b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
 console.log(obj3);
 

 const users = [
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"

    },
    {
        id:3,
        email:"v@gmail.com"

    }
 ]

 users[1].email
 console.log(tinderUser);
 

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 

 const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "yash",
 }

 // course.courseInstructor
 const {courseInstructor: instructor} = course;

 console.log(instructor);
 
// {
//     "yash": "yash",
//     "coursename": "JS in hindi",
//     "price": "free",
// }

[
    {

    },
    {},
    {}
]