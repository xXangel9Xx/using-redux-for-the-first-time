export const type = "findSuggestions"

const findSuggestions = (text) =>{
    return {
        type:type, //tambien puedes omitir y poner solo type ECMASCRIPT6
        payload:text
    };
}
export default findSuggestions