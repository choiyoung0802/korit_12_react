import { useState } from 'react'
import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material'
import './App.css'
import AddItem from './components/AddItem';

export type Item = {
  product: string;
  amount: string;
  price: number;
}

function App() {
  const [items, setItesm] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItesm([item, ...items]);
  }

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              장바구니
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item, index) =>
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.product}
                  secondary={`수량 : ${item.amount} | 가격 : ${item.price}`}
                />
              </ListItem>
            )
          }
        </List>
      </Container>
    </>
  )
}

export default App
