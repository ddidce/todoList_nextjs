import axios from ".";
import { TodoType } from "../../types/todo";

//* 투두 리스트 불러오기 API
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");

//* 투두 체크하기 API
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);

// 투두 추가하기 api body
interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

// 투두 추가하기 api
export const addTodoAPI = (body: AddTodoAPIBody) =>
  axios.post("/api/todos", body);

//*투두 삭제하기 API
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);
