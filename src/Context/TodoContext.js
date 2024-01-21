import { createContext, useContext } from "react";

export const TodoContext = createContext ({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            compeleted: false,
        }
    ],
    addTod: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompelet: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider