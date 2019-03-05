import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset, incrementOdd, incrementAsync } from '../actions';

class Counter extends Component {
    // incrementIfOdd = () => {
    //     // Stretch Problem: Implement an increment function that
    //     // only increments if the counter value is odd

    // };

    // incrementAsync = () => {
    //     // Stretch Problem: Implement an increment function that
    //     // increments after waiting for one second
    // };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        console.log('This is the state', this.props)
        return (
            <section className='container'>
                <p>
                    Clicked: <code>{this.props.count}</code> times 
                    <br></br>
                    <button onClick={() => this.props.increment()} className="btn-success my-3">
                        +
                    </button>
                    <button onClick={() => this.props.decrement()} className="btn-danger">
                        -
                    </button>
                    <button onClick={() => this.props.reset()} className="btn-dark">
                        RESET
                    </button>
                    <br></br>
                    {/* Uncomment these button tags if you got
                    around to implementing the extra credit functions */}
                    <button onClick={() => this.props.incrementOdd()} className="btn-info">
                        Increment if odd
                    </button>
                    <button onClick={() => this.props.incrementAsync()} className="btn-secondary">
                        Increment async
                    </button> 
                </p>
            </section>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        // count: state.count // Why?
        count: state // Why?
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement, reset, incrementOdd, incrementAsync })(Counter);

