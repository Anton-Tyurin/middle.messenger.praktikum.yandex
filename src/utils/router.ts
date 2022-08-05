export const checkIfEqual = (lhs: string, rhs: string) => lhs === rhs;

export const render = (block: any) => {
  const root: HTMLElement | null = document.getElementById('root');
  if (root) {
    root.innerHTML = block.transformToString();
  }
};
