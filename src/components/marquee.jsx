import React from 'react'
import styled from 'styled-components'

const Marquee = () => {
  return (
    <DIV id='banner'>
      <hr />
      <div className="banner">
      <h1>WE ARE OCHI</h1>
      <h1>WE ARE OCHI</h1>
      <h1>WE ARE OCHI</h1>
      </div>
      <hr />
    </DIV>
  )
}

const DIV = styled.div`
   z-index: 100;

  .banner{
    white-space: nowrap;
    display: flex;
    align-items: center;
    background: #004D43;
    border-radius: 15px 15px 0 0;
  }

  h1{
    animation: motion 10s linear infinite;
    padding-inline: 3vw;
    font-size: 25vw;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
  }

  hr{
    border: 1px solid #4D837C;
   }

   hr:first-child{
     transform: translateY(6.5vw);
   }

   hr:last-child{
    transform: translateY(-3.5vw);
   }

  @keyframes motion {

    0%{
      transform: translateX(0);
    }

    100%{
      transform: translateX(-100%);
    }
    
  }

  @media (max-width: 769px) {

    h1{
      font-size: 30vw;
    }

    .banner{
      padding: 5vw 0; 
    }

    hr:first-child{
     transform: translateY(10vw);
    }

    hr:last-child{
     transform: translateY(-7vw);
    }

  }

  @media (max-width: 426px) {

    .banner{
      padding: 10vw 0; 
    }

    h1{
      font-size: 30vw;
    }

    hr:first-child{
     transform: translateY(15vw);
    }

    hr:last-child{
     transform: translateY(-11.5vw);
    }
  }
`

export default Marquee