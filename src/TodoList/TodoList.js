import React, {useState} from 'react'

function TodoList ({todo, setTodo}) {

  const [edit, setEdit] = useState(null)

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
function editTodo (id) {
setEdit(true)
}
  return (
<div> 
  {
    todo.map( item => (
      <div key={item.id}>
    {
      edit ? 
      <div>
        <input/>
        <button>Сохранить</button>
        </div> :
        <div>{ item.title }</div>
    }
    <div>{item.title}</div> {/*вывели значение title из todo State*/}
  <button onClick={ () => deleteTodo(item.id)}>Удалить</button>
  <button onClick={ () => editTodo(item.id)}>Редактировать</button>
  <button onClick={ () => statusTodo(item.id)}>Закрыть / Открыть</button>
  </div>
  ))}
</div>
  )
}

export default TodoList
