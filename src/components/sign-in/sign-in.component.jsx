import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({email: '',password: ''})
  }

  handleChange = e => {
    const {value, name} = e.target
    this.setState({[name]:value})
  }
    
  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
          name='email' 
          handleChange={this.handleChange} 
          type='email' 
          value={this.state.email}
          label='email'
          required/>
          
          <FormInput 
          name='password' 
          handleChange={this.handleChange} 
          type='password' 
          value={this.state.password}
          label='password'
          required/>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle}>Google Sign In</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn