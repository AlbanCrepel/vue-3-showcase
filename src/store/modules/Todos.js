import {todosLocalStorageKey} from "../../utils/utils";

const state = {
    todos: JSON.parse(localStorage.getItem(todosLocalStorageKey)) || []
};

const mutations = {
    addTodo(state, todo) {
        state.todos.push({...todo})
        updateTodosInLocalStorage()
    },
    removeTodo(state, index) {
        state.todos.splice(index, 1)
        updateTodosInLocalStorage()
    }
};

const actions = {

};

const getters = {
    getTodos: state => state.todos,
};

const updateTodosInLocalStorage = () => {
    localStorage.setItem(todosLocalStorageKey, JSON.stringify(state.todos));
}

export default {
    state,
    getters,
    actions,
    mutations
};
