import React from 'react';

// class Pet extends React.Component {
//     render() {
//         return <div className="petSprite">
//             <img src={ this.props.image } />
//             <p className="name">{this.props.name}</p>
//             <p className="hunger">{this.props.hunger}</p>
//             <button className="button" onClick={() => this.feedPet(this.props._id)}>
//                 Feed
//             </button>
//         </div>
//     }
// }

const Pet = ({ name, age, happiness, hungry, sprite }) => (
    <div className='pet'>
        <div className="name">{ name }</div>
        <div className="age"><p>{ age } years old.</p></div>
        <div className="happiness"><p>{happiness}</p></div>
        <div className="hunger"><p>{hungry}</p></div>  
        <div className="petSprite"><img src={ sprite } /></div>
    </div>
)

export default Pet;