import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import { BentoProvider, Title } from "@buildo/bento-design-system";

function App() {
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Title size="large">Hello, World!</Title>
    </BentoProvider>
  );
}

export default App