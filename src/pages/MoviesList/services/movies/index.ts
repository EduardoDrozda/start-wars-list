import { config } from "../../../../config";
import { get } from "../../../../shared/services";

const { apiUrl } = config;

export async function getMovies() {
  const url = `${apiUrl}/films`;
  const response = await get(url);
  return response.data;
}
