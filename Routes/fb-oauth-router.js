const express=require("express")
require("dotenv").config()
const {passport2}=require("../Configs/fb-oauth")
const path=require("path")

const fboauthRouter=express.Router();

fboauthRouter.get("/",(req,res)=>{
    res.send("API base Facebook endpoint")
    
})
fboauthRouter.get("/fboauthlogin",(req,res)=>{
  res.writeHead(301, { Location: "https://qr-code-chimp.netlify.app/loggedin" });
  res.end(); 
})

fboauthRouter.get('/auth/facebook',
  passport2.authenticate('facebook'));
 

fboauthRouter.get('/auth/facebook/callback',
  passport2.authenticate('facebook', { failureRedirect: '/login',session:false}),
  
  function(req, res) {
    // Successful authentication, redirect home.
   console.log(req.user)
    res.redirect('/fboauth/fboauthlogin');
  });
  
  module.exports={
    fboauthRouter
  }