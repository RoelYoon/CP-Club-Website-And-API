const {spawn} = require("child_process");
const path = require("path");
const actions = new Set(["get_question","get_input","get_output","get_sample_input","get_sample_output","get_correct_rate",
"get_time_limit","get_memory_limit","get_random_question"]);
module.exports = {apiCall : async (req,res)=>{
    if(actions.has(req.params["action"])){
        const scraper = spawn("python3",[path.join(__dirname,"/baekjoonScraper/problemScraper.py"), req.params["action"], req.params["user_name"]==null?"":req.params["user_name"]]);
        let scrapedData = "";
        scraper.stdout.on('data', (data) => {
            scrapedData+=data.toString();
        })
        scraper.on("close",
        ()=>{
                try{
                    if(scrapedData!=""){
                        res.send(scrapedData).status(200);
                    }else{
                        throw new Error("No scrapped data");
                    }
                }catch(e){
                    res.send("<h1>500</h1><p>Scraping failed or resource does not exist</p>").status(500);
                }
            }
        )
    }else{
        res.send("<h1>404 boiii</h1>").status(404);
    }
}}