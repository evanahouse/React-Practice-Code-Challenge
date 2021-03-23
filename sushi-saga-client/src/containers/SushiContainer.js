import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {
  
  

  return (
    <Fragment>
      <div className="belt">
        
        {
          props.displayedSushis.map(sushi => <Sushi sushi={sushi} key={sushi.id}/>)
        }
        <MoreButton nextPage={props.handleIndexing}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer