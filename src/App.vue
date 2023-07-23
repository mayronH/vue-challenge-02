<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

const content = useStorage('quill-content', '')
const editor = ref()

const clearContent = () => {
  console.log(editor.value)
  editor.value?.setHTML('')
}
</script>

<template>
  <main class="content">
    <div class="quill-wrapper">
      <div class="buttons">
        <button @click="clearContent()">Clear</button>
      </div>
      <QuillEditor ref="editor" theme="snow" v-model:content="content" contentType="html" />
    </div>
    <div class="preview-wrapper">
      <h1 class="preview-title">Preview</h1>
      <div class="preview" v-html="content"></div>
    </div>
  </main>
</template>

<style scoped>
.content {
  margin-inline: 1.75rem;
}
.quill-wrapper,
.preview-wrapper {
  height: 50%;
  width: 100%;
}
.buttons {
  margin-bottom: 1rem;
}
.preview-title {
  text-align: center;
}
</style>
