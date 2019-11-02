import React from 'react';
import PropTypes from 'prop-types';

// function Food({ name, tasty, rating}) {
//   return <div>
//     <h1>i love {name}</h1>
//     <h2>hmm.... {tasty}</h2>
//     <h3>rating -> {rating}/5.0</h3>
//     </div>
// }
// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   tasty : PropTypes.string.isRequired,
//   rating : PropTypes.number
// };

// const foods = [
//   { id : 1, name: "kimchi", tasty: "good"},
//   { id : 2, name: "bread", tasty: "good", rating : 4.5 },
//   { id : 3, name: "dongas", tasty: "good", rating : 4.9 }
// ]
// // function renderFood(dish) {
// //   console.log(dish)
// //   return <Food key={dish.id} name={dish.name} tasty={dish.tasty} rating={dish.rating}></Food>
// // }

// function App() {
//   return (
//     <div>
//       {foods.map((dish) => (
//         <Food key={dish.id} name={dish.name} tasty={dish.tasty} rating={dish.rating}></Food>
//       ))}
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("hello")
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count : current.count + 1}))
  };
  minus = () => {
    this.setState(current => ({count : current.count - 1}))
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component update");
  }
  componentWillUnmount(){
    console.log("good bye")
  }
  render() {
    console.log("im rendering??????????????????");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
