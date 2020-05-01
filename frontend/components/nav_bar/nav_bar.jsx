import React from 'react';
import {Link} from 'react-router-dom';

    class NavBar extends React.Component {
        constructor(props){
            super(props)
        }



        render() {

            const {currentUser, logout} = this.props 
            
            
            const display = currentUser ? (
                <div>
                <p>Hello, {currentUser.username}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <Link className="btn" to='/signup'>Sign Up</Link>
                <Link className="btn" to='/login'>Log In</Link>
            </div>
            
            );
            
            return (
                <header className="nav-bar">
                <h1 className="logo">YimYum</h1>
                <div>
                    {display}
                </div>

            </header>
        )
        }   
        
    }
    export default NavBar;