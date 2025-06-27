"use client"

import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data'

import type { Schema } from '../../../../packages/backend/amplify/data/resource'

const client = generateClient<Schema>()

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      // const todoData: any = await API.graphql({ query: listTodos });
      // setTodos(todoData.data.listTodos.items);
      const { data: items } = await client.models.Todo.list();
      setTodos(items);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleCreateTodo = async () => {
    try {
      await client.models.Todo.create({
        content: "hiiiiii"
      })
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* <input
          type="text"
          placeholder="Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        /> */}
        <button onClick={handleCreateTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                cursor: 'pointer',
              }}
              // onClick={() => handleUpdateTodo(todo)}
            >
              {todo?.content} - {todo.createdAt}
            </span>
            {/* <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button> */}
            <button onClick={() => {}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;