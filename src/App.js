import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const style = {
  table: {
    minWidth: 650,

  },
}

export default class SimpleTable extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/list`)
      .then(res => {
        console.log("res.data", res.data)
        const products = res.data;
        this.setState({ products });
      })
  }
  render() {

    return (
      <TableContainer component={Paper}>
        <Table className={style.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">type</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">rating</TableCell>
              <TableCell align="right">warranty_years</TableCell>
              <TableCell align="right">available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.products.data && this.state.products.data.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.warranty_years}</TableCell>
                <TableCell align="right">{row.available ? "true" : "false"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

  }

}