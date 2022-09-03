<template>
  <div class=.akito-cloudsaver">
      <DriveButton v-if="isDrive" 
        :filename="filename" 
        :file="file" 
        :sitename="sitename" 
      />
      <DropboxButton v-if="isDropbox" 
        :filename="filename" 
        :file="file" 
      />
  </div>
</template>

<script>
import DropboxButton from './ui-element/DropboxButton.vue';
import DriveButton from './ui-element/DriveButton.vue';
import addClient from './util/importClient';

export default {
  name: 'CloudSaver',
  components: {
    DropboxButton, 
    DriveButton
  },
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
    isDrive: Boolean, 
    isDropbox: Boolean, 
    dropboxapi: String
  },
  mounted: function () {

    // Declare dropBoxApi and assign dropboxapi props value
    const dropBoxApi = this.dropboxapi; 
    
    // check whether enabled drive button
    if( this.isDrive )
      addClient('https://apis.google.com/js/platform.js');
        
    // check whether enabled dropbox button
    if( this.isDropbox && dropBoxApi)
      addClient('https://www.dropbox.com/static/api/2/dropins.js', 'dropbox', dropBoxApi);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.akito-cloudsaver {
    margin-top: 10px;
    margin-bottom: 10px;
}

.akito-cloudsaver > * {
    margin: 0 10px;
}

.dropbox-dropin-btn,
.dropbox-dropin-btn:link,
.dropbox-dropin-btn:hover {
    padding: 5px 7px 8px 3px !important;
}
</style>