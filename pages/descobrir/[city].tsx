import { useRouter } from "next/router";
import { PageTemplate, DishList } from "@/components";
import Styles from "../../styles/discovery.module.css";
import {
  api,
  CityProps,
  PageDiscoverProps,
  ParamStaticProps,
} from "@/services";

export default function Descobrir(props: PageDiscoverProps) {
  const { city } = props;
  return (
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Descobrir na região de {city.name}</h1>
        <p>Encontramos {city.catalogEtimated} opções</p>
        <div className={Styles.items}>
          <DishList citySlug={city.slug} />
        </div>
      </div>
    </PageTemplate>
  );
}

export async function getStaticPaths() {
  // API real (comentada)
  // const response = await api.get("/cities");
  // const cities = response.data;

  // Mock temporário
  const cities = api.cities;

  const urls = cities.map((city: any) => ({
    params: {
      city: city.slug,
    },
  }));

  return {
    paths: urls,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ParamStaticProps) {
  const citySlug = params?.city as string;

  // API real (comentada)
  // const response = await api.get(`/cities?citySlug=${citySlug}`);
  // const city = response.data;

  // Mock temporário
  const city = api.cities.find((city) => city.slug === citySlug);

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city,
    },
    revalidate: 30, // segundos
  };
}
