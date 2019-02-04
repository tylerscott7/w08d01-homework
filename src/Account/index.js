import React, { Component } from 'react';

class Account extends Component {
  state = {
    balance: 0
  }
  handleDeposit = (e) => {
    e.preventDefault();
    console.log(this);
    const amount = parseInt(this.inputBox.value);
    if (amount >= 0) {
      const newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    }
  }
  handleWithdrawal = (e) => {
    e.preventDefault();
    console.log(this);
    const amount = parseInt(this.inputBox.value);
    if (this.state.balance - amount < 0){
      alert("You can't withdraw that much!")
    } else if (!this.state.balance){
      alert("Enter a valid amount to withdrawal!")
    } else {
      const newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    }
  }
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" name="inputBox" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDeposit} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawal} />
      </div>
    )
  }
}

export default Account;
