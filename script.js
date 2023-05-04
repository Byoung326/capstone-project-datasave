const firebaseConfig = {
    apiKey: "AIzaSyAO9cVt49y-sRFWgwqBBTZMc7n9Lj5L_9k",
    authDomain: "capstoneproject-d451d.firebaseapp.com",
    projectId: "capstoneproject-d451d",
    storageBucket: "capstoneproject-d451d.appspot.com",
    messagingSenderId: "1002992067041",
    appId: "1:1002992067041:web:759dc5a507a1644a7772a0",
    measurementId: "G-MZ08LW66KB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(firebase)

  function save(){
    totalDeposit = document.getElementById("total_deposit").value;

    firebase.database().ref("/").child(totalDeposit).update({
        deposit : 175.00
    });
  }

  function save(){
    totalWithdraw = document.getElementById("total_withdraw").value;

    firebase.database().ref("/").child(totalWithdraw).update({
        withdraw : 75.00
    });
  }

  function save(){
    totalBalance = document.getElementById("total_balance").value;

    firebase.database().ref("/").child(totalBalance).update({
        balance : 100.00
    });
  }
