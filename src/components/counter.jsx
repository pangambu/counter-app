import React, { Component } from 'react';

class Counter extends Component {

    // componentDidUpdate(preProps, preState) { 
    //     console.log('preProps', preProps)
    //     console.log('preState', preState);
    //     if (preProps.counter.value !== prop.preProps.value) {
    //         //Make an ajax call to get data from the server
    //     }
    // }

    componentWillUnmount() { 
        console.log("Unmount");

    }

    render() {
        console.log("Counter - Rendered");
        return (
            <div className="row">
                <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    
                </div>
                
                <div className="col">
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">+</button>
                
                    <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={ this.props.counter.value === 0 ? 'disable' : ""}>-</button>
                
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm">X</button>
                    
            </div>
                
                
               
               
            </div>
        );
    }

    getBadgeClasses() { 
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() { 
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;

    }

    
}
 
export default Counter;