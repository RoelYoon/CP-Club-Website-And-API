const {spawn} = require("child_process");
const path = require("path");
const actions = new Set(["download","get_tier","get_ac_rating","get_exp","get_rank","get_rival_amount"]);
module.exports = {apiCall : async (req,res)=>{
    if(actions.has(req.params["action"])){
        try{
            const scraper = spawn("python3",[path.join(__dirname,"/baekjoonScraper/solvedacScraper.py"), req.params["action"], req.params["user_name"]===null?req.params["url"]:req.params["user_name"], req.params["file_name"]===null?"":req.params["file_name"]]);
            scraper.stdout.on('data', (data) => {
                res.send(data.toString()).status(200);
            })
            if(!res.headerSent){throw new Error("No scrapped data");}
        }catch(e){
            console.log(e);
            res.send("<h1>500</h1><p>Scraping failed or resource does not exist</p>").status(500);
        }
    }else{
        res.send("<h1>404 boiii</h1>").status(404);
    }
}}