import React, { useReducer, useRef } from "react";
import {
  TodoStateContext,
  TodoDispatchContext,
  TodoNextIdContext,
} from "./Context";

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      return state;
  }
}

const initialTodos = [
  {
    id: 1,
    text: "아침 산책",
    done: false,
  },
  {
    id: 2,
    text: "오늘의 뉴스 읽기",
    done: true,
  },
  { id: 3, text: "샌드위치 사 먹기", done: true },
  { id: 4, text: "리액트 공부하기", done: false },
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  const nextId = useRef(initialTodos.length + 1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
