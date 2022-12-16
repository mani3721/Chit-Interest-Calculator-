import React from "react";
import { Component } from "react";



class InputList extends Component{

    constructor(props){
        super(props)


        this.state={values:{
            ChitValue:"",
            commPercent:"",
            totalMonths:"",
            presentMonth:""},
            display:[]
        }                                 
    }

    //update date
     handleChange=(e)=>{
        let {name, value}= e.target
        this.setState({[name]:[value]});
      }

    //submit button
    handleClick=()=>{  
        let totalValue = [...this.state.display, { ...this.cal1() }, { ...this.cal2() }, ...this.cal3()]
        this.props.handleSubmitValue(totalValue)

    }

    //TableData1
    cal1=()=> {
        let Installment =this.state.ChitValue / this.state.totalMonths
        let Commission = this.state.ChitValue * (parseInt(this.state.commPercent) / 100)
        let interest = 0
        let AmountVal = this.state.ChitValue-Installment
        return { interest, AmountVal, Installment, Commission }
    }

    //TableData2 
    cal2=()=> {
        let Amounts = this.state.ChitValue * (30 / 100);
        let AmountValue = this.state.ChitValue - Amounts;
        let Installment = AmountValue / this.state.totalMonths;
        let Commission = AmountValue * (parseInt(this.state.commPercent) / 100);
        let interest = (100 - ((AmountValue / this.state.ChitValue) * 100)) / 100
        let AmountVal = parseInt(AmountValue)
        return { interest, AmountVal, Installment, Commission }
    }

    //TableData3
    cal3=()=> {
        let length = this.state.totalMonths - 2
        let Amounts = this.state.ChitValue * (30 / 100);
        let Value = Amounts / (length);
        let oldValue = this.state.ChitValue - Amounts;
        const arr = []
        for (let i = 1; i <= length; i++) {
            oldValue = oldValue + Value;
            let AmountVal = parseInt((Math.round(oldValue) * 100) / 100);
            let Installment = ((Math.round(AmountVal /this.state.totalMonths)) * 100) / 100;
            let Commission = ((Math.round(AmountVal * (parseInt(this.state.commPercent) / 100))) * 100) / 100
            let Interst = (parseInt(100 - ((AmountVal / this.state.ChitValue) * 100)) / 100)
            let interest = Interst.toFixed(2)
            let obj = { interest, AmountVal, Installment, Commission }
            arr.push(obj)
        }
        return arr
    }
    //clear button
    handleClear=()=>{
       this.setState({
                ChitValue:"",
                commPercent:"",
                totalMonths:"",
                presentMonth:"",
              })
            }

    render(){
        return(
            // <form action="" onSubmit={this.handleClick} >
            <div className="inputBox">
               
            <label htmlFor="">Chit Value</label>
            <input type="text" 
             name="ChitValue"
             value={this.state.ChitValue}
            onChange={this.handleChange}
              required />
            <label htmlFor="">Commission Percentage %</label>
            <select className="selectOp1" 
            value={this.state.commPercent}
            name="commPercent"
            onChange={this.handleChange}
            >
                <option value='1'>1%</option>
                <option value='2'>2%</option>
                <option value='3'>3%</option>
                <option value='4'>4%</option>
                <option value='5'>5%</option>
            </select>

            <label htmlFor="">Total Months</label>
            <input type="text"
            name="totalMonths"
            value={this.state.totalMonths}
            onChange={this.handleChange}
            required/>

            <label htmlFor="">Present Month</label>
            <input type="text"
            name="presentMonth"
            value={this.state.presentMonth}
            onChange={this.handleChange}
             required/>
            <div className="btn">
            <button className="ClearBtn" onClick={this.handleClear}>Clear</button>
            <button className="CalBtn" onClick={this.handleClick}>Calculate</button>
            {/* <input type="submit" value="Calculate" /> */}
            
            </div>
           
            </div>
          
        )
    }
}

export default InputList
