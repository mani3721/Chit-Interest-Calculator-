import React from "react";
import { Component } from "react";


class Table2 extends Component{

   
    
    render(){

        const {characterData}= this.props

        console.log(characterData,"tablevalueeessss");
    
        const rowsValue= characterData.map((characters, index)=>{
            return(<tr key={index}> <td>{characters.installment}</td></tr>)
        })
        const rowsValue1= characterData.map((characters, index)=>{
            return(<tr key={index}> <td>{characters.installment}</td></tr>)
        })

        const rowsValue2= characterData.map((characters, index)=>{
            return(<tr key={index}> <td>{characters.amountVal}</td></tr>)
        })

        const rowsValue3= characterData.map((characters, index)=>{
            return(<tr key={index}> <td>{characters.commission}</td></tr>)
        })



        return(
            <div className="TableComponents">
              <table>
                    <thead>
                        <tr>
                            <td>Amount payable for current month</td>
                            <td>{rowsValue}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Interest Value </td>
                            <td>{rowsValue1}</td>
                        </tr>
                        <tr>
                        <td>Amount for auctioned person</td>
                            <td>{rowsValue2}</td>
                        </tr>
                        <tr>
                        <td>Bonus Amount</td>
                            <td>{rowsValue3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table2