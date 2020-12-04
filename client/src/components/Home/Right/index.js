import React,{ Component } from 'react';
import styled from 'styled-components';
import Card from '../../Card/index';
import logo from '../../../images/logo.svg';
import { app } from '../../../config/firebase';

class Right extends Component {
    constructor(){
        super()

        this.database = app.database().ref().child('tasks').child('user');
        this.state = {
           tasks:{
            "first":{
                "task_count":0,
                "task_id":1,
                "task_name":"sleep"
            },
            "second":{
                "task_count":0,
                "task_id":2,
                "task_name":"reading"
            },
            "third":{
                "task_count":0,
                "task_id":3,
                "task_name":"meditation"
            },
            "fourth":{
                "task_count":0,
                "task_id":4,
                "task_name":"workout"
            },
           },"user_id":1011
        }
    }
    componentDidMount(){
        this.database.on('value',snap => {
            this.setState({
                "tasks": snap.child('tasks').val(),
                "user_id":snap.child('user_id').val()
            });
        });
    }
    render(){
        return(
            <RightContainer>
                <img src={logo} className="prod-logo"/>
                <Card user_id={this.state.user_id} id={this.state.tasks.first.task_id} name={this.state.tasks.first.task_name} count={this.state.tasks.first.task_count} />
                <Card user_id={this.state.user_id} id={this.state.tasks.second.task_id} name={this.state.tasks.second.task_name} count={this.state.tasks.second.task_count} />
                <Card user_id={this.state.user_id} id={this.state.tasks.third.task_id} name={this.state.tasks.third.task_name} count={this.state.tasks.third.task_count} />
                <Card user_id={this.state.user_id} id={this.state.tasks.fourth.task_id} name={this.state.tasks.fourth.task_name} count={this.state.tasks.fourth.task_count} />
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
    background:white;
    justify-content:center;
    align-content:center;
    text-align:center;
    border-radius: 24px;
    .prod-logo{
        margin:0.5rem;
        align-self:center;
        height:10rem;
        // width:10rem;
    }

`;