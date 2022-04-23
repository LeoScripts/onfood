export type CityProps = {
  id: number;
  name: string;
  slug: string;
  catalogEtimated: number;
};

export type ParamStaticProps = {
  params: {
    city: string;
  };
};

export type PageDiscoverProps = {
  city:CityProps;
};