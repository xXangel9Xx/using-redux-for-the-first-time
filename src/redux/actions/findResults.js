export const type = "findResults"

const findResults = (text) =>{
    return {
        type:type, //tambien puedes omitir y poner solo type ECMASCRIPT6
        payload:text
    };
}
export default findResults