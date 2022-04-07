import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'code',
      status: 'complete'
    },
    {
      id: 3,
      title: 'sleep',
      status: 'new'
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoItemClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'complete' : 'new'
    }

    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }

  const handleShowCompletedClick = () => {
    setFilteredStatus('complete');
  }

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  }

  const filteredTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)

  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={filteredTodoList} onTodoItemClick={handleTodoItemClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;