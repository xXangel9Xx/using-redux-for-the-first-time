import React,{useState,useEffect} from 'react';
import './css/index.css'
import Autocomplete from '../autocomplete/index'
import UserImage from '../../assets/user.jpeg'
import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
const AppBar = (props) =>{
    /*useEffect(()=>{
        props.findSuggestions('React')
        console.log(props.suggestions)
    },[])
    useEffect(()=>{
        console.log(props.suggestions)
    },[props.suggestions])
    */
    return (
        <div className="container-bar">
            <div className="information">
                <p className="text">xXangelXx</p>
                <Autocomplete
                    findSuggestions={props.findSuggestions}
                    suggestions={props.suggestions}
                />
                <img src={UserImage} alt="" className="image"/>
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) =>{
    return {
        suggestions:    state.suggestions
    }
}
const mapDispatchToProps = { 
    findSuggestions,
   // findResults
}
export default connect(mapStateToProps,mapDispatchToProps)(AppBar)
//withRouter(connect(mapStateToProps)(AppBar)); withRouter es un componente de orden 
//superior que pasará las rutas más cercanas match , 
//actual location y history apoyos al componente envuelto cada vez que se procesa.