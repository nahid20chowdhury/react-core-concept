import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Anwar', 'Jasim', 'Alomgir', 'Razzak', 'Bappi', 'Shuvo']
const products = [
  {name: 'Photoshop', price: '$99.99'},
  {name: 'Illustrator', price: '$80.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'Indesign', price: '$89.99'}
]
// const productNames = products.map(product => product)
// console.log(productNames);

// const nayokNames = nayoks.map(nayok => nayok);
// console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        </header>        
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [4])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product (props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'black'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border: '2px solid gold', width: '400px', margin: '10px', padding: '20px'}}>
      <h3>My Name is: {props.name}</h3>
      <p>I'm a: {props.job}</p>
    </div>
  )
}


export default App;
