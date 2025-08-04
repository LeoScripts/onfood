import { Dish, DishSkeleton } from "@/components";
import Styles from "./dish-list.module.css";
import { api } from "@/services";
import { useQuery } from "react-query";
import { DishTypes } from "@/types";
import { DishListProps } from "./type";

export function DishList(props: DishListProps) {
  const fetchDishes = async (): Promise<DishTypes[]> => {
    // API real (comentada)
    // const response = await api.get<DishTypes[]>(`/deliveries?city=${props.citySlug}`)
    // return response.data;

    // Mock temporário
    // Simula delay de API
    // await new Promise((resolve) => setTimeout(resolve, 300));

    // Filtra os pratos pela cidade do mock
    const dishes = api.dishes.filter(
      (dish) => dish.citySlug === props.citySlug,
    );

    return dishes;
  };

  const { data, isFetching } = useQuery<DishTypes[]>(
    ["dishes", props.citySlug],
    fetchDishes,
  );

  return (
    <div className={Styles.list}>
      {isFetching ? (
        <DishSkeleton />
      ) : (
        data?.map((dish) => <Dish key={dish.id} {...dish} />)
      )}
    </div>
  );
}
