# Getting started

## Vue component overview

AKito Cloud Saver is a reusable vue component that offers a versatile approach to sharing files for end users to store in their Dropbox or Google Drive. It is designed for those who share files with end users by adding Google Drive and Dropbox save buttons to your Vue application/website.

Clone the repository

    git clone git@github.com:akitomen/cloud-saver-vue-component.git


## Basic usage

1. Import Vue Cloud Saver components into your already installed/existing vue js root/src/App.vue file or any other page or section you want to render the output of this custom component.

        import CloudSaver from './components/wmx-vue-cloud-saver/CloudSaver.vue'
            
              export default {
                  name: 'App',
                  components: {
                    CloudSaver
                }
              }
2. To run the app, please write the following command into your terminal:

        npm run serve
   

