import React from 'react'
import './price.css' ;
import PriceCard  from './PriceCard';
import Heading from '../../common/Heading';
const Price = () => {
  return (
    <>
    <section className="price padding">
       
        <div className="container">
            <Heading title='Select Your Package' subtitle= ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio eius blanditiis molestias? Unde quos reprehenderit incidunt quidem! Laudantium ea, aliquid ipsam culpa iusto impedit facilis omnis. Veniam, consequuntur. Iure, excepturi ad. ' />
          <PriceCard />
        </div>
    </section>
    </>
  )
}

export default Price