import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { TodoType } from "../../types/todo";

// eslint-disable-next-line consistent-return
export default (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todosBuffer = fs.readFileSync("data/todos.json");
      const todosString = todosBuffer.toString();
      if (!todosString) {
        res.statusCode = 200;
        res.send([]);
      }
      const todos: TodoType[] = JSON.parse(todosString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
};
