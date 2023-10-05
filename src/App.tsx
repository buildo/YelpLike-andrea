import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import "./i18n";
import {
  AreaLoader,
  BentoProvider,
  Headline,
  Inset,
  Toast,
} from "@buildo/bento-design-system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import { useQuery } from "@tanstack/react-query";
import { fromJsonToProp } from "./utils";
import { getRestaurantList } from "./apis/api";

function App() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["retrieve-list"],
    queryFn: async () => {
      const prom: JSON = await getRestaurantList(10);
      return fromJsonToProp(prom);
    },
  });

  if (isLoading) {
    return <AreaLoader message="Loading..."></AreaLoader>;
  }

  if (isError) {
    return <Toast message="Something went wrong" kind="negative"></Toast>;
  }

  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <BrowserRouter>
        <Inset space={16}>
          <Headline size="large" align="center">
            {t("title")}
          </Headline>
        </Inset>
        <Routes>
          <Route path="/" element={<Home businesses={data?.businesses} />} />
          {/* <Route path="/" element={<Restaurant />} /> */}
        </Routes>
      </BrowserRouter>
    </BentoProvider>
  );
}

export default App;
