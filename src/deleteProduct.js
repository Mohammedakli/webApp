import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import "./createForm.css";


class DeleteProduct extends React.Component {
    state = {
        open: false,
        _id : Number,
       
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
    

      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            _id : this.state._id,
            
        };  
    axios.delete(`http://localhost:3000/api/users/${this.props.id}`, { user })
        .then(res => {
          this.handleCancelClick();
        })
    }    
    render() {
        return (
            <div className="App">
                <Button  onClick={this.openDialog.bind(this)}>Delete</Button>
                <Dialog open={this.state.open} onEnter={console.log('Hey.')} aria-labelledby="form-dialog-title">
                <DialogTitle>êtes-vous sûr de vouloir supprimer ce produit : {this.props.name} ?</DialogTitle>
                   
                    <DialogActions> 
                        <Button onClick ={this.handleCancelClick}   color="primary">
                        Non
                        </Button>
                        <Button onClick ={this.handleSubmit} type="submit"  color="primary">
                        Oui
                        </Button>
                    </DialogActions>   
                </Dialog>
            </div>
        );
    }
}


export default DeleteProduct