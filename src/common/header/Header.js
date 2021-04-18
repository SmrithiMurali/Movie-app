import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/logo.svg';

import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

const loginModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabPanel = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            openLoginModal : false,
            value : 0
        }
    }
   
    
    openLoginModalHandler = () => {
        this.setState({
            openLoginModal : true,
            value : 0
        });
    }

    closeModalHandler = () => {
        this.setState({ openLoginModal: false });
    }

    tabChangeHandler = ( event ,value ) =>{
        console.log(event);
        this.setState({ value  });
    }

    loginClickHandler = () => {
        this.closeModalHandler();
    }

    registerClickHandler = () => {
        this.closeModalHandler();
    }
    

    render() {
        return (
            <div>
                <div className="header-container">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    {this.state.loggedIn ?
                        <div className="login-button">
                            <Button variant="contained" color="default">
                                Login
                            </Button>
                        </div>
                        :
                        <div className="login-button">
                            <Button variant="contained" color="default" >
                                Logout
                            </Button>
                        </div>
                    }
                    {!this.state.loggedIn
                        ? <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.openLoginModalHandler}>
                                Book Show
                            </Button>
                        </div>
                        : ""
                    }

                    {this.state.loggedIn
                        ? <div className="bookshow-button">
                            <Link to={"/bookshow/" + this.props.id}>
                                <Button variant="contained" color="primary">
                                    Book Show
                                </Button>
                            </Link>
                        </div>
                        : ""
                    }
                </div>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.openLoginModal}
                    contentLabel="Login"
                    onRequestClose={this.closeLoginModalHandler}
                    style={loginModalStyles}
                   >
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>     
                    {this.state.value === 0 &&
                        <TabPanel value={this.state.value} index={0}>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} />
                                <FormHelperText >
                                    <span>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            {this.state.loggedIn === true &&
                                <FormControl>
                                    <span className="successText">
                                        Login Successful!
                                    </span>
                                </FormControl>
                            }
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabPanel>
                    }  

                     {this.state.value === 1 &&
                        <TabPanel>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                                <Input id="registerPassword" type="password" registerpassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler} />
                                <FormHelperText className={this.state.registerPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                <Input id="contact" type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler} />
                                <FormHelperText className={this.state.contactRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            {this.state.registrationSuccess === true &&
                                <FormControl>
                                    <span className="successText">
                                        Registration Successful. Please Login!
                                      </span>
                                </FormControl>
                            }
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                        </TabPanel>
                    }        
                </Modal>

            </div>
        );
    }
}

export default Header;