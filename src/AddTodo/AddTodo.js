import React, { useState } from 'react';
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
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{' '}
      {/*в placeholder передаем значение из value State, при изменении вызываем setValue и передаем значение введенное в поле */}
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}
export default AddTodo;
