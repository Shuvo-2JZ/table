import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class TableBody extends Component {
    render() {

        const rows = this.props.characterData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                </tr>
            )
        })

        return (
            <tbody>{rows}</tbody>
        )
    }
}
