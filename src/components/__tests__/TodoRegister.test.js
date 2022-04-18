import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TodoRegister from '../todo/Register';

afterEach(() => {
  cleanup();
});

test('Register render test', () => {
  render(<TodoRegister />);
  const todoTitleElement = screen.getByTestId('todo-register-title');
  const todoBodyElement = screen.getByTestId('todo-register-body');
  const todoButtonElement = screen.getByTestId('todo-register-button');
  expect(todoTitleElement).toBeInTheDocument();
  expect(todoBodyElement).toBeInTheDocument();
  expect(todoButtonElement).toBeInTheDocument();

  //   // 出力されるHTMLを確認するためのメソッド
  //   screen.debug();
});
