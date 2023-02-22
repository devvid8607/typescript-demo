function addTwo(num: number):number {
  return num + 2;
}
addTwo(5)

function toUpper(text:string):string
{
  return text.toUpperCase()
}
toUpper("vidhya")

function signupUser(name:string,email:string,isPaid:boolean)
{

}
signupUser("v","v@v.com",true)

function loginUser(name:string,email:string,isPaid:boolean=false)
{

}
loginUser("k","k@k.com")

const getHello=(s:string):string=>{
return ""
}

const heros=["thor","spiderman","superman"]
//input type is automatically infered but output type has to be given
heros.map((hero):string=>{
  return `my hero is ${hero}`
})

//returning void
function consoleError(errmsg:string):void{
  console.log(errmsg)
}

//functions that never return a value
function throwError(errmsg:string):never{
  throw new Error(errmsg)
}

//possibility of returning different types of values
// function getValue(myVal:number)
// {
//   if (myVal>5)
//   return true
//   else
//   return "welcome"
// }
export {};
