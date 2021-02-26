import React,{useState,useEffect} from 'react';
import './css/index.css'
import Search from '../../assets/search.png'
const Index = (props) =>{
    useEffect(()=>{
        console.log(props.suggestions)
    },[props.suggestions])
    function searchFuntion(e){props.findSuggestions(e.target.value)};
    return( 
        <div className="container-autocomplete">
            <form action="" className="form">
                <button type="submit" className="button"><img src={Search} alt="" className="image-search"/></button>
                <input type="text" placeholder="Search" className="search-input" onChange={(e)=> searchFuntion(e)}/>
            </form>
        </div>
    )
}
export default Index