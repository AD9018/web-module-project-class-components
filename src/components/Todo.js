import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      style={props.item.completed ? { textDecoration: `line-through` } : {}}
    >
      {props.item.task}
    </div>
  );
};

export default Todo;
