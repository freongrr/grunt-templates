// @flow
"use strict";

import React from "react";
import {PageHeader, Table} from "react-bootstrap";

type Props = {};

export default class Hello extends React.Component {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageHeader>Template App&nbsp;
                    <small>Java + React</small>
                </PageHeader>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
