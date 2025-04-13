import React from 'react'

function TodoList ({todo, setTodo}) {

  function deleteTodo (id) {     {/*получает id*/}
let newTodo = [...todo].filter(item => item.id!=id) //перебераемый id не должен быть равен id получаемый из кнопки delete
 setTodo(newTodo)
}

function statusTodo (id) {
  let newTodo = [...todo].filter(item => { //фильтруем todo, ищем элемент с таким же id, если такое есть, то статус todo меняем на противоположное значение
    if(item.id == id) {
      item.status = !item.status
    }
  return item //если нашли такой элемент выходим из цикла
  })
  setTodo(newTodo)
}
  return (
<div> 
  {todo.map( item =>
  <div key={item.id}>
    <div>{item.title}</div> {/*вывели значение title из todo State*/}
  <button onClick={ () => deleteTodo(item.id)}>Удалить</button>
  <button onClick={ () => statusTodo(item.id)}>Закрыть / Открыть</button>
  </div>
  )}
</div>
  )
}

export default TodoList
