import Media from 'react-media';

import marsup from '../Assets/Images/marsupilami-down.png'

const Curiosite = () => {
    return <div>
        <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<img className='anim' src={marsup} ></img>)}/>
        Curiosite
    </div>
    }

export default Curiosite
