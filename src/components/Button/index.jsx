import "./styles.css";
// import { Component } from "react";

export const Button = ({ text, onClick, disabled }) => (
  <button
    className='btn'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

// export class Button extends Component {
//   render() {
//     const { text, onClick, disabled } = this.props;

//     return (
//       <button disabled={disabled} className="btn" onClick={onClick}>
//         {text}
//       </button>
//     );
//   }
// }
