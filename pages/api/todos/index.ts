import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { TodoType } from "../../../types/todo";
import Data from "../../../lib/data";

// eslint-disable-next-line consistent-return
export default (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
};
