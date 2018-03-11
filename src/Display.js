import React from 'react';
import ExpenseItem from './ExpenseItem';

class Display extends React.Component {
  constructor(props){
    super(props);
    
    this.displayItems = this.displayItems.bind(this);
  }

  displayItems() {
  }


  render() {
    const {items} = this.props;
    const itemList = items ? items.map(item => {return <ExpenseItem item={item} />; }) : null;
    return (
      <div>
        <div>
          <h3>Total spending:</h3>
        </div>
          {itemList}
        <div>
          
        </div>
      </div>
    );

  }
}

export default Display;
