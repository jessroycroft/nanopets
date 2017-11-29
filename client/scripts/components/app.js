import React from 'react';
import Pet from './pet';
// import Stats from './petStats';
// import Button from './button';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
           'pets': [], 
        }
        
    }

    render() {
        return <div className="app">
                <h1>Your pet:</h1>
                <div className="petStable">
                    {this.state.pets.map(pet => {
                     return (
                            <Pet key={pet._id} {...pet} />
                        )   
                    })}
                    
                </div>
            </div>

    }

    refresh() {
        // this.setState({ adding: null });

        fetch('/api/nanopets')
            .then(res => res.json())
            .then(pets => this.setState({ pets }))

    }

    componentDidMount() {
        this.refresh();
    }

}


export default App;