import Media from 'react-media';

import marsup from '../Assets/Images/marsupilami-down.png'

const Objets = () => {
    return <div>
        <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<img className='anim' src={marsup} ></img>)}/>
        Objets
    </div>
    }
    export default Objets
