import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import {
    faLinkedinIn,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function App() {
    const history = useHistory();
    const [ user, setUser ] = useState('');
    const [ error, setError ] = useState(true);
    const [ email, setEmail ] = useState('');

    const endLinkedin = 'https://www.linkedin.com/in/michell-mello-957433a/';
    const endGitHub = 'https://github.com/michellamello/';

    function handleSearch() {
        (fetch('https://fakestoreapi.com/products?limit=4')
        .then(res => res.json())
        .then(json => localStorage.setItem('productsList', JSON.stringify(json)))
        .then(checkInput())
        .catch(err => {
            setError(true);
        }));
    }
    
    function checkInput() {
        if (user === "" || email === "") {
            setError(true);
            console.log(error)
        } else {
            setError(false);
            console.log(error)
            history.push('/offer')
        }
        
    }

    const onChangeUser = event => {
        localStorage.setItem('user', event.target.value);
        setUser(event.target.value);
    }

    const onChangeEmail = event => {
        localStorage.setItem('email', event.target.value);
        setEmail(event.target.value);
    }
    

    return (
        <div class="container">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="content">
                <input class="inputContactData" placeholder="Seu nome" value={user} onChange={onChangeUser}></input>
                <input class="inputContactData" placeholder="Seu melhor e-mail"value={email} onChange={onChangeEmail}></input>
                <button type="button" class="sendButton" onClick={handleSearch}><FontAwesomeIcon icon={faArrowRight} size='2x' color='white'/></button>
                {error ? <p class="errorMessage">Não foi possível prosseguir</p> : ''}
            </div>
            <div class="footer">
                <a href={endGitHub}><FontAwesomeIcon icon={faGithub} size='2x' color='white'/></a>
                <a href={endLinkedin}><FontAwesomeIcon icon={faLinkedinIn} size='2x' color='white'/></a>
            </div>
        </div>
        
    )
}