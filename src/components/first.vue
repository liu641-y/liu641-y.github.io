<template>
    <div>
        <div>这是一个个人博客,但还没什么内容</div>
        <span class="jumpto" @click="jumpto">play game click me</span>

    </div>
</template>
<script>

export default ({
   name: "first",
   methods: {
       jumpto(){
           this.$router.push('/game')
       }
   },
   created(){


   }

})
</script>

<style scoped>
.jumpto{
    cursor: pointer; 
}
</style>
