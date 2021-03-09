import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formText: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      formText: e.target.value,
    });
  };

  submitChange = (e) => {
    e.preventDefault();

    this.props.newItem(this.state.formText);
  };

  render() {
    return (
      <form onSubmit={this.submitChange}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="formText"
          value={this.state.formText}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={this.props.remove}>
          Clear
        </button>
      </form>
    );
  }
}
export default TodoForm;
