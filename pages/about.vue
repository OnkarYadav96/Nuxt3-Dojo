<template>
  <div>
    <p>About</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est aut, quae harum aspernatur omnis dolores
      excepturi dolor ipsam. Fugiat consequuntur repudiandae amet asperiores minima eveniet blanditiis fuga a voluptates!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style  scoped></style>