import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import "./i18n";
import { BentoProvider, Headline, Inset } from "@buildo/bento-design-system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import React from "react";

function App() {
  const { t } = useTranslation();
  const [restId, setRestId] = React.useState("0");

  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <BrowserRouter>
        <Inset space={16}>
          <Headline size="large" align="center">
            {t("title")}
          </Headline>
        </Inset>
        <Routes>
          <Route path="/home" element={<Home setId={setRestId} />} />
          <Route
            path="/restaurat-detail"
            element={<RestaurantDetail id={restId} />}
          />
        </Routes>
      </BrowserRouter>
    </BentoProvider>
  );
}

export default App;
