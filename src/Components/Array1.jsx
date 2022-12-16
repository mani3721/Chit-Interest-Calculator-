
import { Component } from "react";
import InputList from "./InputList";
import Table from "./Table";
import {CSVLink} from "react-csv"


class FormData extends Component{
constructor(props){
    super(props)

    this.state ={characters:[]}
}
   

handleSubmit =(character)=>{

    console.log(character,"datasss")

this.setState({characters:character})

}
    render(){

        const  {characters} = this.state
        
          
        return(
            <div>
               
                <CSVLink data={characters}  className="downloadBtn" ><i class="fa-solid fa-download" ></i> Download </CSVLink>
                <Table charactersData={characters} />
                <InputList handleSubmitValue={this.handleSubmit}/>
            </div>
        )
    }
}

export default FormData