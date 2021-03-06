export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestProps {
  method: Method;
  url: string;
  data?: any;
}

const request = (props: RequestProps) => {
  const { method, url, data } = props;

  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
};

export default request;
