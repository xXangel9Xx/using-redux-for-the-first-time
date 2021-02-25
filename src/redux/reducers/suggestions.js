import { type as findSuggestionsType } from '../actions/findSuggestions';
import items from '../../data/data'
const defaultState=[];
function reducer(state = defaultState, {type,payload}){
    switch(type){
        case findSuggestionsType:{
            if(!payload){
                return [];
            }
            const regex = new RegExp(`^${payload}` , 'i');//A regular expression is a sequence of characters that forms a search pattern.
            return items.filter(n => regex.test(n.title));
        }
        default:
            return state
    }
}
export default reducer