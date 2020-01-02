import React from 'react';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import axios from 'axios';

export default class Create extends React.Component {
    state = {
      products: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000/api/create`)
        .then(res => {
          console.log("res.data", res.data)
          const products = res.data;
          this.setState({ products });
        })
    }

render(){
    return(
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
    )

}
}
