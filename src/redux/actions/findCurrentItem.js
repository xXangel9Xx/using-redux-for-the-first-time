export const type = "findCurrentItem"

const findCurrentItem = (id) =>{
    return {
        type:type, //tambien puedes omitir y poner solo type ECMASCRIPT6
        payload:id
    };
}
export default findCurrentItem