import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

// eslint-disable-next-line react/prop-types
export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();

  return (
    
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
  )
}
