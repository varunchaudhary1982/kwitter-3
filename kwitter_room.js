
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUz5CLq_6aqxBvcGr0yDf0ikXh1rpe56Q",
    authDomain: "gorvi93-5d7fe.firebaseapp.com",
    databaseURL: "https://gorvi93-5d7fe-default-rtdb.firebaseio.com",
    projectId: "gorvi93-5d7fe",
    storageBucket: "gorvi93-5d7fe.appspot.com",
    messagingSenderId: "488174541706",
    appId: "1:488174541706:web:8b1f015301fdbe57a40673",
    measurementId: "G-5PRNFFL6G2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
console.log("Room name-" + Room_names);
row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> </hr>";
    
    });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function addRoom(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
