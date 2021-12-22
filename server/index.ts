import express from "express";
import { join } from "path";
import renderApp from "./renderApp";

const application = express();
const staticFilesPath = join(process.cwd(), "build");

application.use(express.static(staticFilesPath));

application.get("/", (request, response) => {
  renderApp(request.url, (html) => response.send(html));
});

application.listen(8080, () => console.info("Server started on PORT:8080"));
