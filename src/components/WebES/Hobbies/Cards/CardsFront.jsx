import IconBaseball from './IconBaseball.svg'
import IconPiano from './IconPiano.svg'
import IconDeveloper from './IconDeveloper.svg'

function CardsFr(props) {
    return (
        <div className='CardsFront'>   
            <div className='CardsFr CardsArr'>
                <img src={props.icon} alt=''></img>
            </div>
            <div className='CardsBc CardsArr'>
                <img src={props.icon} alt=''></img>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 

export function CardsFront() {
    return (
      <div className='CardsDAD'>
          <CardsFr icon={IconBaseball} title={'Béisbol'} description={' Mi gusto por el béisbol comenzó desde que era niño, practiqué el deporte en varios equipos hasta que tuve que comenzar la universidad. Ahora disfruto mucho de los partidos y de los jugadores. Mis jugadores favoritos son: Omar Vizquel, José Altuve y Ronald Acuña Jr.'}/>
          <CardsFr icon={IconPiano} title={'Música'} description={'La música ha estado muy presente en mi vida desde niño, a los 11 años mis papás me compraron mi primera guitarra y desde entonces aprendí mucho de música por mi cuenta. Mis artistas favoritos son: Metallica, Stevie Ray Vaughan, Yngwie Malmsteen y Guaco.'}/>
          <CardsFr icon={IconDeveloper} title={'Desarrollo Web'} description={'El desarrollo web ha sido de las cosas que más me han llamado la atención pero de las que menos he tenido oportunidades más allá de las que he podido lograr por mi cuenta. Decidí que para lograr aprender a programar tenía que hacerlo de forma autodidacta y aquí estoy.'}/>
      </div>
    );
  }