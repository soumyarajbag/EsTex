import React from 'react'
import { footer } from '../../../data/data'
import './footer.css'
const Footer = () => {
  return (
    <>
    <section className="footerContact">
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1> Do You Have Any Questions ? </h1>
                    <p>We'll help you to grow your caree and growth ! </p>
                </div>
                <button className="btn5">Contact Us Today !</button>

            </div>
        </div>
    </section>
    <footer>
    
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src="../images/Estexlogo.png" alt="" />
                    <h2>Do you Need Help with Anything ? </h2>
                    <p>Receive updates , hot deals , tutorials , discounts sent straight in your inbox every month !</p>
                    <div className="input flex">
                        <input type="text" placeholder='Email Address' name='' id=''/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            {footer.map((val)=>{
            return(
                <div className="box">
                    <h3>{val.title}</h3>
                    <ul>
                        {val.text.map((items)=>{
                            return(
                                <li>{items.list}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
        </div>
       
    
    </footer>
    <div className="legal">
        <span>© 2023 EsTex . Designed by <strong>Soumyaraj Bag</strong></span>
    </div>
    </>
  )
}

export default Footer