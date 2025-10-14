import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdataQuantity({ id }: { id: number }) {
  const dispatch = useDispatch();

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
        sx={{ mx: "1rem" }}
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        <AddIcon fontSize="small" />
      </Button>
      <Typography fontSize="1.7rem">1</Typography>
      <Button
        variant="contained"
        sx={{ mx: "1rem" }}
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        <RemoveIcon fontSize="small" />
      </Button>
    </Box>
  );
}

export default UpdataQuantity;
