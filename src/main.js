  import { createApp } from "vue";
  import App from "./App.vue";
  // require('ssb-browser-core/ssb-singleton')
  
  /* let SSB
  let err  */

  const ssbSingleton = window.getSSBSingleton();

  console.log(ssbSingleton)

  /* if (window.getSSBSingleton) {
    const ssbSingleton = window.getSSBSingleton();
    [err, SSB] = ssbSingleton.getSSB();
  } else {
    console.log('Bundle not loaded!', typeof(window.getSSBSingleton), window.ssbSingleton, window)
  }

  console.log('SSB', SSB, err)


  if (SSB) {
    console.log('Postando')
    SSB.db.publish(
      {
        type: "post",
        text: "oioi",
      },
      (err) => {
        console.log("🚀 ~ file: main.js ~ line 12 ~ err", err);
        console.log("Postado");
      }
    );
  } */

  createApp(App).mount("#app");
