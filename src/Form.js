import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event){
    event.preventDefault();
    const expenseDate = event.target.date.value;
    const expenseAmount = event.target.amount.value;
    const expenseDescription = event.target.expenseDescription.value;
    this.props.receiver(expenseDate,expenseAmount,expenseDescription);
  }


  render() {
    return (
      <div>
        <div className="form-container">
        <form onSubmit={this.handleClick}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="date">Date</label>
            </div>
            <div className="col-75">
              <input id="date" type="date" placeholder="Date.."/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="amount">£</label>
            </div>
            <div className="col-75">
              <input id="amount" type="number" placeholder="Amount.."/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="expenseDescription">Item</label>
            </div>
            <div className="col-75">
              <input id="expenseDescription" type="text" placeholder="Description.."/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
              <button className="addButton" type="submit">+</button>
            </div>
          </div>
        </form>
        <button className="cancelButton">X</button>
        </div>
      </div>
    );

  }
}

export default Form;
