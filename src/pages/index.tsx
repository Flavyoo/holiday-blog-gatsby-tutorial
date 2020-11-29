import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';
import SEO from '../components/SEO';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Awesome Material UI Starter" />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Awesome Material UI Starter
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h3">Time to code...</Typography>
      </Container>
    </div>
  );
}
