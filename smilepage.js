var firebaseConfig = {
    apiKey: "AIzaSyB9nFQ5VLgEtefsmKz8rpHspAYdPa-yZCw",
    authDomain: "letschatwebapp-1a7f3.firebaseapp.com",
    databaseURL: "https://letschatwebapp-1a7f3-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-1a7f3",
    storageBucket: "letschatwebapp-1a7f3.appspot.com",
    messagingSenderId: "1059499397553",
    appId: "1:1059499397553:web:643ee406cb013b9f56ed90"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

var username = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");

function send(){
 msg = document.getElementById("msg").value;
 firebase.database().ref("/"+room_name).push({
       name:username,
       message:msg,
       likes:0
 });
 document.getElementById("msg").value = "";
}

function logout() {
    window.location = "index.html";
    localStorage.removeItem("username");
  }