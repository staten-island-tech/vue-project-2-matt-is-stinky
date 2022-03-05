<template>
<nav>
    <img alt="logo" src="../assets/ugly.png">
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <span>Logged in as...</span>
        <button>Logout</button>
    </div>
    <div>
        <router-link to="/Log-In">Login</router-link>
        <router-link to="/Sign-Up">Signup</router-link>
    </div>
</nav>
</template>