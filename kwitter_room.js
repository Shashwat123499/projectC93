
var firebaseConfig = {
  apiKey: "AIzaSyAcMTd2EUQZGSphzirDziPSeajQ4l5Y40I",
  authDomain: "kwitter-practice-e23e6.firebaseapp.com",
  databaseURL: "https://kwitter-practice-e23e6-default-rtdb.firebaseio.com",
  projectId: "kwitter-practice-e23e6",
  storageBucket: "kwitter-practice-e23e6.appspot.com",
  messagingSenderId: "332745949992",
  appId: "1:332745949992:web:43cab6bba3e98e2955861d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name_label").innerHTML="Welcome " + user_name + "!";

function addRoom() {
  room_name=document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update ({
      purpose: "Adding Room Name"
 
  });
  
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

 