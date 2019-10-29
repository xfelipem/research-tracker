import React from 'react';
import Container from '@material-ui/core/Container';
import TextInputWithButton from './TextInputWithButton';
import { Grid, Typography, ListItem, ListItemText, ListItemSecondaryAction, IconButton, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {},
  title: {
    margin: 2,
  },
}));

function generate(element: JSX.Element | React.FunctionComponentElement<{ key: number; }>) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function App() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <TextInputWithButton />
      <Grid item xs={12} md={6}>
        <Typography className={classes.title}>
          Urls to the sources of the data we want to scrap:
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>,
            )}
          </List>
        </div>
      </Grid>
    </Container>
  );
}
