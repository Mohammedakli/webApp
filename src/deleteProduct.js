import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
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
    axios.delete(`http://localhost:3000/api/users/${this.state._id}`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }    
    render() {
        return (
            <div className="App">
                <Button class = "buttonStyle" onClick={this.openDialog.bind(this)}>ADD</Button>
                <Dialog open={this.state.open} onEnter={console.log('Hey.')}>
                    <DialogTitle>Hello CodeSandbox</DialogTitle>
                    <DialogContent>Start editing to see some magic happen!</DialogContent>
                    <TextField onChange={this.handleChangeId}
                        autoFocus
                        margin="dense"
                        _id= {this.state._id} 
                        label="ID"
                        type="id"
                        fullWidth/>
                    <DialogActions> 
                        <Button onClick ={this.handleCancelClick}   color="primary">
                            Cancel
                        </Button>
                        <Button onClick ={this.handleSubmit} type="submit"  color="primary">
                            Delete
                        </Button>
                    </DialogActions>   
                </Dialog>
            </div>
        );
    }
}


export default DeleteProduct