//handling children type
type OscarProps={
    children:React.ReactNode //this is from @types/react package, children can be of many types
}

export const Oscar=(props:OscarProps)=>{
    return(<div>{props.children}</div>)
}