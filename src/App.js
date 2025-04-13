import React, { useState } from 'react';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';


function App () {

const [todo, setTodo] = useState([ //хранит базу данных
  {
    id: 1,
    title: 'first todo',
    status: true
  },
  {
    id: 2,
    title: 'second todo',
    status: true
  },
  {
    id: 1,
    title: 'third todo',
    status: false
  },
])
  return (
    <div className='App'>
<Header />
<AddTodo />
<TodoList todo={todo} setTodo={setTodo}/> {/*передаем в компонент*/}
    </div>
  );
}

export default App;