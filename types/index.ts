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

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};
