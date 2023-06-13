import React from 'react'
import Heading from '../../common/Heading'
import "./team.css"
import { team } from '../../../data/data' ;
const Team = () => {
  return (
   <>
   <section className='team background'>
    <div className="container">
        <Heading title ="Our Featured Agents" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet veniam officiis voluptates! Ex, deserunt ut quibusdam numquam aliquam nobis rerum dolores eum sed inventore explicabo repudiandae, deleniti nesciunt est accusantium recusandae?"/>
      <div className="content mtop grid3">
        {team.map((val , index)=>{
            return(
                <div className="box" key={index}>
                  <button className="btn3">
                    {val.list} Listings 
                  </button>
                  <div className="details">
                    <div className="img"><img src={val.cover} alt=""  />
                    <i className='fa fa-circle-check'></i>
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                        {val.icon.map((icon , index)=>{
                            return(
                                <li key={index}>{icon}</li>
                            )
                        })}
                    </ul>
                    <div className="button flex">
                        <button><i className="fa fa-envelope"></i>Message</button>
                        <button><i className="fa fa-phone-alt"></i></button>
                        

                    </div>
                  </div>
                </div>
            )
        })}
      </div>
    </div>
   </section>
   </>
  )
}

export default Team