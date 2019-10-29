import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import SourceCrud from './components/SourceCrud';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <SourceCrud />
      </Container>
    </React.Fragment>
  );
}
