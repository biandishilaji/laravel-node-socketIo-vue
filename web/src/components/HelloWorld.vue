<template>
 <div>
   <h1>Bem vindo!</h1>
   <h1>{{msg}}</h1>
   <button @click.prevent="clickButton">Clique</button>
 </div>
</template>

<script>


export default {
  name: 'HelloWorld',

  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    disconnect: function (){
      console.log('socket disconnected')
    },
    connections: function (data){
      console.log(data)
    },
    test : function(){
      console.log('test')
    },
    test1 : function(){
      console.log('test1')
    }
  },
  methods: {
    clickButton: function () {
      // $socket is socket.io-client instance
      this.$socket.emit('test', 'oi')
    }
  },
  data(){
    return {
      msg : ''
    }
  },
  created() {
    this.sockets.subscribe('test1', (data) => {
      this.msg = data;
    });
  },
}
</script>

