let score:number|string=44; //union of types
score="a+"

type User={
    name:string;
    id:number;
}

type Admin={
    username:string;
    id:number
}

let hitesh:User|Admin={name:"vid",id:123}
hitesh={username:'vidhya',id:123}

function getDBId(param:number|string)
{
    if(typeof param==="string")
    param.concat("hello")
    else if(typeof param==="number")
    param+=2

}

const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3:(string|number)[]=[1,2,"3"]
let seatAllotment:"aisle"|"middle"|"window"

export{}