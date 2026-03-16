import { Car } from '../types'
import { DialogContent, TextField } from '@mui/material'

type DialogFormProps = {
  car: Car;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent({car, handleChange}: DialogFormProps) {

  return (
    <>
      <DialogContent>
          <TextField type="text" placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/> <br />
          <TextField type="text" placeholder="Model" name="model" value={car.model} onChange={handleChange}/> <br />
          <TextField type="text" placeholder="Color" name="color" value={car.color} onChange={handleChange}/> <br />
          <TextField type="text" placeholder="RegistrationNumber" name="registrationNumber" value={car.registrationNumber} onChange={handleChange}/> <br />
          <TextField type="number" placeholder="ModelYear" name="modelYear" value={car.modelYear} onChange={handleChange}/> <br />
          <TextField type="number" placeholder="Price" name="price" value={car.price} onChange={handleChange}/> <br />
        </DialogContent>
    </>
  )
}