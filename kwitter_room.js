var firebaseConfig = {
  apiKey: "AIzaSyCjSF3Pg--_OHF66dcNk21DCOr7J-iocv8",
  authDomain: "kwitter-social-web-app-f048d.firebaseapp.com",
  databaseURL: "https://kwitter-social-web-app-f048d-default-rtdb.firebaseio.com",
  projectId: "kwitter-social-web-app-f048d",
  storageBucket: "kwitter-social-web-app-f048d.appspot.com",
  messagingSenderId: "1017555186915",
  appId: "1:1017555186915:web:711a8398ebb111746241d6",
  measurementId: "G-53VTKBHTY5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}
