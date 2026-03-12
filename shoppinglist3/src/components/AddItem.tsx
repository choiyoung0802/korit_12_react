import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { Item } from "../App"

type AddItemProps = {
  addItem: (item:Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
    price: 0,
  });

  const addItem = () => {
    props.addItem(item);
    setItem({product:'', amount:'', price:0});
    handleClose();
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <br />
      <Button onClick={handleOpen} variant="outlined" style={{marginTop: '5px'}}>항목 추가</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>새 항목</DialogTitle>
        <DialogContent>
          <TextField value={item.product} label='' margin='dense' fullWidth onChange={e => setItem ({...item, product:e.target.value})} />
          <TextField value={item.amount} label='' margin='dense' fullWidth onChange={e => setItem ({...item, amount:e.target.value})} />
          <TextField type="number" value={item.price} label='' margin='dense' fullWidth onChange={e => setItem ({...item, price:Number(e.target.value)})} />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={addItem}>
            추가
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}