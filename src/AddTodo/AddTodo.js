import React, { useState } from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import './AddTodo.css'

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState('');

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: 4,
        title: value,
        status: true,
      },
    ]);

    setValue(''); //написали в placeholder, нажали сохранить и надпись стерлась
  }
  return (
    <Row>
      <Col className='addTodoForm'>
        <FormControl
          placeholder="Введите задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{' '}
        {/*в placeholder передаем значение из value State, при изменении вызываем setValue и передаем значение введенное в поле */}
        <Button onClick={saveTodo} className='btn'>Сохранить</Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
