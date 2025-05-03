import { Axios } from "../assets/axiosInstance";

export const deleteTodoAPI = async (id) => {
  try {
    const response = await Axios.delete("/todo/delete", {
      data: { id },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
