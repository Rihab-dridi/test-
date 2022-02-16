
import { Card,ListGroup,Button } from "react-bootstrap";
import EditContact from './editContact'

export default function Contact({el}) {


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header> {el.name} </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{el.email}</ListGroup.Item>
          <ListGroup.Item>{el.phone} </ListGroup.Item>
          <div className='contact-btns' >
          <Button variant="outline-light" >Delete</Button>{' '}
          <EditContact el={el} />
          </div>
        </ListGroup>
      </Card>
    </div>
  );
}
