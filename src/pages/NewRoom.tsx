import { Link } from 'react-router-dom'
import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'

import '../styles/auth.scss';
import { Button } from '../components/button';
//import { useAuth } from '../hooks/userAuth';

export function NewRoom() {
   // const { user } = useAuth()

        return (
            <div id="page-auth">
                <aside>
                    <img src={IllustrationImg} alt="ilustração Simbolizando perguntas e respostas" />
                    <strong>Crie Salas de Q&amp;A ao-vivo</strong>
                    <p>Tire as duvidas da sua audiência em tempo real</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={LogoImg} alt="Letmeask"/>
                        <h2>Criar uma nova Sala</h2>
                        <form>
                            <input 
                            type="text"
                            placeholder="Nome da Sala"
                            />
                            <Button type="submit">
                            Criar Sala
                            </Button>    
                        </form>  
                        <p>
                            Quer entrar em uma sala Existente ? <Link to="/">Clique Aqui</Link>
                        </p>
                    </div>
                </main>
            </div>
        )
}