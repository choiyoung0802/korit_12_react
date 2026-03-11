import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Button, Checkbox } from '@mui/material'
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'

export type Todo = {
  mainTodo: string;
  subTodo: string;
  comTodo: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  const toggleCompleted = (index: number) => {
    setTodos(comp =>
      comp.map((todo, i) =>
        i === index ? {...todo, comTodo: !todo.comTodo} : todo)
    )
  }

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              MY Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo addTodo={addTodo}/>
        <List>
          {
            todos.map((todo, index) =>
              <ListItem key={index} divider>
                <Checkbox checked={todo.comTodo} onChange={() => toggleCompleted(index)}/>
                <ListItemText
                  primary={todo.mainTodo}
                  secondary={todo.subTodo}
                  sx={{textDecoration: todo.comTodo ? "line-through" : "none"}}
                />
                <Button color="error" onClick={() => deleteTodo(index)}>
                  삭제
                </Button>
              </ListItem>
            )
          }
        </List>
      </Container>
    </>
  )
}

export default App