<template>
<nav>
    <h1>LEAGUE OF LEGENDS</h1>
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <span>Logged in as...</span>
        <button>Logout</button>
    </div>
    <div>
        <router-link to="/login">Login</router-link>
        <router-link to="signup">Signup</router-link>
    </div>
</nav>
</template>