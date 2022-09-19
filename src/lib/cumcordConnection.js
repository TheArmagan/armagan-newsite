/* eslint-disable no-async-promise-executor */

export function getConnection() {
  return new Promise(async r => {
    let ws;
    let count = 0;
    
    for (let i = 0; i < 11; i++) {
      try {
        let s = new WebSocket(`ws://127.0.0.1:${6463 + i}/cumcord`);
        s.onopen = () => {
          ws = s;
          count++;
          r(ws);
        }
        s.onerror = () => {
          count++;
        }
        // eslint-disable-next-line no-empty
      } catch { };
    }
    
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (count >= 10) break;
      await new Promise(r => setTimeout(r, 100));
    }

    return r(ws);
  })
}

export async function installPlugin(url) {
  let sock = await getConnection();
  if (!sock) return alert("Unable to find a Cumcord instance on your computer, please first start the Cumcord.");

  sock?.send(JSON.stringify({
    action: "INSTALL_PLUGIN",
    url
  }));
  sock?.close();
}