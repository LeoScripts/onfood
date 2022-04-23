import { Dish, DishSkeleton } from "@/components";
import Styles from "./dish-list.module.css";
import { api } from "@/services";
import { useQuery } from "react-query";
import { DishTypes } from "@/types";
import { DishListProps } from "./type";

export function DishList (props: DishListProps) {
  const fetchDishes = async () =>  {
    const response = await api.get<DishTypes[]>(`/deliveries?city=${props.citySlug}`)
    return response.data;
  }

  const { data, isFetching } = useQuery<DishTypes[]>("dishes", fetchDishes);

  return (

    <div className={Styles.list}>
      {isFetching ? (<DishSkeleton />) 
      : ( data?.map(
          (dish) => <Dish key={dish.id} { ...Dish } />) 
        )
      }
    </div>

    // <div className={Styles.list}>
    //   <Dish />
    //   <Dish />
    //   <Dish />
    // </div>
  )
}