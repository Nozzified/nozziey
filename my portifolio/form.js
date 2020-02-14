var firebaseConfig = {
    apiKey: "AIzaSyB2Mk3W8YZ-vTVPi5vGeKmrWavTA2tjvVM",
    authDomain: "my-website-d472c.firebaseapp.com",
    databaseURL: "https://my-website-d472c.firebaseio.com",
    projectId: "my-website-d472c",
    storageBucket: "my-website-d472c.appspot.com",
    messagingSenderId: "21179460043",
    appId: "1:21179460043:web:1c25a8aac470a38fbf6e4e",
    measurementId: "G-TGK45Q6EC9"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
  // Initialize Firebase
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}