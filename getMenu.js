<script>
            var http = require("https");

    var url = "https://api.myjson.com/bins/17m944"

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        // console.log(JSON.stringify(fbResponse.Sheet1[5].Monday,null,2)console.log(JSON.stringify(fbResponse.Sheet1['Monday'],null,2)); // parse the json and get the value of key 'Monday' in this case); // parse the json and get the value of key 'Monday' in this case
        console.log("**********Monday****************");
        for(x in fbResponse.Sheet1)
        {
            console.log(JSON.stringify(fbResponse.Sheet1[x].Monday)); // Print Menu fro Monday 
        }
        console.log("**********Tuesday****************");
        for(x in fbResponse.Sheet1)
        {
            console.log(JSON.stringify(fbResponse.Sheet1[x].Tuesday)); // Print Menu fro Tuesday 
        }
        console.log("**********Wednesday****************");
        for(x in fbResponse.Sheet1)
        {
            console.log(JSON.stringify(fbResponse.Sheet1[x].Wednesday)); // Print Menu fro Monday 
        }
        console.log("**********Thursday****************");
        for(x in fbResponse.Sheet1)
        {
            console.log(JSON.stringify(fbResponse.Sheet1[x].Thursday)); // Print Menu fro Monday 
        }
        console.log("**********Friday****************");
        for(x in fbResponse.Sheet1)
        {
            console.log(JSON.stringify(fbResponse.Sheet1[x].Friday)); // Print Menu fro Monday 
        }
        // console.log(fbResponse.keys().length);
        // console.log("Got a response: ", JSON.stringify(fbResponse, null, 2));
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
    </script>
 