import React from 'react';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    const {item} = this.props;
    return (
      <div>
        <div className="form-container">
          <div className="row">
            <div className="col-40"><h5>{item.date}</h5></div>
            <div className="col-40"><h5>{item.description}</h5></div>
            <div className="col-20"><h5 className="amount-text">£ {item.amount}.00</h5></div>
          </div>

        </div>
      </div>
    );

  }
}

export default ExpenseItem;
