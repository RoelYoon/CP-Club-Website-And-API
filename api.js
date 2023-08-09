const testCall = async () => {
    const response = await fetch("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg");
    const myJson = await response.json();
    return myJson;
}
const call = () => {
const http = require("http");
const req = http.request("http://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql/",(res)=>{
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
})
req.end();}
module.exports.testCall=testCall; 
module.exports.call=call; 
              