import React,{ Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function NewsCards({ heading,subheading}) {
  return (
    <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(210,208,157)",
          }}
        >
          <NewsCardContainer>
              <p className="heading">
                {heading}
                <p className="sub-head">{subheading} </p>
              </p>
            <img src={require('../../images/news.svg')} />
          </NewsCardContainer>
        </motion.div>
  );
}


const NewsCardContainer = styled.div`

    display:flex;
    background:black;
    flex-direction:row;
    color:white;
    width:25rem;
    gap:24px;
    padding:12px;
    font-family:'Poppins';
    font-size:small;
    background:white;
    border-radius:12px;
    border: 3px solid var(--border-yellow);
    color:var(--main-dark);
    justify-content:center;
    align-items:center;
    .heading{
        font-size:large;
        font-weight:600;
    }
    .sub-head{
        font-size:small;
        font-weight:400;
    }
    .details-btn{
        background:white;
        border:2px solid var(--main-dark);
        border-radius:6px;
        font-weight: 600;
        height:60%;
    }
    img{
      height:4rem;
    }
`;
