export type TRoute = {
  navigate(pathname: string): void;
  leave(): void;
  match(pathname: string): boolean;
  render(): void;
};
