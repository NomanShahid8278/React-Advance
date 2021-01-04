import React,{useState} from 'react'
import data from './data'
import List from './list'
import './project.css'
const Project = ()=>{
    const [people,setPeople] = useState(data)
    return (
            <main>
      <section className='projectContainer'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    )
}

export default Project