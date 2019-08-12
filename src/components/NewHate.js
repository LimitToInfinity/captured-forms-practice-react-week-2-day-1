import React, { Component } from "react";

export default class NewHate extends Component {
    state = {
        rage: "",
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]:value, });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewHate(this.state);
        this.setState({ rage: "", });
    }

    render() {
        return (
            <form className="new-hate" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Share your hate"
                    name="rage"
                    value={this.state.rage}
                    onChange={this.handleChange}
                     />
                <input type="submit" name="add-hate" />
            </form>
        );
    }
}