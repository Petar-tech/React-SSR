import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import App from "../src/App";

interface Context {
  url?: string;
}

interface GenerateRenderStringParams {
  url: string;
  redirectCb: (url: string) => void;
  renderMarkup: (markup: string) => void;
}

export default function generateRenderString({
  url,
  redirectCb,
  renderMarkup,
}: GenerateRenderStringParams) {
  const context: Context = {};

  const markup = renderToString(<App location={url} context={context} />);

  if (context.url) {
    redirectCb(context.url);
  } else {
    renderMarkup(markup);
  }
}
