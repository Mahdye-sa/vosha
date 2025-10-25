import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import type { DeleteItemProps } from "../../interfaces/cart";

function DeleteItem({ productId }: DeleteItemProps) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(productId))}>
      <DeleteIcon fontSize="large" />
    </Button>
  );
}

export default DeleteItem;
