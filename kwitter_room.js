
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBLyeBkN4bsMFufhNL91UnWNABUoZeug1o",
      authDomain: "kwitter-8e374.firebaseapp.com",
      databaseURL: "https://kwitter-8e374-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e374",
      storageBucket: "kwitter-8e374.appspot.com",
      messagingSenderId: "589123846070",
      appId: "1:589123846070:web:13ddf82b29d81413d48b17"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"  + name + "<img class ='user trick' src='tick.png'></h4>";
      message_with_tag  = "<h4 classes='message_4'>" + message + "</h4>";
      like_button = "<button class = 'glyphyicon-thumbs-up'>Like:"+ like + "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='gliyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button +span_with_tag;
      document.getElementById("ouput").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").nodeValue;

  firebaseConfig.database().ref("/").child(room_name).update({
    purpose :" adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
Room_nammes = childKey;
//Start code
console.log("Room Name - " + Room_name);
row = "<div class='room_name' if=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_name + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location ="kwitter_page.html";
}
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({

    like : update_likes
  });
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}

});};}
getData();


