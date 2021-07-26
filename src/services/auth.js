import { auth, firebasedb, provider, storage } from "../firebase";
import makeid from "../helper/functions";


export const signInWithGoogle = async () => {
  let user;
  await auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
      user = res.user;
      
    })
    .catch((e) => {
      console.log(e.message);
    });
  return user;
};

export const logout = async () => {
 
  let logout_sucess;
  await auth
    .signOut()
    .then(() => {
      logout_sucess = true;
    })
    .catch((error) => {
      console.log(error.message);
    });
  window.location.reload();

  return logout_sucess;
};

export const signInWithEmail = async (email, password) => {
  let userWithEmail;
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((u) => {
      console.log(u.user);
      userWithEmail = u.user;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return userWithEmail;
};

export const signUpWithEmail = async (
  email,
  password,
  phone,
  role,
  namee,
  profimage,
  flag
) => {
  var imageName = makeid(10);
  let userWithEmail;
  var uid;
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((u) => {
      userWithEmail = u.user;
      uid = u.user.uid;
      //get user id
      console.log(uid);
      const uploadPhototask = storage
        .ref(`Users_Profile_Cover_Imgs/${imageName}.jpg`)
        .put(profimage);
      uploadPhototask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          //error
          console.log(error);
        },
        () => {
          storage
            .ref("Users_Profile_Cover_Imgs")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              firebasedb.ref("Users").child(uid).set({
                email: email,
                image: imageUrl,
                name: namee,
                phone: phone,
                role: role,
                uid: uid,
                typingTo: "noOne",
                onlineStatus: Date.now().toString(),
                cover: "",
              });
            });
        }
      );
      alert("✅ Register Successfull")
     
    })
    .catch((err) => {
      console.log(err);
      alert("❌ "+ err.message)
    });
  return userWithEmail;
};
