const baseUrl = "/api";

type ClientOptions = {
  data: any;
  method?: string;
  headers?: Record<string, any>;
};

export const client = (
  url: string,
  { data, headers, method }: ClientOptions
) => {
  return fetch(baseUrl + url, {
    method: method ? method : data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...headers,
    },
  });
};

export const useClient = () => {
  return client;
};
