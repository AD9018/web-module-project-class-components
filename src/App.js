import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const dummyData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }

  toggleItem = (clickedOnId) => {
    this.setState({
      dummyData: this.state.dummyData.map((item) => {
        if (item.id === clickedOnId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      dummyData: [...this.state.dummyData, newItem],
    });
  };

  removeItem = () => {
    this.setState({
      dummyData: this.state.dummyData.filter((item) => {
        return item.completed === false;
      }),
    });
  };

  render() {
    return (
      <StyledDiv>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm newItem={this.addItem} remove={this.removeItem} />
          <TodoList
            newItem2={this.state.dummyData}
            removedItem={this.removeItem}
            toggleItem={this.toggleItem}
          />
        </div>
      </StyledDiv>
    );
  }
}

export default App;
