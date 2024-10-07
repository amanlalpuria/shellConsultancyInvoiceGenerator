import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import InputGroup from 'react-bootstrap/InputGroup';
import InvoiceModal from '../invoiceModal/InvoiceModal';

// Define types for state and props
interface InvoiceItemType {
  id: string;  // Ensure 'id' is always a string
  name: string;
  description: string;
  price: number;
  dateOfJoining: string;
}

interface InvoiceFormState {
  isOpen: boolean;
  currency: string;
  currentDate: string;
  invoiceNumber: number;
  dateOfIssue: string;
  billTo: string;
  billToEmail: string;
  billToContact: string;
  billToAddress: string;
  billToGST: string;
  billFrom: string;
  billToState: string;
  billFromEmail: string;
  billFromAddress: string;
  notes: string;
  total: number;
  subTotal: number;
  cgst: number;
  sgst: number;
  igst: number;
  cgsttaxAmount: number;
  sgsttaxAmount: number;
  igsttaxAmount: number;
  discountRate: number;
  discountAmount: number;
  items: InvoiceItemType[];
}

class InvoiceForm extends React.Component<{}, InvoiceFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      currency: '₹',
      currentDate: '',
      invoiceNumber: 1,
      dateOfIssue: '',
      billTo: '',
      billToEmail: '',
      billToContact: '',
      billToAddress: '',
      billToGST: '',
      billFrom: '',
      billToState: '',
      billFromEmail: '',
      billFromAddress: '',
      notes: '',
      total: 0.00,
      subTotal: 0.00,
      cgst: 0.00,
      sgst: 0.00,
      igst: 0.00,
      cgsttaxAmount: 0.00,
      sgsttaxAmount: 0.00,
      igsttaxAmount: 0.00,
      discountRate: 0.00,
      discountAmount: 0.00,
      items: [
        {
          id: "0",
          name: '',
          description: '',
          price: 0.00,
          dateOfJoining: '',
        },
      ],
    };

    this.editField = this.editField.bind(this);
  }

  componentDidMount() {
    this.handleCalculateTotal();
  }

  handleRowDel = (item: InvoiceItemType) => {
    const updatedItems = this.state.items.filter((i) => i.id !== item.id);
    this.setState({ items: updatedItems }, () => this.handleCalculateTotal());
  };

  handleAddEvent = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);  // This creates a string id
    const newItem: InvoiceItemType = {
      id,
      name: '',
      description: '',
      price: 0.00,
      dateOfJoining: '',
    };

    this.setState(
      (prevState) => ({
        items: [...prevState.items, newItem],
      }),
      () => this.handleCalculateTotal()
    );
  };

  handleCalculateTotal = () => {
    const { items, cgst, sgst, igst, discountRate } = this.state;
    let subTotal = 0;

    // Calculate subtotal
    items.forEach((item) => {
      // Ensure item.price is treated as a number
      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0;
      subTotal += price; // Add the price to the subtotal
    });

    // Ensure cgst, sgst, igst and discountRate are treated as numbers
    const cgstDecimal = typeof cgst === 'number' ? cgst : parseFloat(cgst) || 0;
    const sgstDecimal = typeof sgst === 'number' ? sgst : parseFloat(sgst) || 0;
    const igstDecimal = typeof igst === 'number' ? igst : parseFloat(igst) || 0;
    const discountRateDecimal = typeof discountRate === 'number' ? discountRate : parseFloat(discountRate) || 0;

    // Calculate tax and discount amounts as decimal values
    const cgsttaxAmount = parseFloat(((subTotal * cgstDecimal) / 100).toFixed(2));
    const sgsttaxAmount = parseFloat(((subTotal * sgstDecimal) / 100).toFixed(2));
    const igsttaxAmount = parseFloat(((subTotal * igstDecimal) / 100).toFixed(2));
    const discountAmount = parseFloat(((subTotal * discountRateDecimal) / 100).toFixed(2));

    // Calculate the total by subtracting discount and adding taxes
    const total = parseFloat((subTotal - discountAmount + cgsttaxAmount + sgsttaxAmount + igsttaxAmount).toFixed(2));
    console.log(`handleCalculateTotal updated values are :: subTotal : ${subTotal}, cgsttaxAmount : ${cgsttaxAmount}, sgsttaxAmount : ${sgsttaxAmount}, igsttaxAmount : ${igsttaxAmount},discountAmount : ${discountAmount}, total : ${total}`);
    // Update state with properly formatted numeric values
    this.setState({
      subTotal: parseFloat(subTotal.toFixed(2)),   // Ensure it remains a number
      cgsttaxAmount,
      sgsttaxAmount,
      igsttaxAmount,
      discountAmount,
      total,
    });
  };



  onItemizedItemEdit = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = evt.target;

    const updatedItems = this.state.items.map((item) => {
      if (item.id.toString() === id) {
        return { ...item, [name]: value };
      }
      return item;
    });

    this.setState({ items: updatedItems }, () => this.handleCalculateTotal());
  };

  editField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
  
    // Convert values for SGST, CGST, IGST and Discount Rate into numbers if applicable
    const numericFields = ['sgst', 'cgst', 'igst', 'discountRate'];
  
    this.setState(
      (prevState) => ({
        [name]: numericFields.includes(name) ? parseFloat(value) || 0 : value
      } as unknown as InvoiceFormState),
      () => this.handleCalculateTotal() // Ensure total is recalculated after state update
    );
  };
  

  onCurrencyChange = (selectedOption: { currency: string }) => {
    this.setState(selectedOption);
  };

  openModal = (event: React.FormEvent) => {
    event.preventDefault();
    this.handleCalculateTotal();
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      (<Form onSubmit={this.openModal}>
        <Row>
          <Col md={8} lg={9}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
              <div className="d-flex flex-row align-items-start justify-content-between mb-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column">
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <span className="fw-bold d-block me-2">Date&nbsp;of&nbsp;Issue:</span>
                    <Form.Control type="date" value={this.state.dateOfIssue} name={"dateOfIssue"} onChange={(event) => this.editField(event)} style={{
                      maxWidth: '150px'
                    }} required />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold me-2">Invoice&nbsp;Number:&nbsp;</span>

                  <Form.Control type="number" value={this.state.invoiceNumber} name={"invoiceNumber"} onChange={(event) => this.editField(event)} min="1" style={{
                    maxWidth: '70px'
                  }} required />
                </div>
              </div>
              <hr className="my-4" />
              <Row className="mb-5">
                <Col>
                  <Form.Label className="fw-bold">Bill to:</Form.Label>
                  <Form.Control as="textarea" placeholder={"Who is this invoice to"} rows={3} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required />
                  <Form.Control placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required />
                  <Form.Control placeholder={"State"} value={this.state.billToState} type="text" name="billToState" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required />
                  <Form.Control placeholder={"Email address"} value={this.state.billToEmail} type="email" name="billToEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required />
                  <Form.Control placeholder={"Contact"} value={this.state.billToContact} type="text" name="billToContact" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required />
                  <Form.Control placeholder={"GST No:"} value={this.state.billToGST} type="text" name="billToGST" className="my-2" autoComplete="gst" onChange={(event) => this.editField(event)} required />
                </Col>
                {/*<Col>
                  <Form.Label className="fw-bold">Bill from:</Form.Label>
                  <Form.Control placeholder={"Who is this invoice from?"} rows={3} value={this.state.billFrom} type="text" name="billFrom" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required/>
                  <Form.Control placeholder={"Email address"} value={this.state.billFromEmail} type="email" name="billFromEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required/>
                  <Form.Control placeholder={"Billing address"} value={this.state.billFromAddress} type="text" name="billFromAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required/>
                </Col>*/}
              </Row>
              <InvoiceItem onItemizedItemEdit={this.onItemizedItemEdit.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} currency={this.state.currency} items={this.state.items} />
              <Row className="mt-4 justify-content-end">
                <Col lg={6}>
                  <div className="d-flex flex-row align-items-start justify-content-between">
                    <span className="fw-bold">Subtotal:
                    </span>
                    <span>{this.state.currency}
                      {this.state.subTotal}</span>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                    <span className="fw-bold">Discount:</span>
                    <span>
                      <span className="small ">({this.state.discountRate || 0}%)</span>
                      {this.state.currency}
                      {this.state.discountAmount || 0}</span>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                    <span className="fw-bold">S.G.S.T:
                    </span>
                    <span>
                      <span className="small ">({this.state.sgst || 0}%)</span>
                      {this.state.currency}
                      {this.state.sgsttaxAmount || 0}</span>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                    <span className="fw-bold">C.G.S.T:
                    </span>
                    <span>
                      <span className="small ">({this.state.cgst || 0}%)</span>
                      {this.state.currency}
                      {this.state.cgsttaxAmount || 0}</span>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                    <span className="fw-bold">I.G.S.T:
                    </span>
                    <span>
                      <span className="small ">({this.state.igst || 0}%)</span>
                      {this.state.currency}
                      {this.state.igsttaxAmount || 0}</span>
                  </div>
                  <hr />
                  <div className="d-flex flex-row align-items-start justify-content-between" style={{
                    fontSize: '1.125rem'
                  }}>
                    <span className="fw-bold">Total:
                    </span>
                    <span className="fw-bold">{this.state.currency}
                      {this.state.total || 0}</span>
                  </div>
                </Col>
              </Row>
              <hr className="my-4" />
              <Form.Label className="fw-bold">Notes:</Form.Label>
              <Form.Control placeholder="Thanks for your business!" name="notes" value={this.state.notes} onChange={(event) => this.editField(event)} as="textarea" className="my-2" rows={1} />
            </Card>
          </Col>
          <Col md={4} lg={3}>
            <div className="sticky-top pt-md-3 pt-xl-4">
              <Button variant="primary" type="submit" className="d-block w-100">Review Invoice</Button>
              <InvoiceModal showModal={this.state.isOpen} closeModal={this.closeModal} info={this.state} items={this.state.items} currency={this.state.currency} subTotal={this.state.subTotal} cgsttaxAmount={this.state.cgsttaxAmount} sgsttaxAmount={this.state.sgsttaxAmount} igsttaxAmount={this.state.igsttaxAmount} discountAmmount={this.state.discountAmount} total={this.state.total} />
              {/*<Form.Group className="mb-3">
                <Form.Label className="fw-bold">Currency:</Form.Label>
                <Form.Select onChange={event => this.onCurrencyChange({currency: event.target.value})} className="btn btn-light my-1" aria-label="Change Currency">
                  <option value="$">USD (United States Dollar)</option>
                  <option value="£">GBP (British Pound Sterling)</option>
                  <option value="¥">JPY (Japanese Yen)</option>
                  <option value="$">CAD (Canadian Dollar)</option>
                  <option value="$">AUD (Australian Dollar)</option>
                  <option value="$">SGD (Signapore Dollar)</option>
                  <option value="¥">CNY (Chinese Renminbi)</option>
                  <option value="₿">BTC (Bitcoin)</option>
                </Form.Select>
              </Form.Group>*/}
              <Form.Group className="my-3">
                <Form.Label className="fw-bold">S.G.S.T:</Form.Label>
                <InputGroup className="my-1 flex-nowrap">
                  <Form.Control name="sgst" type="number" value={this.state.sgst} onChange={(event) => this.editField(event)} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00" />
                  <InputGroup.Text className="bg-light fw-bold text-secondary small">
                    %
                  </InputGroup.Text>
                </InputGroup>
                <Form.Label className="fw-bold">C.G.S.T:</Form.Label>
                <InputGroup className="my-1 flex-nowrap">
                  <Form.Control name="cgst" type="number" value={this.state.cgst} onChange={(event) => this.editField(event)} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00" />
                  <InputGroup.Text className="bg-light fw-bold text-secondary small">
                    %
                  </InputGroup.Text>
                </InputGroup>
                <Form.Label className="fw-bold">I.G.S.T:</Form.Label>
                <InputGroup className="my-1 flex-nowrap">
                  <Form.Control name="igst" type="number" value={this.state.igst} onChange={(event) => this.editField(event)} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00" />
                  <InputGroup.Text className="bg-light fw-bold text-secondary small">
                    %
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label className="fw-bold">Discount rate:</Form.Label>
                <InputGroup className="my-1 flex-nowrap">
                  <Form.Control name="discountRate" type="number" value={this.state.discountRate} onChange={(event) => this.editField(event)} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00" />
                  <InputGroup.Text className="bg-light fw-bold text-secondary small">
                    %
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Form>)
    );
  }
}

export default InvoiceForm;
