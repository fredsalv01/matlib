<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

//setup variables
// const formula = "$$P = {(n * a) + (m * b) \\over (m + n)}$$"; distancia entre dos puntos (punto medio) formula 1
// const formula = "$$P = {a + b \\over 2$$"; distancia entre dos puntos formula 2

// const formula = "$$d = AB = {\\sqrt{(x_2 - x_1)^2 + (y_2 + y_1)^2}}$$"; distancia entre dos puntos en el plano cartesiano

// const formula = "$$X = {(n * x_1) + (m * x_2) \\over m + n}$$"; Division de un segemento a una razon dada formula 1
// const formula = "$$Y = {(n * y_1) + (m * y_2)}$$"; Division de un segmento a una razon dada formula 2

// const formula = "$$X = {(x_1 + x_2) \\over 2}$$"; Coordenadas del punto medio de un segmento formula 1
// const formula = "$$Y = {(y_1 + y_2) \\over 2}$$"; Coordenadas del punto medio de un segmento formula 2

// const formula = "$$Y - Y_1 = m  { ( X - X_1)}$$"; ecuacion de la recta

// const formula = "$$m = {(y_2 - y_1) \\over (x_2 - x_1) }$$"; ecuacion de la pendiente

// const formula = "$$ (y - y_1) = { (y_2 - y_1) (x - x_1) \\over x_2 - x_1 }$$"; ecuaciones de rectas paralelas a los ejes

// const formula = "$$ Y = { m X + B }$$"; Condicion de perpendicularidad formula 1
// const formula = "$${ AX + BY + C = 0 }$$"; Condicion de perpendicularidad formula 2
// const formula = "$$ Y - Y_1 = { (Y_2 - Y_1) * (X - X_1) \\over  X_2 - X_1 }$$"; Condicion de perpendicularidad formula 3

// const formula = "$$ (x^2 + y^2) = { r^2 }$$"; Ecuacion de la circunferencia
const formula = "$$ (y - y_1) = { (y_2 - y_1) (x - x_1) \\over x_2 - x_1 }$$";


</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Proyecto creado utilizando:
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a> Y
      <a target="_blank" href="https://www.mathjax.org/">MathJax</a>
    </h3>
    <!-- <vue-mathjax :formula="formula"></vue-mathjax> -->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
