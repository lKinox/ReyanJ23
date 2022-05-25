import { WorkBoxes } from './WorkBoxes/WorkBoxes.jsx'
import WorkVec from './WorkVec.svg'

export function Works() {
    return (
      <div className='WorksDAD'>
          <img src={WorkVec}></img>
          <h1>Mis Trabajos:</h1>
          <div className='Works'>
            <WorkBoxes />
          </div>
      </div>
    );
  }