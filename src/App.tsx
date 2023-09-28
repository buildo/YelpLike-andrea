import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import {
  BentoProvider,
  Headline,
  Box,
  ContentWithSidebar,
  Body,
} from "@buildo/bento-design-system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './i18n';
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";



function App() {
  const { t } = useTranslation();
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <BrowserRouter>
        <Headline size="large" align="center">
          {t("title")}
        </Headline>
        <Box>
          <ContentWithSidebar
            sidebarPosition="left"
            sidebarWidth="1/5"
            sidebarBackground="backgroundOverlay"
          >
            <Box
              height="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Body size="large">filters</Body>
            </Box>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<Restaurant />} /> */}
            </Routes>
          </ContentWithSidebar>
        </Box>
      </BrowserRouter>
    </BentoProvider>
  );
}

export default App;
