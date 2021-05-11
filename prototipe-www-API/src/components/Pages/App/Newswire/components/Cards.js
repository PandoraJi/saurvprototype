import React from 'react'
import { Link } from 'gatsby'

import Card from './NewsCard'


const Cards = (props) => {

  return (
    <ul className="grid grid-rows-2 gap-6" style={{height:'auto'}}>
        <Card title={"Newsletter Title lorem ipsum dolor"}
        time={"Oct 19, 2020"}
        text={"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nulla rmentum…"} />

    <Card title={"Newsletter Title lorem ipsum dolor"}
        time={"Oct 19, 2020"}
        text={"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nulla rmentum…"} />

    {/*<Card title={"Newsletter Title lorem ipsum dolor"}*/}
    {/*    time={"Oct 19, 2020"}*/}
    {/*    text={"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nulla rmentum…"} />*/}
    </ul>
  )
}

export default Cards
