<template>
    <h2>{{judul}}</h2>
    <nav>
        <a href="#">Home</a> | 
        <a href="#">Profile</a> | 
        <a href="#">Contact</a>
    </nav>
</template>

<script>
 export default{
    props : {
        judul :{
            type : String,
        }
    }
 }
</script>