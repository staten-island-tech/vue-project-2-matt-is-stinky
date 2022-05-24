import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/config";

const store = createStore({
  state: {
    blogPosts: [],
    postLoaded: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
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
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
    createFileURL(state, payload) {
      state.blogFileURL = payload;
    },
    changePhotoName(state, payload) {
      state.blogPhotoName = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
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
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("posts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },
  },
});

export default store;
