import React from "react";
import { FormRenderProps } from "react-final-form";

import {
  Button,
  Cell,
  CheckboxField,
  FieldWrapper,
  Form,
  Grid,
  HFlow,
  RadioField,
  TextField,
  Tooltip,
  Icon
} from "bridge-react";

function FormDemo() {
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
            <FieldWrapper label="Frequência dos e-mails">
              <HFlow>
                <RadioField name="frequencia" value="Semanal" label="Semanal" />
                <RadioField
                  name="frequencia"
                  value="Quinzenal"
                  label="Quinzenal"
                />
                <RadioField name="frequencia" value="Mensal" label="Mensal" />
              </HFlow>
            </FieldWrapper>
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

  return (
    <Form render={renderForm} onSubmit={console.log} validate={validate} />
  );
}

const validate = (values: any) => {
  const errors: any = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  return errors;
};

export default FormDemo;
