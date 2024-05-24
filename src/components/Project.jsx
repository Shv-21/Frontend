import React from 'react'
import styled from 'styled-components'

const Project = () => {
  return (
    <Div id='project'>
        
        <h1>Featured projects</h1>
         <hr/>

       <div className="project">
        <div className="box01">
        <span className='heading'  ><div className="dot"></div>FYDE</span>
          <div className="show">

         <div className='th' >
          {
            "FYDE".split('').map((item, index) => <span key={index} className='title' >{item}</span> )
          }
         </div>
          <div className="display">
            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt="" />
          </div>
          </div>
        </div>
        <div className="box02">
        <span className='heading' ><div className="dot"></div>VISE</span>
          <div className="show">

         <div className='th' >
          {
            "VISE".split('').map((item, index) => <span key={index} className='title' >{item}</span> )
          }
         </div>
          <div className="display">
            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          </div>
        </div>
       </div>   

    </Div>
  )
}

const Div = styled.div`

  .project{
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    padding:0 4vw;
    margin-bottom: 2vw;
  }

  h1{
    padding:0 4vw;
    font-weight: normal;
    font-size: 3.5vw;
    margin: 6vw 0 2vw 0;
  }

  img ,.box01, .box02{
    width: 100%;
  }

  .heading{
    display: flex;
    align-items: center;
    gap: .5vw;
    margin: 4vw 0 2vw 0;
  }

  .box01, .box02{
    position: relative;
  }

  .display{
    overflow: hidden;
    transform: scale(1);
    transform-origin: center;
    transition:transform  1s ease;
    border-radius: 15px;
  }

  .display:hover{
   transform: scale(.95);
  }

  .dot{
    content: "";
    width: .7vw;
    height: .7vw;
    background: black;
    border-radius: 50%;
  }

  img{
    transition: all 1s ease;
  }

  img:hover{
    scale: 1.1;
  }

  .th{
    position: absolute;
    overflow: hidden;
    height: fit-content;
    width: max-content;
    z-index: 100;
    top: 50%;
  }

  .box01 .show .th{
    left: 74%;
  }

  .box02 .show .th{
    left: -23%;
  }

  .title{
    display: inline-block;
    height: fit-content;
    font-family: "Roboto", sans-serif;
    font-size: 6vw;
    font-weight: bold;
    color: #090909;
    background: white;
    padding: 0 1vw;
    transform: translateY(100%);
    transform-origin: bottom;
    transition: transform .2s ease;
  }

  .title:nth-child(2){
    transition-delay: .1s;
  }

  .title:nth-child(3){
    transition-delay: .15s;
  }

  .title:nth-child(4){
    transition-delay: .17s;
  }

  .show:hover .title , .show:hover .title{
    transform: translateY(0%);
  }

  @media (max-width: 769px){

    h1{
      font-size: 40px;
    }

    .project{
      flex-direction: column;
    }

    .heading{
      gap: 2vw;
    }    

    .dot{
      width: 10px;
      height: 10px;
    }

    .box01 .show .th, .box02 .show .th{
      top: 47%;
      left: 30%;
    }

    .title{
      font-size: 12vw;
    }

  }

  @media (max-width: 426px){

    h1{
      font-size: 31px;
    }

    .heading{
      gap: 2vw;
    }
    
    .dot{
      width: 8px;
      height: 8px;
    }

    .box01 .show .th, .box02 .show .th{
      top: 47%;
      left: 30%;
    }

    .title{
      font-size: 12vw;
    }


  }

`

export default Project