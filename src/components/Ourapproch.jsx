
import styled from 'styled-components'
import { MdArrowDownward } from "react-icons/md";
import image from './images/Couple.jpg'

const Ourapproch = () => {

  const HandleEnter = (id) =>{
    document.getElementById(id).classList.add("active")
  }  
  
  const HandleLeave = (id) =>{
    document.getElementById(id).classList.remove("active")
  }

  return (
    <Div id='approch'>
      <div className="passage">
      Ochi is a strategic partner for fast-growing tech businesses that need to
      <ul className="custom" > raise funds</ul>, 
      <ul className="custom">sell products</ul>, 
      <ul className="custom">explain complex ideas</ul>, and 
      <ul className="custom"> hire great people</ul>.
      </div>

      <div className="expect">
        <div className="box">
          <h4>What you can expect:</h4>
          <div className="mbox">
            <div className="box-1">
             <p>
               We create tailored presentations to help you persuade your colleagues, clients, 
               or investors. Whether it's live or digital, delivered for one or a hundred people
             </p>
             <p>
               We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
             </p>
            </div>
            <div className="box-2">
              <h4>S:</h4>
              <ul className="custom">Instagram</ul>
              <ul className="custom">Behance</ul>
              <ul className="custom">Facebook</ul>
              <ul className="custom">Linkedin</ul>
            </div>
          </div>
        </div>
      </div>

      <div className="approch">
        <div className="side-1">
          <h1>Our approach:</h1>
          <div id='button' onMouseEnter={()=>HandleEnter("side02")} onMouseLeave={()=>HandleLeave('side02')} >
            <h3 className='same' id='text' >READ MORE</h3>
            <div className='same' id='nc'>
              <div className="dot"><MdArrowDownward/></div>
            </div>
          </div>
        </div>
        <div className="side-2" id='side02'>
          <img id='img' src={image} alt="" />
        </div>
      </div>

    </Div>
  )
}

const Div = styled.div`

  border-radius: 15px 15px 0 0;
  background: #CDEA68;
  overflow: hidden;

  .passage{
    font-size: 3.5vw;
    padding: 6vw 8vw 4vw 4vw;
    line-height: 3.5vw; 
    border-bottom: 1px solid grey;
  }

  h4{
    font-weight: normal;
  }

  .box{
    padding: 1.5vw 14vw 8vw 4vw;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }

  img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transition: all 1s ease;
    transform-origin: center;
  }

  #side02.active img{
    scale: 1.2;
  }

  .side-2{
    overflow: hidden;
    border-radius: 10px;
    width: 46.5vw;
    height: 33.2vw;
    transition: all 1s ease;
    transform-origin: center;
    height: fit-content;
  }

  .box, .mbox, .box-1,
  .box-2, .approch{
    display: flex;
  }

  .approch{
    padding: 1vw 4vw 4vw 4vw;
    justify-content: space-between;
  }

  .box-1, .box-2{
    flex-direction: column;
  }

  .box-1{
    width: 19vw;
    gap: 2vw;
  }

  .box-2{
    align-items: flex-start;
    justify-content: flex-end;
    overflow: hidden;
    gap: .5vw;
  }

  .box-2 h4{
    padding-bottom: 1vw;
  }

  .box-1 p{  
   line-height: 1.7vw;
  }

  .mbox{
    gap: 10vw;
  }

    .custom{
      display: inline-block;
      position: relative;
    }

    .custom::after{
      position: absolute;
      content: '';
      width: 100%;
      bottom: 0;
      right: 0;
      border: 2px solid black;
    }

    .custom:hover::after{
      animation: moving .7s linear ;
      animation-iteration-count: 1;
    }

    .custom:hover{
      cursor: pointer;
    }

    @keyframes moving {
    50% {
      width: 0%;
    }

    100% {
      width: 100%;
      left: 0;
      right: unset;
    }
  }

  .passage .custom:first-child, .passage .custom:last-child{
    margin-left: 1vw;
  }

  .box-2 .custom::after{
    border: 1px solid black;
  }

  .side-1{
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }

  .side-1 h1{
    font-weight: normal;
    font-size: 3.5vw;
  }

  #button{
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    background: #272626;
    padding: 1vw 1vw 1vw 1.8vw;
    border-radius: 40px;
    color: white;
    gap: 3vw;
    transition: all 0.2s ease-in;
    overflow: hidden;
    z-index: 1;
  }

  #button h3{
    font-weight: bold;
  }

  #nc{
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
  }

  .dot{
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    height: .5vw;
    width: .52vw;
    border-radius: 50%;
    transition: all .3s ease;
  }

  #button:hover .dot{
    width: 100%;
    height: 100%;
  }

  #nc svg{
    transform:rotate(220deg);
    width: 1.8vw;
    height: 1.8vw;
    z-index: 100;
    display: none;
  }

  #button:hover svg {
    display: flex;
    color: black;
  }

#button:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: black;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

#button:hover:after {
  top: -45%;
  background-color: black;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

@media (max-width: 1025px){

  .passage{
    font-size: 4vw;
    line-height: 4.5vw;
    padding: 8vw 4vw;
  }

  .box-1 p{
    line-height: unset;
  }

  .box-2{
      gap: 1vw;
  }

  .side-1{
    gap: 2vw;
  }

  #button{
    padding: 15px 15px 15px 20px;
  }

  #button h3{
    font-size: large;
  }

  .dot{
    width: 10px;
    height: 10px;
  }

  #nc {
    width: 31px;
    height: 31px;
  }

  #nc svg{
    width: 19px;
    height: 19px;
  }

  .approch, .box{
    margin-top: 20px;
  }

}

@media (max-width: 769px) {

  .box, .mbox, .approch{
    flex-direction: column;
  }

  .passage{
    font-size: 4vw;
    line-height: 5vw;
    padding: 8vw 4vw;
  }

  .box{
    gap: 2vw;
  }

  .box-1 p{
    line-height: unset;
  }

  .box-1{
    width: fit-content;
  }

  .box-2{
      gap: 1vw;
  }

  .side-1 h1{
    font-size: 40px;
  }

  .approch{
     gap: 7vw;
  } 

  .approch, .box{
    margin-top: 3vw;
  }

  #button{
    padding: 15px 16px 15px 23px;
  }

  #button h3{
    font-size: large;
  }

  #nc{
    width: 31px;
    height: 31px;
  }

  #nc svg{
    width: 20px;
    height: 20px;
  }

  .side-1{
    gap: 4vw;
  }

  .side-2{
    width: 92vw;
  }

}

@media (max-width: 426px){
  .passage{
    font-size: 7vw;
    line-height: 8vw;
    padding: 8vw 4vw;
  }

  .box{
    gap: 4vw;
    margin-top: 4vw;
  }

  .box-2{
      gap: 2vw;
  }

  .approch{
     gap: 7vw;
     margin-block: 4vw;
  } 

  #button h3{
    font-size: large;
  }

  .side-1{
    gap: 4vw;
  }

  .side-1 h1{
    font-size: 31px;
  }

  .side-2{
    width: 92vw;
  }

}

`

export default Ourapproch