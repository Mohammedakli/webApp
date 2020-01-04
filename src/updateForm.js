import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { green } from '@material-ui/core/colors';
import "./createForm.css";

const style = {
    table: {
        minWidth: 500,

    },
    buttonStyle: {
        color: green

    }
}

class UpdateForm extends React.Component {

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

    user = {
        _id: this.props.id,
        name: this.props.name,
        type: this.props.type,
        price: this.props.Price,
        rating: this.props.rating,
        warranty_years: this.props.warranty_years,
        available: this.props.available
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

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
            _id: this.props.id,
            name: this.state.name ?? this.props.name,
            type: this.state.type ?? this.props.type,
            price: this.state.price ?? this.props.price,
            rating: this.state.rating ?? this.props.rating,
            warranty_years: this.state.warranty_years ?? this.props.warranty_years,
            available: this.state.available ?? this.props.available
        };
        axios.put(`http://localhost:3000/api/users/${this.props.id}`, { user })
            .then(res => {
                this.handleCancelClick(); 
            })
    }

    render() {
        return (
            <div className="App">
                <React.Fragment>
                    <Button className={style.buttonStyle} onClick={this.openDialog.bind(this)}>UPDATE</Button>
                </React.Fragment>
                <Dialog open={this.state.open} onEnter={console.log('Hey.')} aria-labelledby="form-dialog-title">
                    <DialogTitle>odifier le produit : {this.props.name}</DialogTitle>
                    <DialogContent>
                        <TextField onChange={this.handleChangeName}
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            placeholder={this.props.name}
                            fullWidth />
                        <TextField onChange={this.handleChangeType}
                            autoFocus
                            margin="dense"
                            id="type"
                            type="text"
                            placeholder={this.props.type}
                            fullWidth />
                        <TextField onChange={this.handleChangePrice}
                            autoFocus
                            margin="dense"
                            id="number"
                            type="text"
                            placeholder={this.props.price}
                            fullWidth />
                        <TextField onChange={this.handleChangeRating}
                            autoFocus
                            margin="dense"
                            id="number"
                            type="text"
                            placeholder={this.props.rating}
                            fullWidth />
                        <TextField onChange={this.handleChangeWarrantyYears}
                            autoFocus
                            margin="dense"
                            id="number"
                            type="text"
                            placeholder={this.props.warranty_years}
                            fullWidth />
                        <TextField onChange={this.handleChangeAvailable}
                            autoFocus
                            margin="dense"
                            id="name"
                            type="email"
                            placeholder={this.props.available}
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


export default UpdateForm 