import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log('click');
    // }
    render() {
        return (
            <button className="button" onClick={this.props.feedPet(this.props._id)}>
             Feed
            </button>
        )
    }
}

// const Button = (props) => {

//         return (
//             <button className="button">
//                 Feed
//             </button>
//         )
    
    
// };

export default Button;