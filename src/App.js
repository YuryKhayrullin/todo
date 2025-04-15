import React, { useState } from 'react';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import { Container } from 'react-bootstrap';

function App() {
  const [todo, setTodo] = useState([
    //хранит базу данных
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    },
  ]);
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />{' '}
      {/*передаем в компонент TodoList*/}
    </Container>
  );
}

export default App;
