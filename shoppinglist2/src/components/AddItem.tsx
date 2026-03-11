import { useState } from "react"
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { Item } from "../App";

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
  })

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItem = () => {
    props.addItem(item);
    setItem({product:'', amount:''});
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField onChange={e => setItem({...item, product: e.target.value})} value={item.product} label='Product' margin="dense" fullWidth/>
          <TextField onChange={e => setItem({...item, amount: e.target.value})} value={item.amount} label='Amount' margin="dense" fullWidth/>
          <TextField type="number" onChange={e => setItem({...item, price: Number(e.target.value)})} value={item.price} label='price' margin="dense" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}