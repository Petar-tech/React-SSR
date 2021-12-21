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

export default function generateRenderString(
  params: GenerateRenderStringParams
) {
  const context: Context = {};

  const markup = renderToString(
    <App location={params.url} context={context} />
  );

  if (context.url) {
    params.redirectCb(context.url);
  } else {
    params.renderMarkup(markup);
  }
}
