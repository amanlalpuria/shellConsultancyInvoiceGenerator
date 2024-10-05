import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from "../../assets/logo.png";

// Types for the props
interface InvoiceModalProps {
  showModal: boolean;
  closeModal: () => void;
  info: {
    invoiceNumber?: number;
    dateOfIssue?: string;
    billTo?: string;
    billToAddress?: string;
    billToState?: string;
    billToEmail?: string;
    billToContact?: string;
    billToGST?: string;
    notes?: string;
  };
  currency: string;
  total: number;
  subTotal: number;
  sgsttaxAmount: number;
  cgsttaxAmount: number;
  igsttaxAmount: number;
  discountAmmount: number;
  items: Array<{
    dateOfJoining: string;
    name: string;
    description: string;
    price: number;
  }>;
}

// Function to generate the invoice
const GenerateInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture") as HTMLElement).then((canvas: HTMLCanvasElement) => {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice-001.pdf');
  });
};

class InvoiceModal extends React.Component<InvoiceModalProps> {
  constructor(props: InvoiceModalProps) {
    super(props);
  }

  render() {
    const {
      showModal,
      closeModal,
      info,
      items,
      currency,
      total,
      subTotal,
      sgsttaxAmount,
      cgsttaxAmount,
      discountAmmount,
    } = this.props;

    return (
      <div>
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <div id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <img src={logo} alt="Shell Consultancy" width={150} height={100} />
                <h6 className="fw-bold text-secondary mb-1">
                  Invoice #: {info.invoiceNumber || ''}
                </h6>
              </div>
              <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary"> {currency} {total}</h5>
                <h6 className="fw-bold text-secondary mb-1">
                  Date of Issue : {info.dateOfIssue || ''}
                </h6>
              </div>
            </div>
            <div className="p-4">
              <Row className="mb-lg-4" style={{ justifyContent: "space-between" }}>
                <Col md={4}>
                  <div className="fw-bold">Bill to:</div>
                  <div>{info.billTo || ''}</div>
                  <div>{info.billToAddress || ''}</div>
                  <div>State : {info.billToState || ''}</div>
                  <div>Email : {info.billToEmail || ''}</div>
                  <div>Contact : {info.billToContact || ''}</div>
                  <div>GSTIN.:{info.billToGST || ''}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Bill From:</div>
                  <div>{"Shell Consultancy"}</div>
                  <div>{"24, East Part Shyam Vihar, Benar Road"}</div>
                  <div>{"Murlipura, JAIPUR- 302039"}</div>
                  <div>{"State: RAJASTHAN"}</div>
                  <div>{"State Code: 08"}</div>
                  <div>{"Email: admin@shellconsultancy.in"}</div>
                  <div>{"Mobile No.: 6367194878"}</div>
                  <div>{"GSTIN: 08LJMPS3489R1ZL"}</div>
                </Col>
              </Row>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Joining Date</th>
                    <th>DESCRIPTION</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td style={{ width: '100px' }}>{item.dateOfJoining}</td>
                      <td>{item.name} - {item.description}</td>
                      <td className="text-end" style={{ width: '100px' }}>{currency} {item.price}</td>
                      <td className="text-end" style={{ width: '100px' }}>{currency} {item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Table>
                <tbody>
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: '100px' }}>SUBTOTAL</td>
                    <td className="text-end" style={{ width: '100px' }}>{currency} {subTotal}</td>
                  </tr>
                  {sgsttaxAmount !== 0.00 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: '100px' }}>S.G.S.T</td>
                      <td className="text-end" style={{ width: '100px' }}>{currency} {sgsttaxAmount}</td>
                    </tr>
                  )}
                  {cgsttaxAmount !== 0.00 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: '100px' }}>C.G.S.T</td>
                      <td className="text-end" style={{ width: '100px' }}>{currency} {cgsttaxAmount}</td>
                    </tr>
                  )}
                  {discountAmmount !== 0.00 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: '100px' }}>DISCOUNT</td>
                      <td className="text-end" style={{ width: '100px' }}>{currency} {discountAmmount}</td>
                    </tr>
                  )}
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: '100px' }}>TOTAL</td>
                    <td className="text-end" style={{ width: '100px' }}>{currency} {total}</td>
                  </tr>
                </tbody>
              </Table>
              {info.notes && (
                <div className="bg-light py-3 px-4 rounded">
                  {info.notes}
                </div>
              )}
              <Row className="mb-lg-4" style={{ justifyContent: "space-between", padding: "59px 0 0 0", marginTop: "50px" }}>
                <Col md={5}>
                  <div className="fw-bold">Bank Details:</div>
                  <div>State Bank of India, Murlipura Scheme, Jaipur</div>
                  <div>A/c No. 42391739087, IFSC: SBIN0031721</div>
                </Col>
                <Col lg={5}>
                  <div className="fw-bold mt-4">For Shell Consultancy:</div>
                  <div>( Proprietor )</div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="pb-4 px-4">
            <Row>
              <Col md={6}>
                <Button variant="primary" className="d-block w-100" onClick={GenerateInvoice}>
                  <BiPaperPlane style={{ width: '15px', height: '15px', marginTop: '-3px' }} className="me-2" />
                  Send Invoice
                </Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-primary" className="d-block w-100 mt-3 mt-md-0" onClick={GenerateInvoice}>
                  <BiCloudDownload style={{ width: '16px', height: '16px', marginTop: '-3px' }} className="me-2" />
                  Download Copy
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>
        <hr className="mt-4 mb-3" />
      </div>
    );
  }
}

export default InvoiceModal;
