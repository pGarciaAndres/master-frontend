import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Formik, Form } from 'formik';
import { InputAdornment } from '@mui/material';
import { TextFieldComponent } from 'common/components';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="status"
            label="Status"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="species"
            label="Species"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />

          <TextFieldComponent
            name="bestSentences"
            label="BestSentences"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
