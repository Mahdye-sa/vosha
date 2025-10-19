import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";
import type { UpdateQuantityProps } from "../../interfaces/product";

function UpdataQuantity({ productId }: UpdateQuantityProps) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{ mx: "1rem", borderRadius: 3 }}
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        <AddIcon fontSize="small" />
      </Button>
      <Typography fontSize="1.7rem">{currentQuantity}</Typography>
      <Button
        variant="contained"
        sx={{ mx: "1rem", borderRadius: 3 }}
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        <RemoveIcon fontSize="small" />
      </Button>
    </Box>
  );
}

export default UpdataQuantity;
