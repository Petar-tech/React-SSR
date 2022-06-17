import { renderToStaticMarkup } from "react-dom/server";

import { readFile } from "fs";
import { join } from "path";

import App from "../src/App";

export default function (url: string, cb: (html: string) => void) {
  const htmlDocPath = join(process.cwd(), "build", "index.html");

  readFile(htmlDocPath, (error, buffer) => {
    if (error) return console.error(error);

    const markup = renderToStaticMarkup(<App location={url} />);

    const doc = buffer.toString();

    const hydratedDoc = doc.replace("{{App}}", markup);
    cb(hydratedDoc);
  });
}
