import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/config";

const store = createStore({
  state: {
    /*sampleBlogCards: [
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
    ],*/
    blogPosts: [],
    postLoaded: null,
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
  getterss: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
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
    },*/
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    } /*
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },*/,
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
    async getPost({ state }) {
      const dataBase = await db.collection("posts");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.postID === doc.id)) {
          const data = {
            postID: doc.data().postID,
            postPhoto: doc.data().postPhoto,
            postContent: doc.data().postContent,
            postTitle: doc.data().postTitle,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
      console.log(state.blogPosts);
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
  },
});

export default store;
