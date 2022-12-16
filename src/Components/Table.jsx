import React from "react";
import { Component } from "react";


// const TableHead =()=>{


//     return(
//             <div className="TableComponents">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>S.NO</th>
//                             <th>Interest</th>
//                             <th>Auctioned Amount</th>
//                             <th>Installment</th>
//                             <th>Commission</th>
//                         </tr>
//                     </thead>
//                 </table>
//             </div>
//         )
//     }

const TableBody =(props)=>{
        
    const {characterData}= props

    console.log(characterData,"table")

      
    const rows= characterData.map((character, index)=>{
        return(<tr key={index}>
            <td>{index+1}</td>
            <td>{character.interest}</td>
        <td>{character.AmountVal}</td>
        <td>{character.Installment}</td>
        <td>{character.Commission}</td>
        </tr>)
    })

   
    
    return(
    
        <div className="TableComponents">
         
                <table>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Interest</th>
                            <th>Auctioned Amount</th>
                            <th>Installment</th>
                            <th>Commission</th>
                        </tr>
                    </thead>
             <tbody>
                    {rows}
                    
             </tbody>
           
             </table>

        
             </div>
       
    )
}


class Table extends Component{
    render(){
        const {charactersData}= this.props

        return(
            <div > 
             {/* <TableHead/> */}

        

             <TableBody  characterData={charactersData}/>
             
            </div>
        )
    }
}

export default Table