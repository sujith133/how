import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import image1 from '../assets/worship.jpg'
import image2 from '../assets/worship1.jpg'
import image3 from '../assets/worship2.jpg'
const Home =()=>{
    return(
        <div className="w=100">
        <div style={{ 
            backgroundImage: `url('https://raw.githubusercontent.com/sujith133/HeartOfWorship/main/heart-of-worship/src/Components/assets/worship1.jpg')`, 
            height:'100vh', 
          
            backgroundSize:'cover', 
            
            
            }}
            
            className='m-0 p-0 text-light d-flex flex-column justify-content-center align-items-center '>
                <motion.h1 initial={{ opacity: 0, y: 150 }} 
                  animate={{ opacity: 0.8, y: 0 }} 
                  transition={{ duration: 1.5 }} 
                  className='fontSize jomhuria-regular '>Heart of Worship
                </motion.h1>
                <motion.h5 initial={{ opacity: 0, y: 100 }} 
                  animate={{ opacity: 0.8, y: -30 }} 
                  transition={{ duration: 1.5, delay:0.5 }} 
                  className='fontSizep2 texter jomhuria-regular '>Gathered in Grace | Lifted in Worship
                </motion.h5>
          </div>
    
          <div style={{ 
            backgroundImage: `url('https://raw.githubusercontent.com/sujith133/HeartOfWorship/main/heart-of-worship/src/Components/assets/worship2.jpg')`, 
            height:'100%',
            minHeight:'100vh', 
            minWidth:'100vw',
            textAlign:'center',
            backgroundSize:'cover', 
            backgroundPosition: 'center',
            opacity:'0.8'
            }} 
            className='bg-image flexer text-light'>
              <div className='details text-center '>
                <div className="maxwidths">
                <motion.h2 initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Our Next Worship
                </motion.h2>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0}} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>On 25th March 2024
                </motion.p>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '><CiLocationOn className='text-danger' /> Christian Convention Center
                </motion.p>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Time: 04:00pm to 08:00pm
                </motion.p>
    
                </div>
                <motion.div initial={{opacity: 0}} 
                  whileInView={{opacity: 1 }} 
                  transition={{ duration: 1}} >
                    <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15200.452172004207!2d83.324416!3d17.739312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943c534ef4f7f%3A0x5fd34eed09e0015f!2sChristian%20Convention%20Center!5e0!3m2!1sen!2sin!4v1711227985975!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title='Christian Convention Center'
          className='map'
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe></motion.div>
              </div>
              <div className='details p-0 m-0'>
              <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Worship | <span className='texter'>Engage in heartfelt worship during our prayer meeting.</span>
                </motion.p>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Word | <span className='texter'>Discover the Word of God at our prayer gathering.</span>
                </motion.p>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Intercession | <span className='texter'>Come together for intercession during our prayer session.</span>
                </motion.p>
                <motion.p initial={{y: 50 }} 
                  whileInView={{y: 0 }} 
                  transition={{ duration: 1, type:"spring" }} 
                  className='fontSizep2 texter jomhuria-regular '>Praise | <span className='texter'>Lift your voices in praise at our prayer assembly.</span>
                </motion.p>
              </div>
    
    
          </div> 
          <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Home