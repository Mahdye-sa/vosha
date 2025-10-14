import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { formatPrice } from "../../utils/helper";
import UpdataQuantity from "../cart/UpdataQuantity";

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
  return (
    <Card
      sx={{
        maxWidth: "100%",
        flexShrink: 0,
        textAlign: "center",
        borderRadius: 4,
        pb: "2rem",
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={productItem.img}
        alt={productItem.title}
      />
      <CardContent>
        <Typography variant="h5" mb={2} fontWeight="bold">
          {productItem.title}
        </Typography>

        <Typography variant="body1">{productItem.description}</Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>
          {formatPrice(productItem.price)}
        </Typography>
      </CardContent>

      <UpdataQuantity id={productItem.id} />
    </Card>
  );
}

export default ProducItem;
