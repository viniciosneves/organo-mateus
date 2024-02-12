import './Rodape.css'
import facebook from '../../imagens/fb.png'
import instagran from '../../imagens/ig.png'
import twitter from '../../imagens/tw.png'
import fundo  from '../../imagens/fundo.png'


const Rodape = () =>{
   
    return(
        <footer className="footer">           
            <section>
          
                <ul className="redeSociais">
             
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebook} alt="fecebook"/>
                        </a>
                    </li>  
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src={instagran} alt="instagran"/>
                        </a>
                    </li>     
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitter} alt="tiwtter"/>
                        </a>
                    </li>         
                </ul>
            </section>

            <section>
                Desenvolvido no Curso da Alura por Mateus Rodrigues.
            </section>
        </footer>

        
    )
}


export default Rodape;