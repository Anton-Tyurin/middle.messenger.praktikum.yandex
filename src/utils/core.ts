export function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  const keys = Object.keys(data);
  return keys.reduce(
    (result: string, key: string, index: number) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?'
  );
}
