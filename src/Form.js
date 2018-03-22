import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : "",
      amount : "",
      expenseDescription : "",
      errorMessageAmount : "",
      errorMessageDate : "",
      errorMessageDescription : ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleCancelClick = this.handleCancelClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name;
    this.setState({
      [name] : event.target.value
    });
    console.log(this.state);
  }

  handleClick(event){
    event.preventDefault();

    let validDate = this.validateInput(this.state.date);
    let validAmount = this.validateInput(this.state.amount);
    let validDescription = this.validateInput(this.state.expenseDescription);
    let validAll = validDate && validAmount && validDescription;

    if (validDate === false) {
      this.setState({errorMessageDate : 'Please enter date'});
    } else {
      this.setState({errorMessageDate : ''});
    };
    if (validAmount === false) {
      this.setState({errorMessageAmount : 'Please enter amount'});
    } else {
      this.setState({errorMessageAmount : ''});
    };
    if (validDescription === false) {
      this.setState({errorMessageDescription : 'Please enter description'});
    } else {
      this.setState({errorMessageDescription : ''});
    };

    const inputDate = event.target.date.value;
    const displayDate = inputDate.split('-').reverse().join('-');
    const expenseAmount = event.target.amount.value;
    const expenseDescription = event.target.expenseDescription.value;

    if (validAll === true) {
      this.props.receiver(displayDate,inputDate,expenseAmount,expenseDescription);
      this.setState({
        date : "",
        amount : "",
        expenseDescription : ""
      });
    }
  }

  // handleCancelClick(event){
  //   event.target.reset();
  //   console.log(event.target);
  // }

  validateInput(input){
    if (input.length === 0) {
      return false;
    } else {
      return true;
    }
  }


  render() {
    const {errorMessageAmount, errorMessageDate, errorMessageDescription} = this.state;
    let errorDate = errorMessageDate ? <p>{errorMessageDate}</p> : null;
    let errorAmount = errorMessageAmount ? <p>{errorMessageAmount}</p> : null;
    let errorDescription = errorMessageDescription ? <p>{errorMessageDescription}</p> : null;
    return (
      <div>
        <div className="wrapper">
          <form 
            className="grid-form" 
            onSubmit={this.handleClick}
          >
          <div className="date-label"><label htmlFor="date">Date</label></div>
          <div className="date-input">
            <input 
              name="date" 
              type="date" 
              placeholder="Date.."
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            {errorDate}
          </div>
          
          <div className="amount-label"><label htmlFor="amount">£</label></div>
          <div className="amount-input">
            <input 
              name="amount" 
              type="number" 
              placeholder="Amount.." 
              value={this.state.amount}
              onChange={this.handleInputChange}
              message={this.errorMessageAmount}
              />
              {errorAmount}
            </div>
          <div className="item-label"><label htmlFor="expenseDescription">Item</label></div>
          <div className="item-input">
            <input 
              name="expenseDescription" 
              type="text" 
              placeholder="Description.."
              value={this.state.expenseDescription}
              onChange={this.handleInputChange}
              message={this.errorMessageDescription}
              />
              {errorDescription}
          </div>
          <div className="button-grid">            
            <div className="expense-amount">
              <button 
                className="addButton" 
                type="submit">
                +
              </button>
            </div>
            {/* <button className="cancelButton" onClick={this.handleCancelClick}>X</button> */}
          </div>
          </form>
        </div>

      </div>
    );

  }
}

export default Form;
