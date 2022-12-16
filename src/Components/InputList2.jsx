import React from "react";
import { Component } from "react";
                                                                                

class InputList2 extends Component{

    constructor(props){
        super(props)

        this.state={data:{chitValue:"",
        commissionValue:"",
        auctionAmount:"",
        totalMonths:"",
        presentMonth:""},values:{}
            
      }
    }
    //update state
    handleChange=(e)=>{
        let {name, value}= e.target
        this.setState({[name]:[value]});


     }
     //submit data
    
     submitForm=()=>{  

        let bMap = {}

        let display = [{ ...this.auctionValue()}, { ...this.bonusFirstInstallment() }, { ...this.bonusSecondInstallment() }, ...this.bonusThirdInstallment()];

        for (let i = 0; i < display.length; i++) {
            Object.assign(bMap, display[i]);
        
            if (this.state.presentMonth) {
               this.setState({...bMap});
                let bonusValue = [{...bMap}]
                this.props.handleSubmit(bonusValue)
            
            }
        }

    }
    
     
     //Calculating Auction Amount
   auctionValue=()=> {
        if (Number(this.state.auctionAmount)){
        const auctionAmount = Number(this.state.chitValue) - Number(this.state.auctionAmount)
        return auctionAmount
        }
        return null
        
    }

    //first cal
    bonusFirstInstallment=()=> {
        let id = 1
        let interest = 0;
        let installment = this.state.chitValue / this.state.totalMonths
        let commission = this.state.chitValue * (parseInt(this.state.commissionValue) / 100)
        let amountVal = this.state.chitValue
        const auctionAmount = parseInt(this.state.chitValue) - parseInt(this.state.auctionAmount)
        console.log(auctionAmount);
        return { id, interest, installment,amountVal, commission }
    }

    //second call
    bonusSecondInstallment=()=> {
        let id = 2
        let amount = this.state.chitValue * (30 / 100);
        let amountVal = this.state.chitValue - amount
        let commission = amountVal * (parseInt(this.state.commissionValue) / 100)
        let interest = ((100 - ((amountVal / this.state.chitValue) * 100)) / 100).toFixed(2)
        let installment = amountVal /this.state.totalMonths
        const auctionAmount = parseInt(this.state.chitValue) - parseInt(this.state.auctionAmount)
        console.log(auctionAmount);
        return { id, interest, installment,amountVal, commission }
    }

    //final cal
    bonusThirdInstallment=()=> {
        let amount = this.state.chitValue * (30 / 100);
        let Value = amount / (this.state.totalMonths - 3);
        let oldValue = this.state.chitValue- amount;
        const arr = []
        for (let i = 1; i <= (this.state.totalMonths- 3); i++) {
            let id = i + 2
            oldValue = oldValue + Value;
            let amountVal = (Math.round(oldValue) * 100) / 100;
            let installment = ((Math.round(amountVal / this.state.totalMonths)) * 100) / 100;
            let commission = ((Math.round(amountVal * (parseInt(this.state.commissionValue) / 100))) * 100) / 100
            let interest = ((100 - ((amountVal / this.state.chitValue) * 100)) / 100).toFixed(2)
            const auctionAmount = parseInt(this.state.chitValue) - parseInt(this.state.auctionAmount)
            console.log(auctionAmount);
            let obj = { id, interest, installment,amountVal, commission }

            arr.push(obj)
        }
        return arr
    }
    
    //clear button
     handleClear=()=>{
        this.setState({
            chitValue:"",
            commission:"",
            auctionAmount:"",
            totalMonths:"",
            presentMonth:""
      })
     }
    render(){
        return(
            <div className="inputBox2">
            <label htmlFor="">Chit Value</label>
            <input type="text"
            name="chitValue"
            value={this.state.chitValue}
            onChange={this.handleChange}
            />
            <label htmlFor="">Commission Percentage %</label>
            <select className="selectOp2" 
            name="commissionValue"
            value={this.state.commissionValue}
            onChange={this.handleChange}
            >
                <option value="5">5%</option>
                <option value="4">4%</option>
                <option value="3">3%</option>
                <option value="2">2%</option>
                <option value="1">1%</option>
            </select>
            <label htmlFor="">Auction Amount (Optional)</label>
            <input type="text"
            name="auctionAmount"
            value={this.state.auctionAmount}
            onChange={this.handleChange} />
            <div className="sideInput">
            <label htmlFor="">Total Months</label>
            <input type="text" 
            name="totalMonths"
            value={this.state.totalMonths}
            onChange={this.handleChange}/>
            <label htmlFor="">Present Months</label>
            <input type="text"
            name="presentMonth"
            value={this.state.presentMonth}
            onChange={this.handleChange}/>
            </div>
            <div className="btn">
            <button className="ClearBtn1" onClick={this.handleClear}>Clear</button>
            <button className="CalBtn1" onClick={this.submitForm}>Calculate</button>
            </div>
            
            </div>
        )
    }
}

export default InputList2