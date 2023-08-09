module.exports = {apiCall : async (req,res)=>{
    const baseURL = req.baseUrL+'/api/solvedac/';
    switch(req.url.substring(baseURL.length)){
        case 'download/':
            res.send('api implementation in development').status(200);
            break;
        case 'tierfinder/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_tier/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_ac_rating/':
            res.send('api implementation in development').status(200);
            break;
        case 'get_exp':
            res.send('api implementation in development').status(200);
            break;
        case 'get_rank':
            res.send('api implementation in development').status(200);
            break;
        case 'get_rival_amount':
            res.send('api implementation in development').status(200);
            break;
        default:
            res.send("404 boiii").status(404);
            break;
    }
}}