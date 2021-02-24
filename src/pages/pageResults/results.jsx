import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux';
import Index from '../../components/results/index' 
const Results = () =>{
    return (
        <div className="container-page-results">
            <Index/>
        </div>
    )
}

const mapStateToProps = ( state ) =>{
    return {
        suggestions: state.suggestions
    }
};/*
//////////////////////ESTO////////////////////
const wrapper = connect(mapStateToProps)
const component = wrapper(Results); //wrapper tiene que saber que componente va a modifical
export default component 
/////////////////////Y esto//////////////////
export default connect(mapStateToProps)(Results)
/////////////////////Es igual////////////////
*/
export default connect(mapStateToProps)(Results)