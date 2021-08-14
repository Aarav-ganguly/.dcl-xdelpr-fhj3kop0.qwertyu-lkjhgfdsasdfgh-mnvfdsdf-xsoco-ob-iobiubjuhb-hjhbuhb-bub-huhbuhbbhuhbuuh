var firebaseConfig = {
    apiKey: "AIzaSyDQxqcK6sHohoVWzZcIXs_Be85i2EtZ8aw",
    authDomain: "kwitter-c7ae7.firebaseapp.com",
    databaseURL: "https://kwitter-c7ae7-default-rtdb.firebaseio.com",
    projectId: "kwitter-c7ae7",
    storageBucket: "kwitter-c7ae7.appspot.com",
    messagingSenderId: "479799520052",
    appId: "1:479799520052:web:43780f8599a1c9a3915361"
};

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("acount_name");
document.getElementById("welcome_username").innerHTML = "welcome " + username + "!!!!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //start code
                console.log(Room_names);
                row = "<div class= 'room_name' id =  " + Room_names + "onclick = 'redirect_To_roomname(this.id)' ># " + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;
                //end code
          });
    });
}
function redirect_To_roomname(name)
{
console.log(name);
localStorage.setItem("Room_name", name);

window.location = "kwitter_page.html";
}

getData();
