import React from 'react'
import "./Section9.css"
const Section9 = () => {
  let array=[{
    image:"https://zyan.vercel.app/images/blog/1.jpg" ,
    date:"31 December 2024",
    title:"The standard personal My portfolio"

  },{
    image:"https://zyan.vercel.app/images/blog/2.jpg" ,
    date:"31 December 2024",
    title:"The standard personal My portfolio"

  },{
    image:"https://zyan.vercel.app/images/blog/3.jpg" ,
    date:"31 December 2024",
    title:"The standard personal My portfolio"
  }]

  return (
    <section className='section9'>
    <div className="container">
    <div className="top-sctn9">
        <div className="top-left">
<h4>MY BLOG</h4>
<h2>Unlocking the potential of your
personal brand</h2>
        </div>
        <div className="top-btn">
          <button>More Blog+</button>
        </div>
      </div>
      <div className="button-sctn9">
        <div className="threecards">
{
  array.map((item,index)=>(
    <div key={index} className="card-one">
  <img className='img-phone' src={item.image}alt="" />
  <div className="admin-comments">
  <div className="date-btn">
    <p>{item.date}</p>
  </div>
    <div className="comments">
    <i class="fa-solid fa-user"></i><p>By admin</p><i class="fa-solid fa-comments"></i><p>Comments(05)</p>
    </div>
    <div className="prgrph-cmnts">
      <p>{item.title}</p>
    </div>
  </div>
</div>
  ))
}
        </div>
      </div>
    </div>
   
    </section>
  )
}

export default Section9