import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/config";

const store = createStore({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Irelia",
        blogCoverPhoto: "irelia",
        blogDate: "May 7, 2022",
      },
      {
        blogTitle: "Sett",
        blogCoverPhoto: "sett",
        blogDate: "May 7, 2022",
      },
      {
        blogTitle: "Talon",
        blogCoverPhoto: "talon",
        blogDate: "May 7, 2022",
      },
      {
        blogTitle: "Yasuo",
        blogCoverPhoto: "yasuo",
        blogDate: "May 7, 2022",
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    blogFileURL: null,
    blogPhotoName: null, 

    /* blogHTML: "",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    authIsReady: false, */
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileUsername.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
    /*newBlogPost(state, payload) {
      state.blogHTML = payload;
      console.log(state.blogHTML);
    },
    newBlogTitle(state, payload) {
      state.blogTitle = payload;
      console.log(state.blogTitle);
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },*/
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
    /*async signup(context, { email, password }) {
      console.log("signup action");
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");
      await signOut(auth);
      context.commit("setUser", null);*/
  },
});

export default store;
