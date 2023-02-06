<template>
    <div class="sidebar-icon group">
        <Icon :name="name" :size="size" />   
        <span class="sidebar-tooltip absolute group-hover:scale-100" >{{ tip }} 💡 </span>
        <NuxtLink :to="tip" class=""> link</NuxtLink>
    </div>  
</template>


<script setup>
 const props = defineProps ({
    name: '',
    size: '',
    tip: ''
 })
 

</script>