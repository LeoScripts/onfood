import Image from "next/image";
import { DishDetails } from "@/components";
import Styles from "./dish.module.css";
import { DishTypes } from "@/types";

export function Dish(props: DishTypes){
  return (
    <div className={Styles.dish}>
      <div className={Styles.wrapper}>
        <Image 
          src={props.picture}
          alt={props.name}
          width={592}
          height={312}
          layout="responsive"
        />
      </div>

      <div>
        <div className={Styles.header}>
          <h2>{props.name}</h2>
        </div>
        <div className={Styles.details}>
          <DishDetails type="reviews" title={props.reviews} subtitle={props.rate} />
          <DishDetails type="category" title={props.categoryName} />
          <DishDetails type="delivery" title={props.deliveryEstimate} />
        </div>
      </div>
    </div>
  )
}