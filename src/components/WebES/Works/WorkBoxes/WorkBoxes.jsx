import BOOD from './BOOD.svg'
import Porta from './Porta.svg'

function WorkBox(props) {
    return (
        <div className=''>   
            <a href={props.link} target='_blanck'>
                <div className='WorkBox'>
                    <img src={props.img}></img>
                </div>
            </a>
        </div>
    )
} 

export function WorkBoxes() {
    return (
      <div className='WorkBoxes'>
          <WorkBox link={'https://proyect-bood.vercel.app/'} img={BOOD}/>
          <WorkBox link={'/'} img={Porta}/>
      </div>
    );
  }