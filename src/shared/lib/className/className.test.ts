import { classNames } from "./className";

describe("sum module", () => {
  test("Функция classNames со всеми заполненными полями", () => {
    expect(classNames("test1", { test2: true }, ["test3"])).toBe(
      "test1 test2 test3"
    );
  });
  test("Функция classNames со всеми пустыми", () => {
    expect(classNames("", { test2: false }, [])).toBe("");
  });
  test("Функция classNames со средними показателями", () => {
    expect(classNames("", { test1: true, test2: false }, ["test3"])).toBe(
      "test1 test3"
    );
  });
});
