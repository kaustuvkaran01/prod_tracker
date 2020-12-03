import React,{ Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

class Boxes extends Component {
  render(){
      return (
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(210,208,157)",
          }}
        >
          <BoxContainer>
            <div style={{ width: "7.5rem" }}>
              <p className="heading">
                Heading
                <p className="sub-head">Subheading Subheading</p>
              </p>
            </div>
            <button className="details-btn">Details</button>
          </BoxContainer>
        </motion.div>
      );}
}
export default Boxes;

const BoxContainer = styled.div`

    display:flex;
    background:black;
    flex-direction:row;
    color:white;
    min-width:45%;
    gap:24px;
    font-family:'Poppins';
    font-size:small;
    background:white;
    border-radius:6px;
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
    &:hover{
        border:1px solid var(--border-yellow);
        background:var(--light-blue);
        .details-btn{
            background:var(--dark-blue);
            color: white;
        }
    }
    .details-btn{
        background:white;
        border:2px solid var(--main-dark);
        border-radius:6px;
        font-weight: 600;
        height:60%;
    }
`;
