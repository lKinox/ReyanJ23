import { WorkBoxes } from './WorkBoxes/WorkBoxes.jsx'
import WorkVec from './WorkVec.svg'

export function Works() {
    return (
      <div className='WorksDAD'>
          <img src={WorkVec} alt=""></img>
          <h1 id='Works'>Mis Trabajos:</h1>
          <div className='Works'>
            <WorkBoxes />
          </div>
      </div>
    );
  }