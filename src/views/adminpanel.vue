<template>
    ok
</template>

<script>
import store from "@/store";
import router from "@/router";
export default {
  name: "adminpanel",
  data: function () {
    return {
    store,
    };
  },
mounted(){
  setTimeout(()=>{
    const admin = store.currentUser === "adminn@gmail.com";
    console.log(store.currentUser);
      if(!admin){
    router.push("Home");
  }  
    },500);  
},
}

</script>