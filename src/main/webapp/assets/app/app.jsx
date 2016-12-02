// import React, { Component, PropTypes } from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
//
// // React component
// class Counter extends Component {
//     render() {
//         const { value, onIncreaseClick } = this.props;
//         return (
//             <div>
//             <span>{value}</span>
//             <button onClick={onIncreaseClick}>Increase</button>
//             </div>
//     )
//     }
// }
//
// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// };
//
// // Action
// const increaseAction = { type: 'increase' };
//
// // Reducer
// function counter(state = { count: 0 }, action) {
//     const count = state.count;
//     switch (action.type) {
//         case 'increase':
//             return { count: count + 1 };
//         default:
//             return state
//     }
// }
//
// // Store
// const store = createStore(counter)
//
// // Map Redux state to component props
// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//             onIncreaseClick: () => dispatch(increaseAction)
// }
// }
//
// // Connected Component
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter);
//
// ReactDOM.render(
// <Provider store={store}>
//     <App />
//     </Provider>,
//     document.getElementById('root')
// );

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('root'));