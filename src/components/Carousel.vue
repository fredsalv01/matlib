<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
        />
      </svg>
    </button>
    <button @click="prev" class="prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
  methods: {
    next() {
        this.$emit('next')
    },
    prev() {
        this.$emit('prev')
    },
  },
};
</script>
<style>
.carousel {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 350px;
  overflow: hidden;
}
button {
  position: absolute;
  width: 32px;
  top: calc(50% - 20px);
  background-color: transparent;
  border: none;
  border-radius: 50%;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
  font-weight: bold;
}

button:active,
button:hover {
  outline: none;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(50deg) brightness(118%) contrast(119%);
  cursor: pointer;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>
