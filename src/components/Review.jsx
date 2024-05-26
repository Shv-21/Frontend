import React from 'react'
import styled from 'styled-components'
import { MdArrowDownward } from "react-icons/md";
import img1 from './images/first.png'
import img2 from './images/second.png'
import img3 from './images/third.png'

const Review = () => {

    const ty = (id) =>{  
      document.getElementById(id).parentElement.classList.toggle('active')
      document.getElementById(id).parentElement.children[0].children[1].classList.toggle('active')
    }

  const HandleEnter = (id) =>{
               document.querySelectorAll(`.${id}`).forEach((element)=>{
               element.classList.add("active")})
  }  
  
  const HandleLeave = (id) =>{
      document.querySelectorAll(`.${id}`).forEach((element)=>{
      element.classList.remove("active")})
  }

  return (
    <DIV id='review'>
          
       <h1>Clients' reviews</h1> 

       <div className="reviews">
         <div className="review">
            <div className="front">
               <div className="separate">
               <div className='oc'><span className="custom">Karman Ventures</span></div>
               <div className="service">
                 <span >Service:</span>
                 <div className="tags"> 
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')}>INVESTOR DECK</h4>
                        <div className='same nc01'onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')} >
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')} >SALES DECK</h4>
                        <div className='same nc01' onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')}>
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                 </div>
              </div>     
              <div className="info">
               <span>William Barnes</span>
               <div className="dis">
                  <img src={img1} alt="img" />
                  <p>
                    They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                  </p>
               </div>
              </div>
               </div>
              <span className='custom read read01' id='read01' onClick={()=>ty("read01")} >Read</span>
            </div>
         </div>
         <div className="review">
            <div className="front">
              <div className="separate">  
              <div className='oc' ><span className="custom">Planetly</span></div>
              <div className="service">
                 <span >Service:</span>
                 <div className="tags">
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')}>AGENCY</h4>
                        <div className='same nc01' onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')}>
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')}>BIG NEWS DECK</h4>
                        <div className='same nc01'  onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')}>
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                 </div>
              </div>     
              <div className="info">
               <span>Nina Walloch</span>
               <div className="dis">
                  <img src={img2} alt="img" />
                  <p>
                  Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.
                  </p>
               </div>
              </div>
              </div>
              <span className='custom read read02' id='read02' onClick={()=>ty('read02')} >Read</span>
            </div>
         </div>
         <div className="review">
         <div className="front">
              <div className="separate">
              <div className='oc' ><span className="custom">Workiz Easy</span></div>
             <div className="service">
                 <span >Service:</span>
                 <div className="tags">
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')}>COMPANY PRESENTATION</h4>
                        <div className='same nc01' onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')}>
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                   <div className='button01' >
                        <h4 className='same text01' onMouseEnter={()=>HandleEnter("nc01")} onMouseLeave={()=>HandleLeave('nc01')}>ONBOARDING PRESENTATION</h4>
                        <div className='same nc01' onMouseEnter={()=>HandleEnter("text01")} onMouseLeave={()=>HandleLeave('text01')}>
                          <MdArrowDownward/>
                          <div className="dot"></div>
                        </div>
                   </div>
                 </div>
              </div>     
              <div className="info">
               <span>Tomer Levy</span>
               <div className="dis">
                  <img src={img3} alt="img" />
                  <p>
                  OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.                  </p>
               </div>
              </div>
              </div>
             <span className='custom read read03' id='read03' onClick={()=>ty('read03')} >Read</span>
            </div>
         </div>
       </div>  

    </DIV>
  )
}

const DIV = styled.div`

   margin: 6vw 0 10vw 0;
   
   h1{
    padding:0 4vw;
   }

  .custom{
    display: inline-block;
    width: fit-content;
    text-align: center;
    position: relative;
  }

  .custom:hover{
    cursor: pointer;
  }

.review{
    border-top: 1px solid #4d4c4c;
    padding:0 4vw;
  }

  .review:first-child{
    margin-top: 3vw;
  }

  .review:last-child{
    border-bottom: 1px solid #4d4c4c;
  }

  .front{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-block: 20px;
    max-height: 18px;
    overflow: hidden;
    transition: max-height 2s ease;
  }

  .separate{
    display: flex;
    gap: 10vw;
  }

  .read{
    font-weight: 600;
  }

  .front.active .read{
    color: grey;
  }

  .button01{
      display: flex;
      align-items: center;
      gap: .3vw;
    }

    .button01 h4{
      border: 1px solid black;
      border-radius: 40px;
      padding: 10px 20px;
      font-weight: 600;
      height: fit-content;
    }

    .nc01{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      border-radius: 50%;
      padding: .5vw .5vw;
      transition: all .2s ease ;
      scale: 0;
    }

    .nc01 svg{
      transform: rotate(-130deg);
      scale: 1.2;
      margin-bottom: .1vw;
      margin-left: .1vw ;
    }

    .dot{
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(0);
      z-index: -1;
    }

    .button01:hover .nc01.active, .nc01:hover{
      scale: 1;
    }

    .same{
      font-weight: normal;
    }

    .button01:hover .same.active, .same:hover,.dot:hover{
      background: #272626;
      color: white;
      transform: scale(1);
      cursor: pointer;
    }

    p{
      width: 31vw;
      line-height: 22px;
    }

    .info img{
      width: 9vw;
      border-radius: 10px;
    }

    .info, .dis, .service, .tags{
      display: flex;
      flex-direction: column;
    }

    .info, .service{
      gap: 4vw; 
    }    

    .dis{
      gap: 2vw;
    }

    .service .tags{
      gap: 1vw;
    }

  .front.active{
    max-height: 30vw;
  }

  .service span{
    width: fit-content;
    color: #f1f1f1;
    transition: color 1s ease;
  }

  .service.active span{
    color: black;
    transition: color .2s ease;
  }

  .oc{
    width: 124px;
  }

  .service{
    width: 19vw;
  }

@media (max-width: 1440px){
  margin: 10vw 0 11vw 0;
}  

@media (max-width: 1276px) {
  .front.active{
    max-height: 40vw;
  }
}

@media (max-width: 1225px){

  .front.active{
    max-height: 40vw;
  }

}  

@media (max-width: 1030px) {

  .front.active{
    max-height: 42vw;
  }

  .separate{
    flex-direction: column;
    gap: 3vw;
  }

  .service{
    gap: 1.5vw;
    width: fit-content;
  }

  .service .tags{
    flex-direction: row;
    gap: 1vw;
  }

  .nc01{
    display: none;
  }

  .info{
    gap: 2vw;
  }

  .info img{
    width: 123px;
  }

  p{
    width: fit-content;
  }
}

@media (max-width: 999px){
  .front.active{
    max-height: 95vw;
  }
}

@media (max-width: 769px){

  margin-block: 12vw 13vw;

  .front.active{
    max-height: 150vw;
  }

  .separate{
    gap: 35px;
  }

  .service, .tags{
    gap: 15px;
  }

  .info img{
    width: 150px;
  }

  .info, .dis{
    gap: 20px;
  }

}

@media (max-width: 426px){

  margin-block: 17vw;

  h1{
      font-size: 31px;
    }

  .info img{
    width: 120px;
  }

  .button01 h4{
    padding: 2vw 4vw;
  }

}

@media (max-width: 379px) {

  h1{
    margin-bottom: 6vw;
  }

  .front.active{
    max-height: 200vw;
  }

  .button01 h4{
    font-size: 4vw;
  }

}


`

export default Review