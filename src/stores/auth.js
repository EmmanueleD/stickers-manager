import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import router from "../router/index.js";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userData: null,
    loadingAuth: false,
    loadingSession: false,
    emailVerified: false,
    authError: "",
  }),
  actions: {
    async registerUser(email, password) {
      this.loadingAuth = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        console.log("registered: ", user.email);
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("email verification sent");
        });
        router.push("/");
      } catch (error) {
        console.log("UsersStore - Register User error: ", error);
      } finally {
        this.loadingAuth = false;
      }
    },
    async loginUser(email, password) {
      this.loadingAuth = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        this.emailVerified = user.emailVerified;
        console.log("logged in: ", user.email);
        router.push("/");
      } catch (error) {
        console.log("UsersStore - Login User error: ", error);
        this.authError = error.message.slice(10, error.message.length);
      } finally {
        this.loadingAuth = false;
      }
    },
    async logoutUser() {
      try {
        this.loadingAuth = true;
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (error) {
        console.log("UsersStore - Logout User error: ", error);
        this.authError = error.message.slice(10, error.message.length);
      } finally {
        this.loadingAuth = false;
      }
    },
    currentUser() {
      return new Promise((res, rej) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = {
                email: user.email,
                uid: user.uid,
              };
              this.emailVerified = user.emailVerified;
            } else {
              this.userData = null;
            }
            res(user);
          },
          (e) => rej(e)
        );
        unsubscribe();
      });
    },
  },
});
