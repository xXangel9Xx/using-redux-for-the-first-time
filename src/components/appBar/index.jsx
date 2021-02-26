import React,{useState,useEffect} from 'react';
import './css/index.css'
import Autocomplete from '../autocomplete/index'
import UserImage from '../../assets/user.jpeg'
import findSuggestions from '../../redux/actions/findSuggestions'
import findCurrentItem from '../../redux/actions/findCurrentItem'
import findResults from '../../redux/actions/findResults'
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';

const AppBar = (props) =>{
    return (
        <div className="container-bar">
            <div className="information">
                <p className="text">xXangelXx</p>
                <Autocomplete
                    findSuggestions={props.findSuggestions}
                    suggestions={props.suggestions}
                    findCurrentItem={props.findCurrentItem}
                    currentItem={props.currentItem}
                    findResults={props.findResults}
                    results={props.results}
                />
                <img src={UserImage} alt="" className="image"/>
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) =>{
    return {
        suggestions: state.suggestions,
        currentItem: state.currentItem,
        results: state.results
    }
}
const mapDispatchToProps = { 
    findSuggestions,
    findCurrentItem,
    findResults
}
export default connect(mapStateToProps,mapDispatchToProps)(AppBar)
//withRouter(connect(mapStateToProps)(AppBar)); withRouter es un componente de orden 
//superior que pasará las rutas más cercanas match , 
//actual location y history apoyos al componente envuelto cada vez que se procesa.