import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../todo/Todo";
import { BrowserRouter, MemoryRouter, Link } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";

// testメソッドが終了するたびに呼び出される
afterEach(() => {
  cleanup();
});

test("Register render test", async () => {
  // データを作成及び設定
  // ダミーデータを作成
  const fakeTodo = [
    {
      _id: "0000000000",
      title: "test",
      body: "test test",
      created_on: "2021-10-22T18:51:40.977Z",
      updated_on: "2021-10-22T18:51:40.977Z",
    },
    {
      _id: "11111111111",
      title: "test1",
      body: "test1 test1",
      created_on: "2021-10-22T18:51:40.977Z",
      updated_on: "2021-10-22T18:51:40.977Z",
    },
    {
      _id: "22222222222",
      title: "test2",
      body: "test2 test2",
      created_on: "2021-10-22T18:51:40.977Z",
      updated_on: "2021-10-22T18:51:40.977Z",
    },
  ];
  // JSON化してPromise型にする
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTodo),
    })
  );

  await act(async () => {
    render(
      // Linkタグがページに含まれるときはBrowserRouterをつける
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
  });

  // 　生成されるHTMLのパーツを取得
  const todoTableElement = screen.getByTestId("todo-list-table");
  // 詳細画面用遷移リンク
  const todoLinkElement = screen.getByText(fakeTodo[0].title);
  // 登録画面用遷移リンク
  const todoRegisterElement = screen.getByText(/register/i);

  // HTMLの中に存在するか確認
  expect(todoTableElement).toBeInTheDocument();
  expect(todoLinkElement).toBeInTheDocument();
  expect(todoRegisterElement).toBeInTheDocument();

  // const leftClick = { button: 0 };
  // userEvent.click(todoLinkElement, leftClick);
  // const todoDetailElement = screen.getByTestId('todo-detail-title');
  // expect(todoDetailElement).toBeInTheDocument();

  // 出力されるHTMLを確認するためのメソッド
  // screen.debug();
});

test("Click the register link", async () => {
  const history = createMemoryHistory();

  // mock push function
  history.push = jest.fn();

  render(
    // Linkタグがページに含まれるときはBrowserRouterをつける
    <MemoryRouter>
      <Todo />
    </MemoryRouter>
  );

  const todoRegisterElement = screen.getByTestId("todo-list-register");

  console.log(todoRegisterElement);
  // HTMLの中に生成されたRegisterボタンをクリック
  userEvent.click(todoRegisterElement, { button: 0 });

  // expect(screen.getByTestId("todo-register-title")).toBeInTheDocument();
  expect(history.push).toHaveBeenCalledWith("/todo/new");
});
