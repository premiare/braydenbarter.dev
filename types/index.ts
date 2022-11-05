export type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  tech: TechType[];
};

export type TechType = {
  name: string;
  icon: JSX.Element;
};
