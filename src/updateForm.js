import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import "./createForm.css";

const style = {
    table: {
      minWidth: 500,
  
    },
    buttonStyle : {
        color : green
        
    }
  }
class UpdateForm extends React.Component {
    state = {
        open: false,
        _id : Number,
        name : "",
        type : "",
        Price : "",
        rating : "",
        warranty_years: "",
        available: ""
};
    openDialog() {
        this.setState({ open: true });
    }
    handleCancelClick = () => {
        this.setState((prevState) => ({"open": !prevState.open}));
      }
    handleChangeId = event => {
        this.setState({ _id: event.target.value });
      }
    handleChangeName = event => {
        this.setState({ name: event.target.value });
      }  
    handleChangeType = event => {
        this.setState({ type: event.target.value });
      }
    handleChangePrice = event => {
        this.setState({ Price: event.target.value });
      }
    handleChangeRating = event => {
        this.setState({ rating: event.target.value });
      }  
    handleChangeWarrantyYears = event => {
        this.setState({ warranty_years : event.target.value });
      }
    handleChangeAvailable = event => {
        this.setState({ available: event.target.value });
      }        

      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            _id : this.state._id,
            name: this.state.name,
            type : this.state.type,
            Price : this.state.Price,
            rating : this.state.rating,
            warranty_years : this.state.warranty_years,
            available : this.state.available
        };  
    axios.put(`http://localhost:3000/api/users/${this.state._id}`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }  

    render() {
        return (
            <div className="App">
                <React.Fragment>
                <Button className={style.buttonStyle} onClick={this.openDialog.bind(this)}>UPDATE</Button>
                </React.Fragment>
                <Dialog open={this.state.open} onEnter={console.log('Hey.')}>
                    <DialogTitle>Hello CodeSandbox</DialogTitle>
                    <DialogContent>Start editing to see some magic happen!</DialogContent>
                    <TextField onChange={this.handleChangeId}
                        autoFocus
                        margin="dense"
                        _id={this.state._id}
                        label="ID"
                        type="id"
                        fullWidth/>
                    <TextField onChange={this.handleChangeName}
                        autoFocus
                        margin="dense"
                        id="name"
                        name ="name"
                        label="name"
                        type="text"
                        fullWidth/>
                    <TextField onChange={this.handleChangeType}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Type"
                        type="text"
                        fullWidth/>
                    <TextField onChange={this.handleChangePrice}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="Price"
                        type="text"
                        fullWidth/>
                    <TextField onChange={this.handleChangeRating}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="rating"
                        type="text"
                        fullWidth/> 
                    <TextField onChange={this.handleChangeWarrantyYears}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="warranty_years"
                        type="text"
                        fullWidth/> 
                    <TextField onChange={this.handleChangeAvailable}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="available"
                        type="email"
                        fullWidth/>  
                    <DialogActions> 
                        <Button onClick ={this.handleCancelClick}   color="primary">
                            Cancel
                        </Button>
                        <Button onClick ={this.handleSubmit} type="submit"  color="primary">
                            Submit
                        </Button>
                    </DialogActions>   
                </Dialog>
            </div>
        );
    }
}


export default UpdateForm 