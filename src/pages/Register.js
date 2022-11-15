import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import { PromptComponents } from '../components/Prompt';
import logo from '../assets/logo.png';

export const Register = () => {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /* INÍCIO do hook de criação de conta do usuário */
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function criarConta(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, senha);
  }

  if (error) {
    return (
      <div>
        <p>Erro: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Usuário cadastrado: {user.email}</p>
      </div>
    );
  }
  /* TÉRMINO do hook de criação de conta do usuário */

  return (

    <PromptComponents>
      <form className="form-container">

        <span className="form-title">
          <img src={logo} alt="Telemedicina" />
        </span>

        <span className="form-title welcome">Bem-vindo!</span>

        <div className='form-input'>
          <input 
            className={nome !== "" ? 'input has-value' : 'input'}
            type='name' 
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <span className='input-focus' data-placeholder='Nome'></span>
        </div>

        <div className='form-input'>
          <input 
            className={email !== "" ? 'input has-value' : 'input'}
            type='email' 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className='input-focus' data-placeholder='E-mail'></span>
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
          <button className='button' onClick={criarConta}>
            Criar Conta
          </button>
        </div>

        <div className='form-footer'>
          <span className='form-text'>Já possui conta?</span>
          <Link className='form-link' to='/login'>
              Faça login.
          </Link>
        </div>

      </form>
    </PromptComponents>

  );

}