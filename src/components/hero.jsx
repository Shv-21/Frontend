import React, { useState } from 'react'
import styled from 'styled-components'
import ochiimg from './images/ochiimg.png'
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {

const HandleEnter = (id) =>{
  document.getElementById(id).classList.add("active")
}  

const HandleLeave = (id) =>{
  document.getElementById(id).classList.remove("active")
}


  return (
    <Div id='home' >
       <div id='heading'>
       {['WE CREATE', "EYE OPENING", 'PRESENTATIONS'].map((item, index)=>{
        return <h1 key={index} className={"herotag"+index}>
            {item}
        </h1>
      })}
       </div>
       <img src={ochiimg} alt="" className="ochiimg"  />
       <hr />
       <div id='heroend'>
        <h3>For public and private companies</h3>
        <h3>From the first pitch to IPO</h3>
        <div id='stp' >
          <h3 className='same' id='text' onMouseEnter={()=>HandleEnter("nc")} onMouseLeave={()=>HandleLeave('nc')} >START THE PROJECT</h3>
          <div className='same' id='nc' onMouseEnter={()=>HandleEnter("text")} onMouseLeave={()=>HandleLeave("text")} >
            <MdArrowDownward/>
            <div className="dot"></div>
          </div>
        </div>
       </div>
       <div className="animation">
          <h3>Scroll down</h3>
       </div>
    </Div>
  )
}

const Div = styled.div`
    position: relative;
    margin-bottom: 2.4vw;

    #heading{
    margin: 6vw 3.5vw;
    }

    h1{
      font-size: 8vw;
      line-height: 6.5vw;
      letter-spacing: -.3vw;
      font-family: 'Barlow Condensed', sans-serif;
      color: #272626;
    }

    .herotag1{
      z-index: 5;
      background-color: #f1f1f1;
      width: fit-content;
      animation: slide 1s ease forwards;
    }

    @keyframes slide {

     100%{
         transform: translateX(10vw);
     }

    }

    .ochiimg{
      position: absolute;
      top: 18%;
      left: 4%;
      width: 9vw;
      z-index: -1;
    }

    hr{
      border: .5px solid #afaeae;
      border-bottom: none;
      margin-top: 10.5vw;
    }

    #heroend{
      display: flex;
      margin: 1.2vw 3.5vw;
      justify-content: space-between;
    }

    h3{
      font-family: "Roboto", sans-serif;
      font-weight: lighter;
      font-size: medium;
    }   

    h3:nth-child(2){
      margin-left: 11vw;
    }

    #stp{
      display: flex;
      align-items: center;
      gap: .3vw;
    }

    #stp h3{
      border: 1px solid black;
      border-radius: 40px;
      padding: .4vw .8vw;
      font-size: .95vw;
      height: fit-content;
    }

    #nc{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      border-radius: 50%;
      padding: .5vw .5vw;
      transition: all .2s ease ;
    }

    #nc svg{
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
      background: #272626;
      transform: scale(0);
      transition: all .3s ease ;
      z-index: -1;
    }

    .same.active, .same.active .dot, .same:hover, .same:hover .dot{
      background: #272626;
      transform: scale(1);
      color: #f1f1f1;
    }

    .animation{
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .animation h3{
      margin-top: 3vw;
      color: #c8c4c4;
      animation: anime 3s ease infinite forwards;
    }

    @keyframes anime {

      0%{
        transform: translateY(-5vw);
      }

      50%{
        transform: translateY(0);
      } 

      75%{
        transform: translateY(0);
      } 

      100%{
        transform: translateY(5vw);
      }
      
    }

    @media (max-width: 1440px){

      #stp h3{
        padding: .6vw 1.2vw;
      }

      h3{
        font-weight: 600;
      }

    }

    @media (max-width: 1301px) {
      #stp h3 {
       font-size: 1.1vw;
       padding: .6vw 1.2vw;
}
    }

    @media (max-width: 1213px){

      margin-bottom: 8vw;

      h1{
      font-size: 10vw;
      line-height: 8.5vw;
    }

      .animation{
        display: none;
      }

      .ochiimg{
        top: 22.5%;
        width: 11vw;
      }

    #stp h3 {
    font-size: 1.3vw;
    padding: .8vw 1.2vw;
}

    #stp #nc{
      display : none;
    }

    #heroend{
      margin: 2.5vw 4vw;
      align-items: center;
    }

    #text{

    }

         @keyframes slide {
      100%
      {
        transform: translateX(12vw);
      }
     }

    }

    @media (max-width: 1025px){

      h1{
      font-size: 10vw;
      line-height: 8.5vw;
    }

    .ochiimg{
      width: 11vw;
      top: 22.5%;
    }

    @keyframes slide {
      100%
      {
        transform: translateX(13vw);
      }
     }

    }

    @media (max-width: 769px){

      #heading{
      margin-top: 8vw;
      margin-bottom: 12vw;
     }

      #heroend{
      flex-direction: column;
      align-items: flex-start;
      gap: 4vw;
    }

      h1{
      font-size: 10vw;
      line-height: 8.5vw;
    }

      #stp h3{
       font-size: 2vw;
       padding: 1.2vw 2vw;
      }

      #heroend h3{
        margin: 0;
      }

      .ochiimg{
      width: 11vw;
      top: 16.5%;
    }

     @keyframes slide {
      100%
      {
        transform: translateX(12vw);
      }
     }

    }

    @media (max-width: 574px){
      #heading{
      margin-top: 8vw;
      margin-bottom: 32vw;
     }
     .ochiimg{
      top: 10.7%;
    }

     #heroend{
      gap: 8vw;

    }

    @keyframes slide {
      100%
      {
        transform: translateX(13vw);
      }
     }
    }

   @media (max-width: 426px) {

    #heroend{
      gap: 4vw;
    }

    h1{
      font-size: 13vw;
      line-height: 11vw;
    }

    .ochiimg{
      width: 14vw;
      top: 12.2%;
    }

    @keyframes slide {

     100%{
         transform: translateX(16vw);
     }
    }

    #heading{
      margin-top: 8vw;
      margin-bottom: 30vw;
     }

    #heroend{
      margin-block: 6vw;
      gap: 7vw;
      margin-bottom: 25vw;
    } 

    #heroend h3, #stp h3{
      font-weight: 600;
    }

    #stp h3{
      font-size: 3.5vw;
      padding: 2vw 3vw;
    }
   } 

`
export default Hero