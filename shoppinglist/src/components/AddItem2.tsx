import { useState } from "react"
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { Item } from "../App";
// 4번 라인의 경우 전에는 types.ts 에서 불러왔었습니다.

export default function AddItem2(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
  })

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = event => {
    setItem({...item, [event.target.name]:event.target.value});
  }

  return (
    <>
      <Button onClick={handleOpen}>Add Item2</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField onChange={handleChange} name="product" value={item.product} label='Product' margin="dense" fullWidth/>
          <TextField onChange={handleChange} name="amount" value={item.amount} label='Amount' margin="dense" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}