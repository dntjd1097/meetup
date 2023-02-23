<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const Wrapper1 = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
`;
const Title = styled.h1`
  margin-left: 42%;
  width: 300px;
  padding-bottom: 20px;
  font-size: 30px;
  position: flex;
`;
const Form = styled.form`
  margin-left: 35%;
  width: 40%;
  padding-bottom: 20px;
  position: flex;
`;
const ListAdd = styled.input`
  position: flex;
  margin-left: 0%;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
`;
const Plus = styled.button`
  position: flex;
  width: 50px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return alert("내용을 입력해주세요.");
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    nextId.current += 1;
    setValue("");
  };

  return (
    <>
      <Wrapper1>
        <Title>To do List</Title>
        <Form onSubmit={onSubmit}>
          <ListAdd
            autoFocus
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력 후, Enter 를 누르세요"
          />
          <Plus>+</Plus>
        </Form>
      </Wrapper1>
    </>
  );
}

export default React.memo(TodoCreate);
=======
import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const Wrapper1 = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
`;
const Title = styled.form`
  margin-left: 42%;
  width: 300px;
  padding-bottom: 20px;
  font-size: 30px;
  position: flex;
`;
const ListAdd = styled.input`
  position: flex;
  margin-left: 0%;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
`;
const Plus = styled.button`
  position: flex;
  width: 50px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();


  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    nextId.current += 1;
    setValue("");
  };

  return (
    <>
        <Wrapper1>
          <Title onSubmit={onSubmit}>
            To do List
            <ListAdd
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
            <Plus>+</Plus>
          </Title>
        </Wrapper1>
    </>
  );
}

export default React.memo(TodoCreate);
>>>>>>> cdf43affd548f62ddf34aa865536df4c5713f94a
