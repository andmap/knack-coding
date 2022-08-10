import { cleanUp } from "../helper";

test("simple test", () => {
  expect(
    JSON.stringify(
      cleanUp({
        versions: [
          {
            objects: [
              {
                fields: [
                  {
                    _id: "61e869d51137bc002545fede_duplicate",
                    key: "field_1",
                  },
                  {
                    _id: "61e869d51137bc002545fede",
                    key: "field_1",
                  },
                ],
              },
            ],
            scenes: [
              {
                views: [
                  {
                    _id: "61e869d51137bc002545fede",
                    key: "field_1",
                  },
                ],
              },
            ],
          },
        ],
      })
    )
  ).not.toMatch(/61e869d51137bc002545fede_duplicate/);
});
