const REDIRECTS = {
  "jpath": "https://thearmagan.github.io/JPATH/",
  "matchify": "https://matchify.org/",
  "svg-to-png": "https://thearmagan.github.io/svg-to-png/",
  "smallphone": "https://thearmagan.github.io/smallphone/",
  "easydl": "https://armagan-easydl.herokuapp.com/"
}

export async function get({ params }) {
  let loc = REDIRECTS[params.redirect.toLowerCase()];
  
  if (loc) {
    return {
      headers: {
        Location: loc
      },
      status: 302
    }
  }
    
  return {
    status: 404,
    body: "404"
  };
}