import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from '../EditableField/EditableField';

// Define types for props
interface InvoiceItemProps {
  onItemizedItemEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRowAdd: () => void;
  onRowDel: (item: Item) => void;
  currency: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  dateOfJoining: string;
}

class InvoiceItem extends React.Component<InvoiceItemProps> {
  render() {
    const { onItemizedItemEdit, currency, onRowDel, items } = this.props;
    const itemTable = items.map((item: Item) => (
      <ItemRow
        onItemizedItemEdit={onItemizedItemEdit}
        item={item}
        onDelEvent={onRowDel}
        key={item.id}
        currency={currency}
      />
    ));

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Candidate/s</th>
              <th>Date of Joining</th>
              <th>PRICE/RATE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>{itemTable}</tbody>
        </Table>
        <Button className="fw-bold" onClick={this.props.onRowAdd}>
          Add Candidate
        </Button>
      </div>
    );
  }
}

// Define types for ItemRow props
interface ItemRowProps {
  onItemizedItemEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelEvent: (item: Item) => void;
  item: Item;
  currency: string;
}

class ItemRow extends React.Component<ItemRowProps> {
  onDelEvent = () => {
    this.props.onDelEvent(this.props.item);
  };

  render() {
    const { item, onItemizedItemEdit, currency } = this.props;
    return (
      <tr>
        <td style={{ width: '100%' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: "text",
              name: "name",
              placeholder: "Candidate Name",
              value: item.name,
              id: item.id,
            }}
          />
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: "text",
              name: "description",
              placeholder: "Candidate Employee ID",
              value: item.description,
              id: item.id,
            }}
          />
        </td>
        <td style={{ minWidth: '180px' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: "date",
              name: "dateOfJoining",
              placeholder: "Date of Joining",
              value: item.dateOfJoining,
              id: item.id,
            }}
          />
        </td>
        <td style={{ minWidth: '130px' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              leading: currency,
              type: "number",
              name: "price",
              min: 1,
              step: "0.01",
              presicion: 2,
              textAlign: "text-end",
              value: item.price,
              id: item.id,
            }}
          />
        </td>
        <td className="text-center" style={{ minWidth: '50px' }}>
          <BiTrash
            onClick={this.onDelEvent}
            style={{ height: '33px', width: '33px', padding: '7.5px' }}
            className="text-white mt-1 btn btn-danger"
          />
        </td>
      </tr>
    );
  }
}

export default InvoiceItem;
