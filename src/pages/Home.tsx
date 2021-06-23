import { useHistory } from 'react-router-dom'

import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import GoogleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/button';
import { useAuth } from '../hooks/userAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRom() {
        if (!user) {
            await signInWithGoogle()
        }
        
        history.push('/rooms/new');   
    }

        return (
            <div id="page-auth">
                <aside>
                    <img src={IllustrationImg} alt="ilustração Simbolizando perguntas e respostas" />
                    <strong>Crie Salas de Q&amp;A Ao-Vivo</strong>
                    <p>Tire as duvidas da audiência em tempo real</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={LogoImg} alt="Letmeask"/>
                        <button onClick={handleCreateRom} className="create-room">
                            <img src={GoogleIconImg} alt="logo da Google" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separator">Ou entre em uma sala</div>
                        <form>
                            <input 
                            type="text"
                            placeholder="Digite o Codigo da sala"
                            />
                            <Button type="submit">
                            Entrar na Sala
                            </Button>    
                        </form>
                    </div>
                </main>
            </div>
        )
}