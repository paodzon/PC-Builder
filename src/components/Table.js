import React from "react";
// reactstrap components
import {
    Media,
    Table,
    Row,
    Card,
    Button,
    Col,
    CardHeader,
} from "reactstrap";
import Modal from './Modal';
import './Table.css';

class Tables extends React.Component {
    render() {
        return (
            <>
            
                <Row>
                    <Col xl='12'>
                        <Card className="shadow">
                            <CardHeader className="border-0 xthead">
                                <h3 className="mb-0">Custom PC Builder</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead">
                                    <tr>
                                        <th scope="col">Component</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Actions</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Processor
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                            <Modal buttonLabel="Choose a Processor"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>  </tr>

                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Motherboard
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Motherboard"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Memory
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Memory"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Storage
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Storage"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Video Card
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Video Card"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Power Supply Unit
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Power Supply Unit"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                       Cases
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose a Case"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Peripherals
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>
                                        <Modal buttonLabel="Choose your Peripherals"></Modal>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"></td>
                                    </tr>
                                   

                                </tbody>
                            </Table>

                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Tables