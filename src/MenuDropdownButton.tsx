import React, { useRef, useState } from "react";
import { Button, Icon, Dropdown, DropdownItem } from "bold-ui";

export function MenuDropdownButton() {
  const buttonRef = useRef<HTMLButtonElement>();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        innerRef={buttonRef as any}
        title="Menu"
        type="button"
        size="small"
        kind="normal"
        onClick={() => setOpen(true)}
      >
        <Icon icon="hamburguerMenu" aria-label="Menu" />
      </Button>

      <Dropdown
        anchorRef={buttonRef as any}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DropdownItem component="a" href="#acessibilidade">
          Acessibilidade
        </DropdownItem>
        <DropdownItem component="a" href="#tipos">
          Tipos de deficiência
        </DropdownItem>
        <DropdownItem component="a" href="#checklist">
          Checklist de requisitos
        </DropdownItem>
        <DropdownItem component="a" href="#dados">
          Dados sobre acessibilidade
        </DropdownItem>
        <DropdownItem component="a" href="#recursos">
          Recursos
        </DropdownItem>
        <DropdownItem component="a" href="#newsletter">
          Newsletter
        </DropdownItem>
      </Dropdown>
    </>
  );
}
