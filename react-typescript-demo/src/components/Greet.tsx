//data types of different types of props and how to use them
type GreetProps={
    name: string  
    messageCount?:number //optional prop 
    isLoggedIn:boolean
}
export const Greet=(props:GreetProps)=>{
    return(props.isLoggedIn?<div><h2>Welcome {props.name} for the {props.messageCount}th time!</h2></div>:<div><h2>Not Logged In</h2></div>)
}