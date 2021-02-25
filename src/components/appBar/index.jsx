import React,{useState,useEffect} from 'react';
import './css/index.css'
import Autocomplete from '../autocomplete/index'
import UserImage from '../../assets/user.jpeg'

const AppBar = () =>{
    return (
        <div className="container-bar">
            <div className="information">
                <p className="text">xXangelXx</p>
                <Autocomplete />
                <img src={UserImage} alt="" className="image"/>
            </div>
        </div>
    );
};
export default AppBar