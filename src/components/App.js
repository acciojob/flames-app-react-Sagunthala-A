import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const [name,setName] = useState(
            {
                firstName:"",
                secondName:""
            }
        );
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input 
                    placeholder="Enter your first name"
                    value={name.firstName}
                    onChange={(e)=>setName({...name,firstName:e.target.value})}
                />
               <input 
                    placeholder="Enter your first name"
                    value={name.secondName}
                    onChange={(e)=>setName({...name,secondName:e.target.value})}
                />
               <button>Calculate Relationship Future</button>
               <button>Cleat</button>
            </div>
        )
    }
}


export default App;
