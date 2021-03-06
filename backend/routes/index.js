var express = require('express');
var con = require("../databaseHandler");
var router = express.Router();

/* GET home page. */
router.get("/",(req,res)=>{
  res.end("Node.js Working!");
})

// PREPAID PLANS LOAD
router.post('/planpost',(req,res)=>{
  var {calls, data, amt, validity} = req.body;
  con.query("INSERT INTO prepaid (amt,calls,data,validity) VALUES ('"+amt+"','"+calls+"','"+data+"','"+validity+"')",(err,data)=>{
    if(err) throw err
    else{
      console.log("Data Inserted!!" + data);
      res.redirect("/admin-dashboard");
    }
  }); 
});

router.get('/prepaid/plans',(req,res)=>{
  con.query("SELECT * FROM prepaid",(err,data)=>{
    if (err) {throw err};
    res.send(data);
  })
});

// POSTPAID PLANS LOAD
router.post('/postplanpost',(req,res)=>{
  var {calls, data, amt, member, validity} = req.body;
  con.query("INSERT INTO postpaid (amt,calls,data,member,validity) VALUES ('"+amt+"','"+calls+"','"+data+"','"+member+"','"+validity+"')",(err,data)=>{
    if(err) throw err
    else{
      console.log("Data Inserted!!" + data);
      res.end();
    }
  }); 
});
router.get('/postpaid/plans',(req,res)=>{
  con.query("SELECT * FROM postpaid",(err,data)=>{
    if (err) {throw err};
    res.send(data);
  })
});

// NEW PREPAID SIM LOAD
router.post('/newprepaidrequest',(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  console.log(name, service);
  con.query("INSERT INTO newprepaid (service, name, email, dob, gender, address) VALUES ('"+service+"','"+name+"','"+email+"','"+dob+"','"+gender+"','"+address+"')",(err,data)=>{
    if(err) throw err
    else{
      console.log("Data Inserted!!" + data);
      res.end();
    }
  }); 
});

// NEW POSTPAID SIM LOAD
router.post('/newpostpaidrequest',(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  console.log(name, service);
  con.query("INSERT INTO newprepaid (service, name, email, dob, gender, address) VALUES ('"+service+"','"+name+"','"+email+"','"+dob+"','"+gender+"','"+address+"')",(err,data)=>{
    if(err) throw err
    else{
      console.log("Data Inserted!!" + data);
      res.end();
    }
  }); 
});

// SHOW CONNECTION REQUEST IN ADMIN PANEL
router.get('/admin-dashboard',(req,res)=>{
  con.query("SELECT * FROM newprepaid",(err,data)=>{
    if (err) {throw err};
    res.send(data);
  })
});

module.exports = router;
