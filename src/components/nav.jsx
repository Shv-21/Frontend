import styled from "styled-components"

const Nav = () => {

  const HandleClick = () =>{
        document.getElementById('om').classList.toggle('active')
        document.getElementById('main').classList.toggle('active')
        document.getElementById('root').classList.toggle('active')
  } 

  return (
    <Div id="main" className="main" >
      <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
				<path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
				<path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
				<path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
				<path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
			</svg>
     <div className="om" id="om" >
      <div className="MB" id="MB" onClick={()=>HandleClick("")} >
        <div className="FirstLine Line"></div>
        <div className="SecondLine Line"></div>
      </div>
         <div className="wrapper">
         <div className="menu">       
        {['Services', 'Our work', 'About us', 'Insights'].map((item, index)=>{
          return     <div key={index} class="button">
          <div class="button-wrapper">
            <div class="text">{item}</div>
            <span class="icon">
               {item}
            </span>
          </div>
       </div>
        })}
      </div>
      <div class="button cont">
          <div class="button-wrapper">
            <div class="text">Contact Us</div>
            <span class="icon">
               Contact Us
            </span>
          </div>
       </div>
         </div>
     </div>
    </Div>
  )

}

const Div = styled.div`

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2vw 3.5vw;
   width: 100%;
   z-index: 100;

   .wrapper{
    display: flex;
    align-items: center;
    gap: 18vw;
   }

   .MB{
    display: none;
    flex-direction: column;
    gap: 5px;
   }

   .Line{
    content: '';
    width: 2.5vw;
    border-bottom: 2px solid black;
    transition: all .5s ease;
   }

   .om.active .FirstLine{
    transform: rotate(-45deg) translateY(.2vw) translateX(-.22vw);
   }

   .om.active .SecondLine{
    transform: rotate(45deg) translateY(-.2vw) translateX(-.2vw);
   }

   .menu{
    display: flex;
    gap: .7vw;
    overflow: hidden;
   }

   .button {
    position: relative; 
    width: 5vw;
    height: 2vw;
    font-family: "Roboto", sans-serif;
  }

.cont{
  width: 6vw;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-wrapper,.text,.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #000;
}

.text {
  top: 0
}

.text,.icon {
  transition: top 0.5s;
}

.icon {
  color: #000;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:hover .text {
  top: -100%;
}

.button:hover .icon {
  top: 0;
}

   .button::after{
     position: absolute;
     bottom: -.05vw;
     display: flex;
     content: "";
     width: 98%;
     margin-top: .2vw;
     border: .01vw solid black;
     transform: scaleX(0);
     transition: transform .5s ease;
     transform-origin: right;
   }

   .button:hover, svg{
    cursor: pointer;
   }

  .button:hover::after{
     transform: scaleX(1);
     transform-origin: left;
  }

  .button:hover::content{
    animation: moving 2s ease;
    -webkit-tap-highlight-color: transparent;
  }


  @keyframes moving {
    
    0% {
      transform: translateY(-100%);
    }
  
    50%{
      transform: translateY(10%);
    }
  
    100%{
      transform: translateY(2%);
    }
  
  }

  @media (max-width: 1321px) {
    .cont, .button{
      width: 8vw;
    }
  }

  @media (max-width: 1024px){

    .wrapper, .menu{
      flex-direction: column;
    }

    .menu, .cont, .icon, .button::after{
      width: 100%;
    }

   .button:hover .text {
     top: unset;
    }

   .icon, .button::after{
    display: none;

   }

    .button{
      height: 9vw;
      width: 44vw;
    }

    .button::after{
      border-color: white;
    }

    .om .menu, .om .cont, .MB{
      display: flex;
    }

    .active .Line{
       border-color: #f1f1f1;
    }

    .menu{
      gap: 0vw;
    }

    .wrapper{
      position: absolute;
      align-items: flex-start;
      gap: 0vw;
      width: 100%;
      top: -100vw;
      border-top: 2px solid grey;
      left: 0;
      padding: 0 0 7.3vw 3vw;
      background: #212121;
      z-index: 1;
      transition: all  0.6s cubic-bezier(0, 0.55, 0.45, 1);
    }

      .om.active .wrapper{
        top: 10vw;
      padding-bottom: 0;
      height: 100vh;
    }

    .button-wrapper .text{
      font-weight: bold;
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      font-size: 8.5vw;
      letter-spacing: -.2vw;
    }

    .om .text{
      color: #212121;
      transition: color .5s ease;
      justify-content: flex-start;
      transition-delay: .7s;
    }

    .om.active .text{
      color: #f1f1f1;
    }

  }

  @media (max-width: 769px){

    padding-top: 3vw;

    .Line{
      width: 24px;
    }

    .om.active .FirstLine{
      transform: translate(0, 0) rotate(-45deg)
    }

    .om.active .SecondLine{
      transform: translate(0, -6.3px) rotate(45deg);
    }

    .om.active .wrapper{
      top: 15vw;
      padding: 3vw 0 20vw 4vw;
    }

  }

  @media (max-width: 708px) {
    .button{
      height: 14vw;
      width: 54vw;
    }

    .button-wrapper .text{
      font-size: 12vw
    }

    .om.active .wrapper{
      top: 17vw;
    }

  }

  @media (max-width: 580px) {
    .button{
      height: 15vw;
      width: 60vw;
    }

    .button-wrapper .text{
      font-size: 14vw
    }

    .om.active .wrapper{
      top: 18vw;
    }
  }

  @media (max-width: 426px){
    padding: 6vw 4vw;

    .om.active .wrapper{
      top: 29vw;
    }

    .button{
      height: 14vw;
      width: 54vw;
    }

    .button-wrapper .text{
      font-size: 12vw
    }

    .om.active .wrapper{
      padding: 3vw 0 0vw 4vw;
    }

  }

`
export default Nav