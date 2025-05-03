import { Axios } from "../assets/axiosInstance";

export const editTodoNameAPI = async (id, name) => {
  try {
    const response = await Axios.patch("/todo/edit", { id, name });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const toggleTodoSuccessAPI = async (id) => {
  try {
    const response = await Axios.patch("/todo/success", { id });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
