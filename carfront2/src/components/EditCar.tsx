import { useState } from "react"
import { CarResponse, Car, CarEntry } from "../types"
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import CarDialogContent from "./CarDialogContent";
import { updateCar } from "../api/Carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormProps = {
  cardata: CarResponse;
}

export default function EditCar({cardata}: FormProps) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });

  const queryClient = useQueryClient();
  const {mutate} = useMutation(updateCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError: err => console.log(err)
  });

  const handleClickOpen = () => {
    setCar({
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      registrationNumber: cardata.registrationNumber,
      modelYear: cardata.modelYear,
      price: cardata.price
    });
    setOpen(true);
  }

  const handleClickClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    const url = cardata._links.self.href;
    const carEntry: CarEntry = {car, url};
    mutate(carEntry);
    setOpen(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Button size='small' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange}/>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}