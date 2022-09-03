<template>
    <a
      class="dropbox-saver"
      :href="file">
    </a>
</template>

<script>
export default {
  name: 'DropboxButton',
  props: {
    filename: String, 
    file: String, 
  }
}
</script>