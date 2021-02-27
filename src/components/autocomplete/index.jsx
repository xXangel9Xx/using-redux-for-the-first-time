import React,{useEffect} from 'react';
import './css/index.css'
import Search from '../../assets/search.png'
const Index = (props) =>{
    useEffect(()=>{},[props.suggestions])
    useEffect(()=>{},[props.currentItem])
    function functResults(e){
        e.preventDefault()
        props.findResults(props.currentItem)
    }
    function select(e,suggestion){
        document.getElementById('input').value = suggestion.title
        props.findCurrentItem(suggestion.id)
        props.findSuggestions('')
        props.findResults(suggestion)        
    }
    function searchFuntionSuggestions(e){props.findSuggestions(e.target.value)};
    return( 
        <div className="container-autocomplete">
            <form className="form">
                <button type="submit" className="button"
                    onClick={(e)=>functResults(e)}
                >
                    <img src={Search} alt="" className="image-search"/>
                </button>

                <input  id="input" 
                        type="text" 
                        placeholder="Search" 
                        className="search-input" 
                        onChange={(e)=> searchFuntionSuggestions(e)
                        }/>
            </form>
            {props.suggestions.length >= 0 && props.suggestions.map((suggestion,i)=>
                <p key={i} className="suggestion" onClick={(e)=>select(e,suggestion)}>{suggestion.title}</p>
            )
            }
        </div>
    )
}
export default Index