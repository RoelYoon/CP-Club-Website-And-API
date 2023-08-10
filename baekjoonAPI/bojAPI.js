const {spawn} = require("child_process");
const path = require("path");
const actions = new Set(["get_status_message","get_rank","get_correct_qs","get_correct_q",
"get_unsolved_qs","get_unsolved_q","get_submit_time"]);
module.exports = {apiCall : async (req,res)=>{
    if(actions.has(req.params["action"])){
        try{
            const scraper = spawn("python3",[path.join(__dirname,"/baekjoonScraper/bojScraper.py"), req.params["action"], req.params["user_name"]]);
            scraper.stdout.on('data', (data) => {
                res.send(data.toString()).status(200);
            })
            //if(!res.headerSent){throw new Error("No scrapped data");}
        }catch(e){
            res.send("<h1>500</h1><p>Scraping failed or resource does not exist</p>").status(500);
        }
    }else{
        res.send("<h1>404 boiii</h1>").status(404);
    }
}}