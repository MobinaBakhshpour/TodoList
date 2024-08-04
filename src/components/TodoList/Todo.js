import React, { Component } from 'react'

export default class Todo extends Component {

    render() {
        return (
            // 'completed' class for completed todos 
            <div className='todo' style={{ display: 'flex' }}>
                <li className= {this.props.completed ? 'completed todo-item' : 'todo-item'}>{this.props.title}</li>

                <button className="check-btn " onClick={this.props.completedHandler.bind(this)} >
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.props.removeHandler.bind(this)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}