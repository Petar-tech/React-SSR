import express from "express";
import renderApp from "./renderApp";

const application = express();

application.all("*", (request, response) => {
  renderApp({
    url: request.url,
    redirectCb: (url) => response.redirect(url),
    renderMarkup: (markup) => response.send(markup),
  });
});

application.listen(8080, () => console.info("Server started on PORT:8080"));
