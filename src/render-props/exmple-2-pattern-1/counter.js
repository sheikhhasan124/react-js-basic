import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
    }
 
   incrementCount = () =>{
       this.setState((prevState)=>({count:prevState.count + 1}))
   }
 

    render() {
         const {render} = this.props;
         const {count} = this.state;

        return (
            <div>
               {render(count, this.incrementCount)}
            </div>
        );
    }
}

export default Counter;