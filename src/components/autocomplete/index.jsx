import React,{useState,useEffect} from 'react';
import './css/index.css'
import Search from '../../assets/search.png'
const Index = () =>{
    return( 
        <div className="container-autocomplete">
            <form action="" className="form">
                <button type="submit" className="button"><img src={Search} alt="" className="image-search"/></button>
                <input type="text" placeholder="Search" className="search-input"/>
            </form>
        </div>
    )
}
export default Index