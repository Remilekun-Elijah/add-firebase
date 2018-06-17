  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNwnMdeccmh1qzJorlhNloLCrcCMSRYJ4",
    authDomain: "pwafire-firebase.firebaseapp.com",
    databaseURL: "https://pwafire-firebase.firebaseio.com",
    projectId: "pwafire-firebase",
    storageBucket: "pwafire-firebase.appspot.com",
    messagingSenderId: "656289915117"
  };
  firebase.initializeApp(config);
  // get a reference to the row of our database called "app-content"
  var meetupRef = firebase.database().ref('app-content').orderByKey();
  meetupRef.once('value')
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            // childData will be the actual contents of the child
            var childData = childSnapshot.val();
            // retrieve data (content) from firebase realtime database
            var app_name = childSnapshot.val().app_name;
            var app_desc = childSnapshot.val().app_desc;
            var btn_1 = childSnapshot.val().btn_1;
            var recent_work_title = childSnapshot.val().recent_work_title;
            var work_title_1 = childSnapshot.val().work_title_1;
            var work_desc_1 = childSnapshot.val().work_desc_1;
            var work_title_2 = childSnapshot.val().work_title_2;
            var work_desc_2 = childSnapshot.val().work_desc_2;
            var btn_2 = childSnapshot.val().btn_2;
            // create a javaScript object for the HTML element that has id="app_name" 
            document.getElementById('app_name').innerHTML = app_name;
            // create a javaScript object for the HTML element that has id="app_desc"
            document.getElementById('app_desc').innerHTML = app_desc;
            // create a javaScript object for the HTML element that has id="btn_1"
            document.getElementById('btn_1').innerHTML = btn_1;
            // create a javaScript object for the HTML element that has id="recent_work_title"
            document.getElementById('recent_work_title').innerHTML = recent_work_title;
            // create a javaScript object for the HTML element that has id="work_title_1"
            document.getElementById('work_title_1').innerHTML = work_title_1;
            // create a javaScript object for the HTML element that has id="work_desc_1"
            document.getElementById('work_desc_1').innerHTML = work_desc_1;
            // create a javaScript object for the HTML element that has id="work_title_2"
            document.getElementById('work_title_2').innerHTML = work_title_2;
            // create a javaScript object for the HTML element that has id="work_desc_2"
            document.getElementById('work_desc_2').innerHTML = work_desc_2;
            // create a javaScript object for the HTML element that has id="btn_2"
            document.getElementById('btn_2').innerHTML = btn_2;

        });
    });
  
    