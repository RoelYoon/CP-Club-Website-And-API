const testCall = async () => {
    const response = await fetch("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg");
    const myJson = await response.json();
    return myJson;
}
module.exports.testCall=testCall; 