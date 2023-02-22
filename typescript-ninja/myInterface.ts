interface User{
    readonly id:number;
    name:string;
    email:string;
    review?:string;
    starttrial():string
    getCoupon(username:string,value:number):number
}
//can add additional props
interface User{
    githubtoken:string
}
//can extend it
interface Admin extends User{
    role:"admin"|"ta"|"learner"
}
const vidhya:Admin={
    id:1212,
    name:"vidhya",
    email:"w@e.com",
    starttrial:()=>{
        return "1"
    },
    getCoupon:(username:"vid",value:22)=>{
        return 33
    },
    githubtoken:"iuu",
    role:"ta"
}

