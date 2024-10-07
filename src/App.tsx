import React from 'react';
import './App.css';
import GetClientsData from './components/dao/GetClientsData';
import InvoiceForm from './components/invoiceForm/InvoiceForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <InvoiceForm />
        </Container>
      </div>
      <GetClientsData />
    </>
  );
}

export default App;
