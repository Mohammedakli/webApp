import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import "./createForm.css";


class CreateForm extends React.Component {
    state = {
        open: false,
        _id: Number,
        name: "",
        type: "",
        price: "",
        rating: "",
        warranty_years: "",
        available: ""
    };
    openDialog() {
        this.setState({ open: true });
    }
    handleCancelClick = () => {
        this.setState((prevState) => ({ "open": !prevState.open }));
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
        this.setState({ price: event.target.value });
    }
    handleChangeRating = event => {
        this.setState({ rating: event.target.value });
    }
    handleChangeWarrantyYears = event => {
        this.setState({ warranty_years: event.target.value });
    }
    handleChangeAvailable = event => {
        this.setState({ available: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            _id: this.state._id,
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            rating: this.state.rating,
            warranty_years: this.state.warranty_years,
            available: this.state.available
        };
        axios.post(`http://localhost:3000/api/create`, { user })
            .then(res => {
                this.handleCancelClick();
            })
    }
    render() {
        return (
            <div className="App">
                <Button  onClick={this.openDialog.bind(this)}>
                    ADD Product
                    </Button>
                <Dialog open={this.state.open} onEnter={console.log('Hey.')} aria-labelledby="form-dialog-title">
                    <DialogTitle>Ajouter un produit</DialogTitle>
                    <DialogContent>
                        <TextField onChange={this.handleChangeName}
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="name"
                            type="text"
                            fullWidth />
                        <TextField onChange={this.handleChangeType}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Type"
                            type="text"
                            fullWidth />
                        <TextField onChange={this.handleChangePrice}
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Price"
                            type="text"
                            fullWidth />
                        <TextField onChange={this.handleChangeRating}
                            autoFocus
                            margin="dense"
                            id="number"
                            label="rating"
                            type="text"
                            fullWidth />
                        <TextField onChange={this.handleChangeWarrantyYears}
                            autoFocus
                            margin="dense"
                            id="number"
                            label="warranty_years"
                            type="text"
                            fullWidth />
                        <TextField onChange={this.handleChangeAvailable}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="available"
                            type="email"
                            fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancelClick} color="primary">
                            Abandonner
                        </Button>
                        <Button onClick={this.handleSubmit} type="submit" color="primary">
                            Enregistrer
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default CreateForm 