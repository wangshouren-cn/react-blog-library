import path from "path";

function append(options) {
  const { target, content, where, showResult } = options;
  let first = true;
  return {
    name: "rollup-plugin-append-content",
    transform(code, id) {
      if (target.test(id)) {
        const sourceCode = code;

        if (where === "first-line") {
          code = `
          ${content}
          ${code}
          `;
        } else if (where === "end-line") {
          code = `
          ${code}
          ${content}
          `;
        } else {
          throw new Error(
            "options.where is not justified ! Use `first-line` or `end-line`."
          );
        }

        if (showResult && first) {
          first = false;

          const from = `from:\n${sourceCode
            .split("\n")
            .slice(0, showResult)
            .join("\n")} `;

          const to = `to:\n${code
            .split("\n")
            .slice(0, showResult)
            .join("\n")} `;
          console.log("*************rollup-plugin-append-content***********");
          console.log(from);
          console.log(to);
          console.log("*************rollup-plugin-append-content***********");
        }
      }

      return code;
    },
  };
}
export default append;
