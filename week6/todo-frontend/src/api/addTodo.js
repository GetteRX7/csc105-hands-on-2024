import { Axios } from "../assets/axiosInstance";

export const addTodoAPI = async (name) => {
  try {
    const response = await Axios.post("/todo/add", { name });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
      