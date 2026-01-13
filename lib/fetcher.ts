export default function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  return fetch(input, init).then((res) => res.json());
}
