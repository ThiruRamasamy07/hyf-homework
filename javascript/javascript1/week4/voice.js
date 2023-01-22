let Name1=[];
let todo=[];
let a=5;
let b=3;
let settimer=4;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

getReply("Hello my name is Benjamin")// "Nice to meet you benjamin"
getReply("What is my name?")  //ur name is Benjamin"
getReply("Add fishing to my todo")  // "fishing added to your todo"//
getReply("Add singing to my todo")  // "fishing added to your todo"
getReply("Add cycling to my todo") 
getReply("Remove fishing from my todo")
getReply("What is on my todo")
getReply("What day is it today")
getReply("Add(+) a and b value")
getReply("subract(-) a and b value")
getReply("multiply(*) a and b value")
getReply("div(/) a and b value")
getReply("set timer for 4 mins")

function getReply(cmd)
{
    if(cmd.includes("Hello","name"))
    {
    Name1 = cmd.slice(16);
    console.log("Hello" + Name1 + " Nice to meet you!");
    return 
    }
    else if(cmd.includes("my name"))
    {
        
        console.log("your name is "+Name1);
        return
    }
    else if(cmd.includes("to my todo"))
    {
 let stodo=cmd.slice(3,-11);
 todo.push(stodo);
console.log(stodo+" is added to your todo") ;
return
    }
    else if(cmd.includes("Remove","todo"))
    {
        let stodo=cmd.slice(7,-12);
      
            todo.slice(stodo)
            console.log(stodo+ " is Removed from your todo") ;
            return
    }
    else if(cmd.includes("on","todo"))
    {
        console.log(todo+" :my todo List");
        return                  
    }

    else if(cmd.includes("day","today"))
    {
        let tday = new Date();
        let day = days[tday.getDay()];
        console.log("Today is :"+day);
        return
        
    }
    else if(cmd.includes("+"))
    {
        let add= a+b;
        console.log("Added value of a and B id:"+add)
        return
    }
    else if(cmd.includes("-"))
    {
        let sub= a-b;
        console.log("subracted value of a and B id:"+sub)
        return
    }
    else if(cmd.includes("*","multiply"))
    {
        let multi= a*b;
        console.log("multiplied value of a and B id:"+multi)
        return
    }
    else if(cmd.includes("/","divided"))
    {
        let div= a/b;
        console.log("divided value of a and B id:"+div)
        return
    }
    else if(cmd.includes("timer"))
    {
        let timer=cmd.slice(13,-5);
       
        const TSecond = timer * 1000; //converting into milisecond
        setTimeout(()=> {
          
            console.log(" timer is set for"+timer) ;
        }, TSecond );
        return 
    }
  
}

   