const base = "/api/baekjoon/"
module.exports = {apiCall : async (req,res)=>{
    console.log(req.url.substring(base.length));
    switch(req.url.substring(base.length)){
        case 'get_status_message':
            res.send('api implementation in development').status(200);
            break;
        case 'get_rank':
            res.send('api implementation in development').status(200);
            break;
        case 'get_correct_qs':
            res.send('api implementation in development').status(200);
            break;
        case 'get_correct_q':
            res.send('api implementation in development').status(200);
            break;
        case 'get_unsolved_qs':
            res.send('api implementation in development').status(200);
            break;
        case 'get_unsolved_q':
            res.send('api implementation in development').status(200);
            break;
        case 'get_submit_time':
            res.send('api implementation in development').status(200);
            break;
        default:
            res.send('404 boiii').status(404);
            break;
    }
}}