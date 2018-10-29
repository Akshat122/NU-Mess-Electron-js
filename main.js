const electron = require('electron');
const url = require('url');
const path = require('path');
var http = require('http');

const {app, BrowserWindow, ipcRenderer, ipcMain} = electron;

let mainWindow;

require('dns').resolve('www.google.com', function(err) {
    if (err) {
       console.log("No connection");
       app.exit();
    } else {
       console.log("Internet Connection working");
    }
  });

app.on('ready',()=>{
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,'mainwindow.html'),
        protocol : 'file',
        slashes : true
    }));
});


var http = require("https");

var url_json = "https://harshitbudhraja.github.io/data/DH.json"

http.get(url_json, function(res){
var body = '';

res.on('data', function(chunk){
    body += chunk;
});

res.on('end', function(){
    var fbResponse = JSON.parse(body);
    //get the day
    var d = new Date();
    var n = d.getDay()
    var day="";
    
    // console.log(day);
    // console.log(JSON.stringify(fbResponse.Sheet1[5].Monday,null,2)console.log(JSON.stringify(fbResponse.Sheet1['Monday'],null,2)); // parse the json and get the value of key 'Monday' in this case); // parse the json and get the value of key 'Monday' in this case
    // console.log("**********Monday****************");
    // var Monday= [];
    var res = "";
    
    for(x in fbResponse.Sheet1)
    {
        // console.log(JSON.stringify(fbResponse.Sheet1[x].Monday)); // Print Menu fro Monday 
        // Monday.push(JSON.stringify(fbResponse.Sheet1[x].Monday));
        // ipcRenderer.send('Item:Monday',Monday);
      
      
      
      
      
        
        if(n==0)
        {
            res = fbResponse.Sheet1[x].Sunday;
        }
    else if(n==1)
        {
            res = fbResponse.Sheet1[x].Monday;
        }
    else if(n==2)
        {
            res = fbResponse.Sheet1[x].Tuesday;
        }
    else if(n==3)
        {
            res = fbResponse.Sheet1[x].Wednesday;
        }    
    else if(n==4)
        {
            res = fbResponse.Sheet1[x].Thursday;
        }
    else if(n==5)
        {
            res = fbResponse.Sheet1[x].Friday;
        }
    else if(n==6)
        {
            res = fbResponse.Sheet1[x].Saturday;
        }
        
        if(x>=0 && x<=5)
        {
            // console.log("Breakfast");
            mainWindow.webContents.send('Breakfast',res);
        }
        else if(x>5 && x<=12)
        {
            // console.log("Lunch");
            mainWindow.webContents.send('Lunch',res);
        }
        else if(x>12 && x<=14)
        {
            // console.log("Snacks");
            mainWindow.webContents.send('Snacks',res);
            
        }
        else
        {
            // console.log("Dinner");
            mainWindow.webContents.send('Dinner',res);
            
        }

    }
    // console.log("**********Tuesday****************");
    // for(x in fbResponse.Sheet1)
    // {
    //     // console.log(JSON.stringify(fbResponse.Sheet1[x].Tuesday)); // Print Menu fro Tuesday 
    // }
    // console.log("**********Wednesday****************");
    // for(x in fbResponse.Sheet1)
    // {
    //     // console.log(JSON.stringify(fbResponse.Sheet1[x].Wednesday)); // Print Menu fro Monday 
    // }
    // console.log("**********Thursday****************");
    // for(x in fbResponse.Sheet1)
    // {
    //     // console.log(JSON.stringify(fbResponse.Sheet1[x].Thursday)); // Print Menu fro Monday 
    // }
    // console.log("**********Friday****************");
    // for(x in fbResponse.Sheet1)
    // {
    //     // console.log(JSON.stringify(fbResponse.Sheet1[x].Friday)); // Print Menu fro Monday 
    // }
    // console.log(fbResponse.keys().length);
    // console.log("Got a response: ", JSON.stringify(fbResponse, null, 2));
});
}).on('error', function(e){
  console.log("Got an error: ", e);
  app.exit();
});

// ipcMain.on('Item:Monday', function(e,Monday){
//     console.log(Monday);
//     mainWindow.webContents.send('Item:Monday',Monday);
// });


ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

