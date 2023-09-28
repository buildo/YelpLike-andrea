import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import { BentoProvider, Stack, Placeholder} from "@buildo/bento-design-system";

function App() {
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Stack space={32} align="center">
        <Placeholder width={200} />
  <Placeholder width={200} />
  <Placeholder width={200} />
</Stack>
    </BentoProvider>
  );
}

export default App