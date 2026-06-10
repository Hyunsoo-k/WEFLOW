export type PortfolioItem = {
  name: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  project: string;
  focuse: string;
  scope: string;
  output: string[];
  about: { start: string, solve: string};
  process: { step: string, name: string; desc: string }[];
};