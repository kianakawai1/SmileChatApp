
//ADD YOUR FIREBASE LINKS HERE

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

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      someRoomName = childKey;
      //Start code
      console.log(someRoomName);
      row = "<div class='room_name' id=" + someRoomName + " onclick='redirectToRoomName(this.id)'>#" + someRoomName + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

username = localStorage.getItem("username");
document.getElementById("welcomeusername").innerHTML = "Welcome " + username + "!";

function addRoom() {
  room_name = document.getElementById("roomName").value;
  firebase.database().ref("/").child(room_name).update({
    roomname: "name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "smilepage.html"
}

function logout() {
  window.location = "index.html";
  localStorage.removeItem("username");
}

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "smilepage.html";
}
