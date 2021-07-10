/* const localPrefs = require('./localprefs')
const pull = require('pull-stream')

const config = {
  caps: { shs: Buffer.from(localPrefs.getCaps(), 'base64') },
  friends: {
    hops: localPrefs.getHops(),
    hookReplicate: false
  },
  connections: (localPrefs.getDHTEnabled() ? {
      incoming: {
        tunnel: [{ scope: 'public', transform: 'shs' }],
        dht: [{ scope: 'public', transform: 'shs' }]
      },
      outgoing: {
        net: [{ transform: 'shs' }],
        ws: [{ transform: 'shs' }, { transform: 'noauth' }],
        tunnel: [{ transform: 'shs' }],
        dht: [{ transform: 'shs' }]
      }
    } : {
      incoming: {
        tunnel: [{ scope: 'public', transform: 'shs' }]
      },
      outgoing: {
        net: [{ transform: 'shs' }],
        ws: [{ transform: 'shs' }, { transform: 'noauth' }],
        tunnel: [{ transform: 'shs' }]
      }
    }
  ),
  hops: localPrefs.getHops(),
  core: {
    startOffline: localPrefs.getOfflineMode()
  },
  ebt: {
    logging: localPrefs.getDetailedLogging()
  },
  conn: {
    autostart: false,
    hops: localPrefs.getHops(),
    populatePubs: false
  }
} */

/* function extraModules(secretStack) {
  return secretStack.use({
    init: function (sbot) {
      sbot.db.registerIndex(require('ssb-db2/indexes/full-mentions'))
    }
  })
  .use({
    init: function (sbot) {
      sbot.db.registerIndex(require('ssb-db2/indexes/about-self'))
    }
  })
  // TODO: Retornar
  // .use({
  //   init: function (sbot, config) {
  //     sbot.db.registerIndex(require('./indexes/channels'))
  //   }
  // })
  .use(require("ssb-threads"))
}

function ssbLoaded() {
  // add helper methods
  SSB = window.singletonSSB
  // TODO: Retornar
  // require('./net')
  // require('./profile')
  // require('./search')

  pull(SSB.net.conn.hub().listen(), pull.drain((ev) => {
    if (ev.type.indexOf("failed") >= 0)
      console.warn("Connection error: ", ev)
  }))
}

require('ssb-browser-core/ssb-singleton').init(config, extraModules, ssbLoaded) */

const ssbSingleton = require('ssb-browser-core/ssb-singleton')

function ssbReady(sbot) {
  console.log("got sbot", sbot)
}

function extraModules(secretStack) {
  // add extra modules here
  return secretStack
}

// in case you want to add or overwrite something from here
// https://github.com/arj03/ssb-browser-core/blob/master/net.js#L11
let config = {}

// setup ssb browser core
ssbSingleton.setup("/.ssb-example", config, extraModules, () => {})

ssbSingleton.getSSBEventually(
  -1,
  () => { return true },
  (SSB) => { return SSB },
  (err, SSB) => {
    if (err) console.error(err)
    else ssbReady(SSB)
  }
)