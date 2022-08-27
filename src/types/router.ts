export type TRoute = {
  _pathname: string,
  navigate(pathname: string): void;
  leave(): void;
  match(pathname: string): boolean;
  render(): void;
};
