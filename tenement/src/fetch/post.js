import 'whatwg-fetch'
import 'es6-promise'

//转成form-data形式
function obj2params(obj){
    let result = '';
    let item;
    for(item in obj){
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if(result){
        result = result.slice(1);
    }

    return result;
}

export function post(url, paramsObj){
    let result = fetch(url,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)     
    });

    return result;
}






