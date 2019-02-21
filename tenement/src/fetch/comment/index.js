import { post } from '../post'

export function submitCommentData(data){
    let result = post(`/api/comment`,data)
    return result;
}