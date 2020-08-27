import React from "react";
// reactstrap components
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    Table,
    UncontrolledTooltip,
    PaginationItem,
    PaginationLink,
    Pagination,
    CardFooter,
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
                                        <Button color='primary' className="chooseBTN">Choose a Motherboard</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose a Memory</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose a Storage</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose a Video Card</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose a Power Supple Unit</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose a Case</Button>
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
                                        <Button color='primary' className="chooseBTN">Choose your Peripherals</Button>
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