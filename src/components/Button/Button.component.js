import React from 'react';
import './Button.component.css'
// class Button extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div className="divButton">
//       </div>
//     );
//   }
// }
const Button = (props) => {
        return <button className="button" onClick = {props.onClick}>{props.caption}</button>
        }
export default Button;
