import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super();
    this.handlePClick = this.handlePClick.bind(this)

    this.state = {
      name: 'Kleiton Albuquerque',
      counter: 0
    };
  }

  handlePClick() {
    // const { name } = this.state
    // console.log(`<p>clicado</p> ${name}`)
    this.setState({ name: 'Mariana Oliveira de Albuquerque' })
  }

  // função arrow substitui o bind
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state
    return (
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         {/* <p>
           Edit <code>src/App.js</code> and save to reload.
         </p> */}
         <p onClick={ this.handlePClick }>
          Nome: {name} {counter}
         </p>
         <a
           onClick={ this.handleAClick }
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
    )
  }
}

export default App;
