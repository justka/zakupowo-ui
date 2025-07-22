import { Text } from "components/UI/Text/Text";
import { Input } from "components/UI/Input/Input";
import { Button } from "components/UI/Button/Button";

export function App() {
  return (
    <>
      <Text variant="h1" text="Tekst na stronę" />
      <Input label="label1" id="label1" />
      <Button text="Utwórz konto" />
    </>
  );
}
