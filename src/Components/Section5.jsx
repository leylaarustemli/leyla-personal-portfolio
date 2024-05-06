import React, { useEffect } from 'react'
import "./Section5.css"
import Aos from 'aos'
import "aos/dist/aos.css"
const Section5 = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <section className='section5'>
<div className="container">
    <div className="ust-sctn5">
        <h4>EDUCATION & SKILL</h4>
        <h2>Showcasing your talent
amplifying your impact</h2>
    </div>
    <div className="four-cards">
    <div className="ust-twocard">
    <div className="cardbir">
            <div>2014-2018</div>
            <h4>Wordpress and End Developer</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
        <div className="cardbir">
            <div>2014-2018</div>
            <h4>Wordpress and End Developer</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
    </div>
      <div className="alt-twocard">
      <div className="cardbir">
            <div>2014-2018</div>
            <h4>Wordpress and End Developer</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
        <div className="cardbir">
            <div>2014-2018</div>
            <h4>Wordpress and End Developer</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
      </div>
        
    
        
    </div>
    <div className="program-language">
    <div className="alt-html">
     <div className="html">
    <p>HTML</p>
    <div data-aos="fade-right" className='color'></div>
    </div>
     <div className="html">
    <p>CSS</p>
    <div data-aos="fade-right" className='color'></div>
    </div>
     <div className="html">
    <p>Python</p>
     <div data-aos="fade-right" className='color'></div>
    </div>
    </div>
   <div className="ust-html">
    <div className="html">
    <p>Java Script</p>
    <div data-aos="fade-right" className='color'></div>
    </div>
     <div className="html">
    <p>Photoshop</p>
   <div data-aos="fade-right" className='color'></div>
    </div>
    <div className="html">
    <p>Figma</p>
 <div data-aos="fade-right" className='color'></div>
    </div>
   </div>
    

    </div>
</div>
    </section>
  )
}

export default Section5