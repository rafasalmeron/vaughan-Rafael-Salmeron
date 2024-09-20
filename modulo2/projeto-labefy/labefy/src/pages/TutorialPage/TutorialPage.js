import React from 'react'
import Img1 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/1Step.png'
import Img2 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/2step.png'
import Img3 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/3step.png'
import Img4 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/4step.png'
import Img5 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/You1.png'
import Img6 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/you2.1.png'
import Img7 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/you2.png'
import { Back, Pages,} from './styled'

class TutorialPage extends React.Component {
    render(){
        return(
            <Pages>
                <p>Segue os slides para adicionar tracks:</p>
                <div>
                    <p>Utilizando link do 4Shared. Passo 1:</p>
                    <a href={Img1} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img1} width="90" height="90" /></a>
                    </div>
                <div>
                    <p>Passo 2:</p>
                    <a href={Img2} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img2} width="90" height="90" /></a>
                    </div>
                <div>
                    <p>Passo 3:</p>
                    <a href={Img3} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img3} width="90" height="90" /></a>
                    </div>
                <div>
                    <p>Passo 4</p>
                    <a href={Img4} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img4} width="100" height="100" /></a>
                    <p>Aqui você deve copiar apenas a parte dentro das aspas('') do src=''<br/>Deixe Marcado como na imagem.</p>
                    </div>
                <div>
                    <p>Utilizando link do Youtube. Passo 1:</p>
                    <a href={Img5} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img5} width="90" height="90" /></a>
                    </div>
                <div>
                    <p>Passo 2:</p>
                    <a href={Img6} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img6} width="90" height="90" /></a>
                    </div>
                <div>
                    <p>Passo 3:</p>
                    <a href={Img7} title="Clique aqui para ampliar" target="_blank">
                        <img src={Img7} width="90" height="90" /></a>
                    <p>Copie apenas o que está dentro do src="</p>
                    </div>
                <div>
                    <Back onClick={this.props.handlePlaylistsPage}>Voltar</Back>
                </div>
            </Pages>
            
        )
    }
}

export default TutorialPage