import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleInputChange(event){
    const name = event.target.id;
    this.setState({
      [name] : event.target.value
    });
    console.log(this.state);
  }

  handleClick(event){
    event.preventDefault();
    const inputDate = event.target.date.value;
    const displayDate = inputDate.split('-').reverse().join('-');
    const expenseAmount = event.target.amount.value;
    const expenseDescription = event.target.expenseDescription.value;
    event.target.reset();
    this.props.receiver(displayDate,inputDate,expenseAmount,expenseDescription);
  }

  handleCancelClick(event){
    event.target.reset();
    console.log(event.target);
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <form className="grid-form" onSubmit={this.handleClick}>
          <div className="date-label"><label htmlFor="date">Date</label></div>
          <div className="date-input"><input id="date" type="date" placeholder="Date.."/></div>
          <div className="amount-label"><label htmlFor="amount">£</label></div>
          <div className="amount-input"><input id="amount" type="number" placeholder="Amount.." onChange={this.handleInputChange}/></div>
          <div className="item-label"><label htmlFor="expenseDescription">Item</label></div>
          <div className="item-input"><input id="expenseDescription" type="text" placeholder="Description.."/></div>
          <div className="button-grid">            
            <div className="expense-amount">
              <button className="addButton" type="submit">+</button>
            </div>
            <button className="cancelButton" onClick={this.handleCancelClick}>X</button>
          </div>
          </form>
        </div>

      </div>
    );

  }
}

export default Form;
