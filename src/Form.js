import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            game: '',
            sport: '',
            category:''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { game, sport, category } = event.target;

       /* this.setState({
            [game] : value
        });*/
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                    <label>
                      Games
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="2016">Rio 2016</option>
                        <option value="2012">London 2012</option>
                        <option value="2008">Beijing 2008</option>
                      </select>
                    </label>

                     <label>
                      Sport
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Swimming">Swimming</option>
                        <option value="Shooting">Shooting</option>
                        <option value="Tennis">Tennis</option>
                      </select>
                    </label>

                      <label>
                      Category
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                      </select>
                    </label>  
                                        
                    <button name="clear">
                        Clear
                    </button>                
                    <button type="submit">
                        Submit
                    </button>
            </form>
        );
    }
}

export default Form;
