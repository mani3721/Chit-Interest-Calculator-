
import { Component } from "react";

import {CSVLink} from "react-csv"
import InputList2 from "./InputList2";
import Table2 from "./Table2";


class FormData2 extends Component{
constructor(props){
    super(props)

    this.state ={characterData:[]}
}
   

handleSubmit=(data)=>{

    console.log(data,"2data")

this.setState({characterData:data})

}
    render(){

        const  {characterData} = this.state

        
          
        return(
            <div>
               
                <CSVLink data={characterData} className="twoDown"><i class="fa-solid fa-download" ></i> Download </CSVLink>
                <Table2 characterData={characterData} />
                <InputList2 handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default FormData2