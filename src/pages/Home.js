import { useNavigate } from 'react-router-dom';
import { PromptComponents } from '../components/Prompt';
import logo from '../assets/logo.png';

export const Home = () => {

  let navigate = useNavigate();

  const redirect = () => {
    let path = `/login`
    navigate(path)
  }

  return (
    <PromptComponents>
      <div className="form-container">

        <span className="form-title">
          <img src={logo} alt="Telemedicina" />
        </span>

        <span className="form-title welcome">Bem-vindo!</span>

        <div className='form-button'>
          <button className='button' onClick={redirect}>
            Acessar
          </button>
        </div>


      </div>
    </PromptComponents>
  );
}