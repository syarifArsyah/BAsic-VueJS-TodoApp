<template>
    <Hello />
    <Navbar judul="Belajar Dasar vue Js"/>
  
    <h3>{{message}}</h3>
  
    <input type="text" v-model="message">
  
    <p>{{count}}</p>
    <button @click="count++">Increment</button>
    <button @click="decrement">Decrement</button>
  
    <br/>
    <br/>
    <!-- v-if rendering -->
    <button @click="status = true">Show Status</button>
    <button @click="status = false">Hide Status</button>
    <button @click="toggle">Toggle Status</button>
    <div v-if="status">Lagi Belajar Vue JS</div>
  
    <br/>
    <br/>
    <h2>Item Product</h2>
    <ol>
      <li v-for="(item,i) in items" :key="i">
        {{item.product}}
      </li>
    </ol>
    <hr />
    <input type="text" v-model="num1">
    <input type="text" v-model="num2">
    <p>{{total}}</p>
  
    <br />
  
    <Slot>
      <template v-slot:default="{data}">
        <span>{{data}}</span>
      </template>
      <template v-slot:content="{dataContent}">
        <span>Isi : {{dataContent}}</span>
      </template>
      <template v-slot:footer="{data}">
        <p>{{data}}</p>
      </template>
      <template v-slot:cr="{data}">
        <p>{{data}}</p>
      </template>
    </Slot>
  
  
  
  </template>
  
  <script>
  import Navbar from './Navbar.vue'
  import Slot from './Slot.vue'
  
  export default {
    name: 'App',
    components :{
      Navbar, Slot
    },
    data (){
      return {
        message : 'Hai, Selamat Belajar',
        count : 0,
        status : false,
        items : [
          { id : 1, product : 'handphone'},
          { id : 2, product : 'play station'},
          { id : 3, product : 'tablet'},
          { id : 4, product : 'notebook'},
        ],
        judul : 'Belajar Basic Vue JS',
        num1 : '',
        num2 : '',
      }
    },
    methods :{
      decrement(){
        this.count--
      },
      toggle(){
        this.status = !this.status
      }
    },
    computed:{
      total(){
        return parseInt(this.num1)+parseInt(this.num2)
      }
    }
  }
  </script>
  