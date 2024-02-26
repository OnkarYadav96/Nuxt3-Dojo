<template>
    <div>
        <ProductDetails :product="products" />
    </div>
</template>

<script setup>
// grab id from parent or where this page/component is route
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

// fetch the product
const { data: products } = await useFetch(uri, { key: id });

if (!products.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found',fatel:true })
}
definePageMeta({
    layout: 'products'
})

</script>

<style  scoped></style>