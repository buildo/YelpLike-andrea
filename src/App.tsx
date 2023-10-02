import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import { BentoProvider, Headline, Inset } from "@buildo/bento-design-system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";

function App() {
  const { t } = useTranslation();
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <BrowserRouter>
        <Inset space={16}>
          <Headline size="large" align="center">
            {t("title")}
          </Headline>
        </Inset>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Restaurant />} /> */}
        </Routes>
      </BrowserRouter>
    </BentoProvider>
  );
}

export default App;
