import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    
    
    render() { 

        console.log("Counters - Rendered");
        
        const {onReset, counters, onDelete,onDecrement, onIncrement} = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                
                {counters.map(counter => (
                    <Counter key={counter.id}
                        onDelete={this.props.onDelete}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        counter={ counter }/>
                       
                    ))}
            </div>
        );
    }
}
 
export default Counters;