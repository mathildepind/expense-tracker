import React from 'react';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    const {item} = this.props;
    return (
      <div>
        <div className="grid-container">
          <div className="expense-item"><h5>{item.description}</h5></div>
          <div className="date-spent"><h5>{item.date}</h5></div>
          <div className="expense-amount"><h5>{item.amount}</h5></div>
        </div>
      </div>
    );

  }
}

export default ExpenseItem;
