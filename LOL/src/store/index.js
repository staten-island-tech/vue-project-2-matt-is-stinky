import { createStore } from "vuex";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    Posts: [
      {
        name: "Yasuo",
        PostContent: "Kinda cool, has a brother, killed him tho :/",
        PostImage: "../assets/images/yasuo.jpg",
        PostDate: "date",
      },
      {
        name: "irelia",
        PostContent: "Super cringe, not a wife, ionian menace,",
        PostImage: "../assets/images/irelia.jpg",
        PostDate: "date",
      },
      {
        name: "sett",
        PostContent:
          "Super awesome, mafiaboss, can do situps, ionian gigachad,",
        PostImage: "../assets/images/sett.jpg",
        PostDate: "date",
      },
      {
        name: "talon",
        PostContent: "talon",
        PostImage: "../assets/images/talon.jpg",
        PostDate: "date",
      },
    ],
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoURL: null,
    editPost: null,
    user: null,
    authIsReady: false,
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
      console.log(state.blogHTML);
    },
    updateBlogTitle() {},
    updateBlogHTML() {},
    newBlogTitle(state, payload) {
      state.blogTitle = payload;
      console.log(state.blogTitle);
    },
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
  },
  actions: {
    async signup(context, { email, password }) {
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
      context.commit("setUser", null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
