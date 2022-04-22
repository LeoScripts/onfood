export type DishTypes = {
  id: number;
  name: string;
  rate: string;
  reviews: string
  picture: string;
  category: string;
  deliveryEstimate: string;
  city: string;
  tags: [
    {
      name: string;
    }
  ];
};