import React, { useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col,
    ModalHeader, 
    ModalBody, 
    ModalFooter 
  } from "reactstrap";
import './Login.css';
import Logo from './pchub.jpg';

const Login = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
  
    <div>
      <Button color="primary" onClick={toggle} className="">Sign In</Button>
      <Modal isOpen={modal} toggle={toggle} className=''>
        <ModalHeader className="" toggle={toggle}></ModalHeader>
        <ModalBody>
                <Card className="">

                  <CardBody>
                    <div className="text-center text-muted mb-4">
                      <img src={Logo} className="loginLogo" alt=""/>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
             
        </ModalBody>

      </Modal>
     
    </div>
   
  );
}

export default Login;
