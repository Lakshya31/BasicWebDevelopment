import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    OnEmailChange = (event) => {
        this.setState({email : event.target.value})
    }

    OnPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    OnSubmit = () => {
        fetch("http://localhost:3001/signin",{
            method : 'post',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.LoadUser(user);
                this.props.OnRouteChange('home');
            }
        })
    }

    render(){
        const {OnRouteChange} = this.props;
        return(
            <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.OnEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.OnSubmit} />
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db pointer" onClick={() => OnRouteChange('register')}>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;