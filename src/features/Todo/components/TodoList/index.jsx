import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoItemClick: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  onTodoItemClick: null
}

function TodoList(props) {
  const { todoList, onTodoItemClick } = props;

  const handleTodoItemClick = (todo, idx) => {
    console.log(todo);
    if (!onTodoItemClick) return;

    onTodoItemClick(todo, idx);
  }

  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({
            'todo-item': true,
            complete: todo.status === 'complete'
          })}
          onClick={() => handleTodoItemClick(todo, idx)}
        >{idx}: {todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;