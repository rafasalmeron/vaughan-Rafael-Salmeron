import React from 'react'
import { Back, Pages,} from './styled'
import Img1 from '/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-labefy/labefy/src/assets/img/1Step.png'


class TutorialPage extends React.Component {
    render(){
        return(
            <Pages>
                <p>Segue os slides para adicionar tracks:</p>
                <img src={Img1}/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>

                <Back onClick={this.props.handlePlaylistsPage}>Voltar</Back>
            </Pages>
        )
    }
}

export default TutorialPage