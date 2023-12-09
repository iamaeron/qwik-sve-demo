import { Slot, component$ } from "@builder.io/qwik";
import { StyledButton } from "./button.css";

export default component$(() => {
  return (
    <StyledButton>
      <Slot />
    </StyledButton>
  );
});
