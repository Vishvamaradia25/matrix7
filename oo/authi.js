  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyCs4-sH0dNxQz_-rBRVEIGG9TGL4bkhc7M",
      authDomain: "jvbro-bee83.firebaseapp.com",
      projectId: "jvbro-bee83",
      storageBucket: "jvbro-bee83.appspot.com",
      messagingSenderId: "873027049770",
      appId: "1:873027049770:web:020bd712069399da42e653",
      measurementId: "G-WWLYC4WG55"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // const database= getDatabase();
  const auth = getAuth();

  //....... signup......//
  document.getElementById("signup").addEventListener("click", (e) => {
      e.preventDefault();

      var email = document.getElementById("signupEmail").value;
      var password = document.getElementById("signupPassword").value;

      createUserWithEmailAndPassword(auth, email, password)

      //set(ref(db, "TheStudents/"+ rollbox.value),{
      .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              alert("success");
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
          });
  });


  //.......login........//
  document.getElementById("login").addEventListener("click", (e) => {
      e.preventDefault();

      var email = document.getElementById("loginemail").value;
      var password = document.getElementById("loginpassword").value;

      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              alert("success");
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert("failed");

          });

  });


  // logout......

  // function logout(){
  //   firebase.auth().signOut()

  //   // document.querySelector('#proimg').src= "./assets/noimage.png"
  // }

  // const unsubscribe  = firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     console.log(user)
  //     // getuserInfo(user.uid)
  //     document.getElementById("loginli").style.display = "none"
  //     document.getElementById("signupli").style.display = "none"
  //     document.getElementById("logoutli").style.display = "block"
  //     getuserInfoRealtime(user.uid)
  //     if(user.uid=='TSS0ckznnpM2UkjxHIxp2Y8ivFc2'){
  //       allUserDetails()
  //     }


  //   } else {
  //     getuserInfoRealtime(null)
  //     console.log('signout success')
  //     document.getElementById('table').style.display = 'none'
  //     document.getElementById("logoutli").style.display = "none"
  //     document.getElementById("loginli").style.display = "block"
  //     document.getElementById("signupli").style.display = "block"
  //     // M.toast({html: "signout success",classes:"green"})
  //   }
  // });

  document.getElementById("logOut").addEventListener("click", (e) => {
      e.preventDefault();


      const auth = getAuth();
      signOut(auth).then(() => {
          // Sign-out successful.
          alert("logout")
      }).catch((error) => {
          // An error happened.
      });

  });