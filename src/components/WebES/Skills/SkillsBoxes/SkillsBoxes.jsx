import IconHTML from './IconHTML.svg'
import IconCSS from './IconCSS.svg'
import IconSASS from './IconSASS.svg'
import IconBoots from './IconBoots.svg'
import IconjQ from './IconjQ.svg'
import IconJS from './IconJS.svg'
import IconPY from './IconPY.svg'
import IconReact from './IconReact.svg'
import IconRedux from './IconRedux.svg'

function Boxes(props) {
    return (   
        <div className='BoxSkill'>
            <a target='_blanck' href={props.link} ><img src={props.icon}></img></a>
        </div>
    )
} 

export function SkillsBoxes() {
    return (
      <div className='SkillsBoxes'>
          <Boxes icon={IconHTML} link='https:www.freecodecamp.org/certification/lKinox/responsive-web-design'/>
          <Boxes icon={IconCSS} link='https://www.freecodecamp.org/certification/lKinox/responsive-web-design'/>
          <Boxes icon={IconSASS} link='https://www.freecodecamp.org/certification/lKinox/front-end-development-libraries'/>
          <Boxes icon={IconBoots} link='https://www.freecodecamp.org/certification/lKinox/front-end-development-libraries'/>
          <Boxes icon={IconjQ} link='https://www.freecodecamp.org/certification/lKinox/front-end-development-libraries'/>
          <Boxes icon={IconJS} link='https://www.freecodecamp.org/certification/lKinox/javascript-algorithms-and-data-structures'/>
          <Boxes icon={IconPY} link='https://coursera.org/share/06695a23829300f986291466af524d80'/>
          <Boxes icon={IconReact} link='https://www.freecodecamp.org/certification/lKinox/front-end-development-libraries'/>
          <Boxes icon={IconRedux} link='https://www.freecodecamp.org/certification/lKinox/front-end-development-libraries'/>
      </div>
    );
  }