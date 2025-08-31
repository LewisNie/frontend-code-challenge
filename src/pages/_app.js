import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import ImageTextSection from "../components/image_text_section/ImageTextSection";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  "default-page": Page,
  "image-text-section": ImageTextSection
};

storyblokInit({
  accessToken: "7AYvqGn4sJQV8tWRrG4g7Att",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
