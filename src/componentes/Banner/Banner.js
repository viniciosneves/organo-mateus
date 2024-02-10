import'./Banner.css'

import image from '../../imagens/banner.png'

function Banner(){
    //JSX
    return(
        <header className="banner">
            <img src={image} alt="O Banner principal da Pagina do Organo"/>
        </header>
        
    )
}


export default Banner;