import TodoItem from './TodoItem';
import styles from './TodoList.component.css';

const TodoList = ({ todoList, deleteTodoItem, toggleTodoHandler }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todoList.length && <h2>Todo list is empty</h2>}
      {todoList.map(
        (todoItem) =>
          todoList.length > 0 && (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              toggleTodoHandler={toggleTodoHandler}
              deleteTodoItem={deleteTodoItem}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
