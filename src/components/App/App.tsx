import { Button } from "components/UI/Button/Button";
import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { Input } from "components/UI/Input/Input";
import { Text } from "components/UI/Text/Text";

export function App() {
  return (
    <>
      <Text variant="h1">
        <>test na stronę</>
      </Text>
      <Input label="label1" id="label1" />
      <Button text="Utwórz konto" />
    </>
  );
}
