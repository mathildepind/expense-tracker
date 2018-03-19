import React from 'react';

import Display from './Display';
import ExpenseItem from './ExpenseItem';
import Form from './Form';

class App extends React.Component {
  constructor(){
    super();
    this.state  = {
      items : [],
    };

    this.handleClickReceiver = this.handleClickReceiver.bind(this);
    this.displaySetState = this.displaySetState.bind(this);
  }


  handleClickReceiver(date,inputdate,amount,item){
    // console.log("localStorage length: " + window.localStorage.length);
    let newExpenseId = window.localStorage.length + 1;
    // console.log("newExpenseId: " + newExpenseId);
    const expenseJson = JSON.stringify({
      'date': date,
      'inputdate': inputdate,
      'amount': amount,
      'description': item});
    window.localStorage.setItem(newExpenseId, expenseJson);
    let expenseItem = JSON.parse(window.localStorage.getItem(newExpenseId));
    // console.log(expenseItem);
    let concatStateArray = this.state.items.concat(expenseItem);
    this.setState({items : concatStateArray});
  }

  componentDidMount(){
    this.displaySetState();
  }

  displaySetState(){
    let itemList = Object.keys(window.localStorage).reduce(function(obj, str) {
    obj[str] = JSON.parse(window.localStorage.getItem(str));
    return obj;}, {});
    const itemArray = Object.values(itemList);
    this.setState({items : itemArray});
  };

  displayItemArray(){
    let tempItemObj = Object.keys(window.localStorage).reduce(function(obj, str) {
      obj[str] = JSON.parse(window.localStorage.getItem(str));
      return obj;}, {});
    const itemArray = Object.values(tempItemObj);
    const dateSortedArray = [...itemArray];
    dateSortedArray.sort(function(a,b){
      let c = new Date(a.inputdate);
      let d = new Date(b.inputdate);
      return d-c;
      });
    // console.log(dateSortedArray);
    const itemList = dateSortedArray ? dateSortedArray.map(item => {return <ExpenseItem item={item} />; }) : null;
    return itemList;
  }



  render(){
    const itemListDisplay = this.state.items ? <Display itemList = {this.state.items} /> : null;
    console.log(this.state.items);
    return (
      <div>
        <div className="app-container">
          <header>
            <h1>Spender</h1>
          </header>
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
      </div>
    );
  }
}

export default App;
