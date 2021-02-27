import React,{useEffect} from 'react';
import './css/index.css'
import { connect } from 'react-redux'; 
const Index = (props) =>{
    useEffect(()=>{},[props.results])
    return (
        <>
        {props.results.title?
            <div className="container-results">
                <div className="container-image-title">
                    <img src={props.results.image} alt="image" className="image-description"/>
                    <p className="text-title">{props.results.title}</p>
                </div>

                <div className="description">
                    <p className="text-description">
                        {props.results.content}
                    </p>
                </div>

            </div>
        : 
        <div className="message-search">
            <p className="text-search-results">
                Por favor busque un framework front-end o libreria 
                front-end
            </p>
        </div>
        }
        </>
    );
};
//background: #F8F8F8;

const mapStateToProps = (state) =>{
    return {
        results:state.results
    }
}
//const mapDispatchToProps = {}
export default connect(mapStateToProps)(Index)
//export default Index
