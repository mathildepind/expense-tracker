import React from 'react';
import Form from './Form';
import Display from './Display';

class App extends React.Component {
  constructor(){
    super();
    this.state  = {
      items : [],
    };

    this.handleClickReceiver = this.handleClickReceiver.bind(this);
    this.displayReceiver = this.displayReceiver.bind(this);
  }


  handleClickReceiver(date,amount,item){
    console.log("localStorage length: " + window.localStorage.length);
    let newExpenseId = window.localStorage.length + 1;
    console.log("newExpenseId: " + newExpenseId);
    const expenseJson = JSON.stringify({
      'date': date,
      'amount': amount,
      'description': item});
    window.localStorage.setItem(newExpenseId, expenseJson);
    let expenseItem = JSON.parse(window.localStorage.getItem(newExpenseId));
    console.log(expenseItem);

  }


  displayReceiver(){
    let itemList = Object.keys(window.localStorage).reduce(function(obj, str) {
    obj[str] = JSON.parse(window.localStorage.getItem(str));
    return obj;}, []);
    this.setState({items : item});
    console.log(this.items);
    //call from Display - set receiverfunction on Display
  };

  displayItemArray(){
    let itemArray = Object.keys(window.localStorage).reduce(function(obj, str) {
      obj[str] = JSON.parse(window.localStorage.getItem(str));
      return obj;}, {});
    console.log(itemArray);
    console.log(Object.values(itemArray));
  }



  render(){

    const itemListDisplay = this.state.items ? <Display itemList = {this.state.items} /> : null;
    return (
      <div>
        <div>
          <Form
            receiver = {this.handleClickReceiver}
          />
        </div>
        <div>
          {itemListDisplay}
        </div>
        <div>
          {this.displayItemArray()}  
        </div>


      </div>
    );
  }
}

export default App;
