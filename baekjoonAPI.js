module.exports = {apiCall : async (req,res)=>{
    const baseURL = req.baseUrL+'/api/baekjoon/';
    console.log(req.url);
    console.log(baseURL);
    switch(req.url.substring(baseURL.length)){
        case 'get_status_message/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_rank/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_correct_qs/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_correct_q/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_unsolved_qs/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_unsolved_q/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_submit_time/':
            res.send('api implementation in development').status(200);
            break;
        default:
            res.send('404 boiii').status(404);
            break;
    }
}}