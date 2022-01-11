
const firebaseConfig = {
      apiKey: "AIzaSyAuoOzx3fi-X12E1Yps0_-3x3-8N4-hyXY",
      authDomain: "kwitterpractice-ab2d3.firebaseapp.com",
      databaseURL: "https://kwitterpractice-ab2d3-default-rtdb.firebaseio.com",
      projectId: "kwitterpractice-ab2d3",
      storageBucket: "kwitterpractice-ab2d3.appspot.com",
      messagingSenderId: "751669190153",
      appId: "1:751669190153:web:5f8d3df2491209b0cae2d8"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("roome_name");

    function send(){

msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";


    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
