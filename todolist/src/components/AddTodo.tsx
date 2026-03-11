import { useState } from "react"
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { Todo } from "../App";

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
}

export default function AddTodo(props: AddTodoProps) {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>({
    mainTodo: '',
    subTodo: '',
    comTodo: false,
  })

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addTodo = () => {
    props.addTodo(todo);
    setTodo({mainTodo:'', subTodo:'', comTodo: false});
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">Add Todo</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Todo</DialogTitle>
        <form onSubmit={(e) => {e.preventDefault(); addTodo();}}>
          <DialogContent>
            <TextField onChange={e => setTodo({...todo, mainTodo: e.target.value})} value={todo.mainTodo} label='MainTodo' margin="dense" fullWidth placeholder="할일을 추가하세요."/>
            <TextField onChange={e => setTodo({...todo, subTodo: e.target.value})} value={todo.subTodo} label='SubTodo' margin="dense" fullWidth placeholder="할일에 대한 부가 설명을 작성하세요."/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={addTodo} type="submit">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}