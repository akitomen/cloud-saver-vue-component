<template>
    <button
        class="g-savetodrive"
        :data-src="filename"
        :data-filename="filename"
        :data-sitename="sitename">
    </button>
</template>

<script>
export default {
  name: 'DropboxButton',
  props: {
    filename: {
        type: String, 
        require: true,
        default: 'example',
    }, 
    file: {
        type: String, 
        require: true,
        default: '/example.pdf',
    }, 
    sitename: {
        type: String, 
        require: true,
        default: 'AKito Cloud Saver',
    },
  }
}

</script>