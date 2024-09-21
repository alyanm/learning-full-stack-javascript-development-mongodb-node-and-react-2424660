import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
  const response = await axios.get(`${API_SERVER_URL}/contests`);
  console.log(response.data);
  return response.data;
};

export const fetchContest = async (contestId) => {
  const response = await axios.get(
    `${API_SERVER_URL}/contest/${contestId}`,
  );
  console.log(response.data);
  return response.data.contest;
};
