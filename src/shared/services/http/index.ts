import axios, { AxiosRequestConfig } from "axios";

const http = axios;

export async function get(url: string, header?: AxiosRequestConfig) {
  return await http.get(url, header);
}
