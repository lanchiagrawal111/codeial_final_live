import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearAuthState, login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // handling form data using uncontrolled component
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    //handling form data using controlled component
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    console.log('THIS_STATE', this.state);
    const { email, password } = this.state;
    // if both available then only dispatch an action
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (isLoggedin) {
      return <Redirect to={from} />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert-error-dialog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            //handling form data using uncontrolled component
            // ref={this.emailInputRef}
            //handling form data using controlled component
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            //handling form data using uncontrolled component
            // ref={this.passwordInputRef}
            //handling form data using controlled component
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
