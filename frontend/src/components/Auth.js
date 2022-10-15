import React from 'react'


class LoginForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {login: '', password: ''}
    }

    handleChange(event)
    {
        this.setState(
                {
                    [event.target.name]: event.target.value
                }
            );
    }
    handleSubmit(event) {
      this.props.login(this.state.login, this.state.password)
      event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
                <input type="text" className="form-control" name="login" value={this.state.login} onChange={(event)=>this.handleChange(event)} />
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={(event)=>this.handleChange(event)} />
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>


      );
    }
  }

  export default LoginForm