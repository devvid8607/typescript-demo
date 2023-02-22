function createUser({ name: string, isPaid: boolean }) {}
createUser({name:"vidhya",isPaid:true});

function createCourse():{name: string, isPaid: boolean}{
    return {name:"vidhya",isPaid:true}
}

type User={
    name:string;
    email:string;
    isActive:boolean;
}

function createUser1(user:User):string{
    return 'user created'
}

type userAgain={
    readonly _id:string; //readonly prop
    name:string;
    email:string;
    isActive: boolean;
    creditCardDetails?:number; //optional prop

}

function createUserAgain(u:userAgain):string{
    return "created"
}
let myUser:userAgain={
    _id:"1234",
    name:"v",
    email:"l@false.com",
    isActive:true
}

//myUser._id="fsdfs" // not allowed since readonly
myUser.email="f@g.com"

type cardNumber={cardNumber:string}
type cardDate={cardDate:string}
type card=cardNumber & cardDate & {cvv:number}



export {};
