<template>
    <div v-show="visibleSlide === index" class="carousel-slide">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['visibleSlide', 'index'],
    setup() {
        return{}
    }
}
</script>

<style>
    
</style>