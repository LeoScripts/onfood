import { useRouter } from "next/router";
import { PageTemplate, DishList } from "@/components";
import Styles from "../../styles/discovery.module.css"

export default function Descobrir() {
  const router = useRouter();
  const city = router.query.city;

  return (
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Descobrir na região de {city}</h1>
        <p>Encontramos x opões</p>
        <div className={Styles.items}>
          <DishList />

        </div>
      </div>
    </PageTemplate>
  );
}