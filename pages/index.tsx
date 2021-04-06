/* eslint-disable no-console */
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Axios from "axios";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  console.log(process.env, "클라이언트");

  return <TodoList todos={[]} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));
      return { props: {} };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }
);

export default app;
