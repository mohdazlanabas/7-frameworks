import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container fluid>
        <Form>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
              <Form.Control type = 'email' placeholder = 'example@mail.com' />
                <Form.Text className = 'text-muted'>
                  We'll never share your email address!
                </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
              <Form.Control type = 'password' placeholder = 'Enter Password' />
          </Form.Group>
  
          <Button variant = 'secondary' type='submit'>Login</Button>
        </Form>

      <Card style = {{ color : "#000"}} >
          <Card.Img src = "https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title>
                  Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
              </Card.Text>
            <Button variant = 'primary'>Read More</Button>
            </Card.Body>
        </Card>


        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant='primary'>Alert Button</Alert>
        <Button>Test Button</Button>
      </Container>
      </header>
    </div>
  );
}

export default App;
