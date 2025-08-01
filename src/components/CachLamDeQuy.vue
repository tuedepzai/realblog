<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const pArea = ref(null)

onMounted(async () => {
  const res = await fetch("./Articles/DeQuy.md")
  const text = await res.text()
  pArea.value.innerHTML = marked.parse(text)

  if (window.MathJax && window.MathJax.typesetPromise) {
    await window.MathJax.typesetPromise()
  }
  console.log(text)
})

</script>

<template>
  <div ref="pArea"></div>
</template>
