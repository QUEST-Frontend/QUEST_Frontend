export default function isObjEmpty(object){
    return object && Object.keys(object).length === 0 && object.constructor === Object;
}
