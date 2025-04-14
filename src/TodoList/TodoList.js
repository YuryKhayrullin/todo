import React, {useState} from 'react'

function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState("")

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id) //перебераемый id не должен быть равен id получаемый из кнопки delete
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => { //фильтруем todo, ищем элемент с таким же id, если такое есть, то статус todo меняем на противоположное значение
            if (item.id === id) {
                item.status = !item.status
            }
            return item //если нашли такой элемент выходим из цикла
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) { //при клике на Редакстировать занесли из editTodo в edit State, если оно совпало с id которое перебирали map
        setEdit(id)
        setValue(title)
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        {
                            //если совпало id которое ввели с id которое перебрали map, то выводим input,button
                            edit === item.id ?
                                <div>
                                    <input value={value}/>
                                </div> :
                                <div>{item.title}</div>
                        }

                        {
                            edit === item.id ?
                                <div>
                                    <button>Сохранить</button>
                                </div> :
                                <div>
                                    <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                                    <button onClick={() => editTodo(item.id, item.title)}>Редактировать</button>
                                    {/*нажали Редактировать, отправили item id в функцию editTodo*/}
                                    <button onClick={() => statusTodo(item.id)}>Закрыть / Открыть</button>


                                </div>
                        }
                        <div>{item.title}</div>
                        {/*вывели значение title из todo State*/}

                    </div>
                ))}
        </div>
    )
}

export default TodoList
