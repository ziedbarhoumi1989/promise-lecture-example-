// var Promise = require("bluebird");
var q = require("q");
const fs = require("fs");
const path = require('path');

// v1
var createUser = function(name1,name2,callback){
    var userPath1 = path.join(__dirname, `user/${name1}.json`);
    var userPath2 = path.join(__dirname, `user/${name2}.json`);
    fs.writeFile(userPath1,JSON.stringify({id:1,name:name1}),(err,res)=>{
      
        if(err){callback(err,null)}
        else{

            fs.writeFile(userPath2,JSON.stringify({id:2,name:name2}),(err,res)=>{
      
                if(err){callback(err,null)}
                else{
                    var user = name1 + name2
                    callback(null,user)
                }
            })
           
        }
    })
}

// createUser("ahmed","walid",(err,res)=>{
//     if(err){console.log("error",err)}
//     else{
//         console.log("res",res)
//     }
// })


// v2 
createUser2 = function(name1){
    var userPath1 = path.join(__dirname, `user/${name1}.json`);
    return new Promise(function(resolve,reject){
        if(name1==="ahmed"){
            reject("Error name is ahmed")
        }else{

            fs.writeFile(userPath1,JSON.stringify({id:2,name:name1}),(err,res)=>{
                if(err){reject(err)}
                else{
                    resolve("the user has been created")
                }
            })

        }
       
    })
}

createUser2("walid")
.then((res)=>{
     
   return createUser2("ali")
}).then((res)=>{
        console.log(res)
})
.catch((err)=>{
    
})




