import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
}

interface ProductItemProps {
  productItem: ProductProps;
}

function ProducItem({ productItem }: ProductItemProps) {
  console.log(productItem.img);
  return (
    <Card
      sx={{
        mx: "auto",
        maxWidth: "100%",
        flexShrink: 0,
        textAlign: "center",
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={productItem.img}
        alt={productItem.title}
      />
      <CardContent>
        <Typography variant="h6" mb={1}>
          {productItem.title}
        </Typography>
        <Typography variant="body2">{productItem.description}</Typography>
        <Typography variant="subtitle1" fontWeight="bold" mt={1}>
          {productItem.price.toLocaleString()} تومان
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button variant="outlined" size="small" sx={{ fontSize: 20 }}>
          +
        </Button>
        <Typography variant="h6" px={1}>
          5
        </Typography>
        <Button variant="outlined" size="small" sx={{ fontSize: 20 }}>
          -
        </Button>
      </Box>
    </Card>
  );
}

export default ProducItem;
