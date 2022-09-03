/**
 * utility function for handling different clients
 * 
 * @since     1.0.0
 * 
 * @param {string} scriptURL 
 * @param {string} client 
 * @param {string} dropBoxApi 
 * @returns void
 */

// nested scope that can access variables from outer scope
'use strict';
    
const addClient = (scriptURL, client, dropBoxApi) => {

  return new Promise(() => {
    const script = document.createElement("script");
    let domInspects = document.getElementsByTagName("script");

    for (let i = domInspects.length; i >= 0; i--) {
        if (domInspects[i] && domInspects[i].getAttribute("src") !== null
            && domInspects[i].getAttribute("src").indexOf(`${scriptURL}`) !== -1) {
            
            // remove already added clients 
            domInspects[i].parentNode.removeChild(domInspects[i]);
        }
    }
    
    // create reference script
    script.src = scriptURL;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;

    // add dropbox api key
    if (client === 'dropbox') {
      script.id = 'dropboxjs';
      script.setAttribute("data-app-key", dropBoxApi)
    }

    document.head.appendChild(script);
    
  })

}
 
export default addClient;