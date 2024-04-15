import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const [name,setName] = useState(
            {
                firstName:"",
                secondName:""
            });
          const [relation,setRelation] = useState("")
        
        function checkRelation(){
          setRelation("sd");
          let retionsArr = ["Friends","Love","Affection","Marriage","Enemy","Siblings"]
          let name1 = name.firstName;
          let name2 = name.secondName;
          console.log(name1,name2)
          let str = '';
          
        }
        return(
            <div id="main">
               {/* Do not remove the main div */}
                 const [name,setName] = useState(
    {
        firstName:"",
        secondName:""
    });
  const [relation,setRelation] = useState("")

function checkRelation(){
  setRelation("sd");
  let retionsArr = ["Friends","Love","Affection","Marriage","Enemy","Siblings"]
  let name1 = name.firstName;
  let name2 = name.secondName;
  console.log(name1,name2)
  let str = '';
  
}
            </div>
        )
    }
}


export default App;
