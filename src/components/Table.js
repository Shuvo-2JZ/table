import React, { Component } from 'react'

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component {
    render() {

        // receiving the state data from App.js
        const {characterData} = this.props

        return (
            <div>
                <table className="table">
                    <TableHeader></TableHeader>
                    <TableBody characterData={characterData} ></TableBody>
                </table>
            </div>
        )
    }
}
