export default function toSQLtime(datetime)
{
   // console.log("xfhdfhdh   "+ Object.values(datetime))
    const JSDT=((JSON.stringify(datetime)).slice(1,-1))
    const myArray = JSDT.split(".",1)[0].split("T");
    return(
        myArray.join(" ")
    )

}

