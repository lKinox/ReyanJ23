import { WorkBoxes } from './WorkBoxes/WorkBoxes.jsx'
import WorkVec from './WorkVec.svg'

export function Works() {
    return (
      <div className='WorksDAD' id='Works'>
          <img src={WorkVec} alt=""></img>
          <h1>Mis Trabajos:</h1>
          <div className='Works'>
            <WorkBoxes />
          </div>
      </div>
    );
  }