import React from 'react';
import "./App.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Create from './createForm.js';
import Update from './updateForm';
import Delete from './deleteProduct'
import socketIOClient from "socket.io-client";


const style = {
  table: {
    minWidth: 500,

  }
}

export default class SimpleTable extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    const socket = socketIOClient(`http://localhost:3000`);
    socket.on("FromAPI", data => this.setState({ products: data }));
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/api/list`)
  //     .then(res => {
  //       console.log("res.data", res.data)
  //       const products = res.data;
  //       this.setState({ products });
  //     })
  // }

  render() {

    return (
      <TableContainer component={Paper}>
        <Table className={style.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">type</TableCell>
              <TableCell align="left">price</TableCell>
              <TableCell align="left">rating</TableCell>
              <TableCell align="left">warranty_years</TableCell>
              <TableCell align="left">available</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.products.data && this.state.products.data.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.rating}</TableCell>
                <TableCell align="left">{row.warranty_years}</TableCell>
                <TableCell align="left">{row.available ? "Yes" : "No"}</TableCell>
                <TableCell >
                  <Update
                    id={row._id}
                    name={row.name}
                    type={row.type}
                    price={row.price}
                    rating={row.rating}
                    warranty_years={row.warranty_years}
                    available={row.available}
                  />
                </TableCell>
                <TableCell>
                  <Delete 
                  id={row._id}
                  name={row.name}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div><Create /></div>
      </TableContainer>

    );

  }

}