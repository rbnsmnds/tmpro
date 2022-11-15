import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import { PromptComponents } from '../components/Prompt';
import logo from '../assets/logo.png';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /* INÍCIO do hook de autenticação de conta do usuário */
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function acessarConta(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha);
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  /* TÉRMINO do hook de autenticação de conta do usuário */

  return (

    <PromptComponents>
      <form className="form-container">

        <span className="form-title">
          <img src={logo} alt="Telemedicina" />
        </span>

        <span className="form-title welcome">Bem-vindo!</span>

        <div className='form-input'>
          <input 
            className={email !== "" ? 'input has-value' : 'input'}
            type='email' 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className='input-focus' data-placeholder='Email'></span>
        </div>

        <div className='form-input'>
          <input 
            className={senha !== "" ? 'input has-value' : 'input'} 
            type='password' 
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <span className='input-focus' data-placeholder='Senha'></span>
        </div>

        <div className='form-button'>
          <button className='button' onClick={acessarConta}>
            Login
          </button>
        </div>

        <div className='form-footer'>
          <span className='form-text'>Não possui conta?</span>
          <Link className='form-link' to='/register'>
              Crie uma conta.
          </Link>
        </div>

      </form>
    </PromptComponents>

  );

}
