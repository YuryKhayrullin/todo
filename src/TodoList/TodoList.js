import React, { useState } from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import './TodoList.css';

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id); //перебераемый id не должен быть равен id получаемый из кнопки delete
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      //фильтруем todo, ищем элемент с таким же id, если такое есть, то статус todo меняем на противоположное значение
      if (item.id === id) {
        item.status = !item.status;
      }
      return item
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    //при клике на Редакстировать занесли из editTodo в edit State, если оно совпало с id которое перебирали map
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      //нашли значение id и поменяли title на value
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className="listItems">
          {
            //если совпало id которое ввели с id которое перебрали map, то выводим input,button
            edit === item.id ? (
              <div>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
              </div>
            ) : (
              <div>{item.title}</div>
            )
          }

          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}></Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} className="btn">Удалить</Button>
              <Button onClick={() => editTodo(item.id, item.title)} className="btn">Редактировать</Button>
              {/*нажали Редактировать, отправили item id в функцию editTodo*/}
              <Button onClick={() => statusTodo(item.id)} className="btn">Закрыть / Открыть </Button>
            </div>
          )}
          {/*вывели значение title из todo State*/}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
