const version = 1

async function main() {
  console.log(`Service Worker (${version}) is starting...`)
}

async function onInstall(event) {
  console.log(`Service Worker (${version}) is installed...`)
}

function onActivate(event) {
  event.waitUntil(handleActivation())
}

async function handleActivation() {
  // await clients.claim()
  console.log(`Service Worker (${version}) is activated...`)
}

// ********************************

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)

main().catch(console.error)
