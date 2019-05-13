import React from "react";
import { FormRenderProps } from "react-final-form";

import {
  Button,
  Cell,
  CheckboxField,
  FormControl,
  Form,
  Grid,
  HFlow,
  RadioField,
  TextField,
  Tooltip,
  Icon
} from "bold-ui";

function NewsletterForm() {
  const renderForm = (formProps: FormRenderProps) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <Grid wrap>
          <Cell xs={12} lg={12}>
            <TextField label="Nome completo" name="firstName" required />
          </Cell>
          <Cell xs={12} lg={12}>
            <TextField
              name="email"
              label="E-mail"
              type="email"
              icon="emailOutline"
              required
            />
          </Cell>
          <Cell xs={12} lg={12}>
            <TextField label="Profissão" name="occupation" />
          </Cell>
          <Cell xs={6}>
            <FormControl label="Frequência dos e-mails">
              <HFlow>
                <RadioField name="frequencia" value="Semanal" label="Semanal" />
                <RadioField
                  name="frequencia"
                  value="Quinzenal"
                  label="Quinzenal"
                />
                <RadioField name="frequencia" value="Mensal" label="Mensal" />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            <CheckboxField
              name="writer"
              label="Quero escrever artigos para o site"
            />
            <Tooltip text="Marque a opção caso deseje contribuir para o site. Enviaremos um e-mail com mais informações.">
              <Icon
                size={1}
                icon="infoCircleFilled"
                fill={"secondary"}
                style={{ marginLeft: "0.5rem" }}
                tabIndex={0}
              />
            </Tooltip>
          </Cell>
          <Cell xs={12} lg={12}>
            <Button
              type="submit"
              kind="primary"
              block
              onClick={formProps.handleSubmit}
            >
              Inscrever
            </Button>
          </Cell>
        </Grid>
      </form>
    );
  };

  return <Form render={renderForm} validate={validate} onSubmit={onSubmit} />;
}

const onSubmit = () => {
  return alert("Inscrição confirmada");
};

const validate = (values: any) => {
  const errors: any = {};

  if (!values.firstName) {
    errors.firstName = "Nome completo é obrigatório";
  }

  if (!values.email) {
    errors.email = "E-mail é obrigatório";
  } else if (!values.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
    errors.email = "Este endereço de e-mail não é válido";
  }

  return errors;
};

export default NewsletterForm;
