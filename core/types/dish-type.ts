export type DishTypes = {
  id: number;
  name: string;
  rate: string;
  reviews: string
  picture: string;
  categoryName: string;
  deliveryEstimate: string;
  city: string;
  tags: [
    {
      name: string;
    }
  ];
};