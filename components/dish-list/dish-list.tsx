import { Dish } from "@/components";
import Styles from "./dish-list.module.css";

export function DishList () {
  return (
    <div className={Styles.list}>
      <Dish />
      <Dish />
      <Dish />
    </div>
  )
}