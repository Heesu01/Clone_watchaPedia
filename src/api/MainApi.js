import { Axios } from "./Axios";

export const GetRank = async () => {
  const response = await Axios.get(`/movie/popular?language=ko-KR`);
  return {
    data: response.data,
  };
};

export const GetUpcoming = async () => {
  const response = await Axios.get(`/movie/upcoming?language=ko-KR`);
  return {
    data: response.data,
  };
};
