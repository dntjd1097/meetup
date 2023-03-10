import { React, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../Context";

const Container_status = styled.div`
  display: flex;
  width: 100%;
  border: 3px solid;
  background-color: ${(props) => props.theme.contain_status_bg};
`;
const Wrapper_uncomplete = styled.div`
  border-right: 1px solid;

  width: 50%;
`;
const Wrapper_complete = styled.div`
  width: 50%;
`;
const Status = styled.h1`
  font-size: 30px;
  padding: 2% 0px;
  font-weight: bold;
  margin-left: 10px;
`;
const Container_board = styled.div`
  display: grid;
  grid-auto-flow: dense;
  width: 100%;
  height: 150%;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  background-color: ${(props) => props.theme.todo_create_bg};
  border: 1px solid;
`;
function TodoBoard() {
  const dispatch = useTodoDispatch();
  const DraggingOver = (e) => {
    e.preventDefault();
    //console.log("Dragging Over now");
  };
  const dragDropped = (e) => {
    //console.log("You have dropped!");
    const transferedTodoID1 = parseInt(e.dataTransfer.getData("drag_startID"));

    dispatch({
      type: "COMPLETE",
      id: transferedTodoID1,
    });
  };
  const todos = useTodoState();
  const [uncomplete, complete] = [
    todos.filter((todo) => !todo.done),
    todos.filter((todo) => todo.done),
  ];

  return (
    <>
      <Container_status>
        <Wrapper_uncomplete>
          <Status>UNCOMPLETE ({uncomplete.length})</Status>
        </Wrapper_uncomplete>
        <Wrapper_complete>
          <Status>COMPLETE ({complete.length})</Status>
        </Wrapper_complete>
      </Container_status>
      <Container_board
        droppable
        onDragOver={(e) => DraggingOver(e)}
        onDrop={(e) => dragDropped(e)}
      >
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            text={todo.text}
            done={todo.done}
            key={todo.id}
          />
        ))}
      </Container_board>
    </>
  );
}

export default TodoBoard;
