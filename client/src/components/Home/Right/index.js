import React,{ Component } from 'react';
import styled from 'styled-components';
import Card from '../../Card/index';
import logo from '../../../images/logo.svg';

class Right extends Component {
    render(){
        return(
            <RightContainer>
                <img src={logo} className="prod-logo"/>
                <Card />
                <Card />
                <Card />
                <Card />
            </RightContainer>
        );
    }
}

export default Right;

const RightContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    min-width:50%;
    height:80vh;
    background:var(--border-yellow);
    justify-content:center;
    align-content:center;
    text-align:center;
    .prod-logo{
        margin:0.5rem;
        align-self:center;
        height:10rem;
        // width:10rem;
    }

`;