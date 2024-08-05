import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        // this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }

    todoTitleHandler(event) {
        let title = event.target.value
        this.setState({
            todoTitle: title
        })

    }

    addTodo(event) {
        event.preventDefault()
        this.setState((preState) => ({
            todos: [...preState.todos, { id: this.state.todos.length + 1, title: this.state.todoTitle, completed: false }],
            todoTitle: ''
        }))

    }


    editTodo(id) {
        console.log(id)
        this.setState((preState) => ({
            todos: preState.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )

        }));
    }

    removeTodo(id) {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id)
        }));
    }

    statusHandler(event) {
        console.log(event.target.value);
        this.setState({
            status: event.target.value
        })

    }



    render() {
        return (
            <>
                <Header />
                <form>
                    <input type="text" className="todo-input" value={this.state.todoTitle} maxLength="40" onChange={this.todoTitleHandler} />
                    <button className="todo-button" type="submit" onClick={this.addTodo}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.todos.map((todo) => {
                            if (this.state.status == 'completed' && todo.completed) {
                                return (<Todo{...todo} completedHandler={this.editTodo.bind(this, todo.id)} removeHandler={this.removeTodo.bind(this, todo.id)} key={todo.id} />);
                            } else if (this.state.status == 'uncompleted' && !todo.completed) {
                                return (<Todo{...todo} completedHandler={this.editTodo.bind(this, todo.id)} removeHandler={this.removeTodo.bind(this, todo.id)} key={todo.id} />);

                            } else if (this.state.status === 'all') {
                                return (
                                    <Todo
                                        {...todo}
                                        completedHandler={this.editTodo.bind(this, todo.id)}
                                        removeHandler={this.removeTodo.bind(this, todo.id)}
                                        key={todo.id}
                                    />
                                );
                            }

                        })}

                    </ul>
                </div>
            </>
        )
    }
}
// todo.completed == true && this.state.status==='completed'  ? <Todo{...todo}  completedHandler={this.editTodo.bind(this , todo.id)} removeHandler={this.removeTodo.bind(this , todo.id)} key={todo.id}/> : 

