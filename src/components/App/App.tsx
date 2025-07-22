import { Button } from "components/UI/Button/Button";
import { Input } from "components/UI/Input/Input";
import { Text } from "components/UI/Text/Text";

export function App() {
  return (
    <>
      <Text
        text="Tekst na stronę"
        variant="h1"
      />
      <Input
        id="label1"
        label="label1"
      />
      <Button text="Utwórz konto" />
    </>
  );
}
