import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        )
    }
}
