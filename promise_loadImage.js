// ? xmlhttpRequest is a browser API function, not a javascript function.
// ? it is avalible as of Node 21+ ?
// import { XMLHttpRequest } from "xmlhttprequest";
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    debugger;
    request.open("GET", url);
    debugger;
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(
          Error(
            `ERROR: Image didn't load successfully; error code: ${request.statusText}`
          )
        );
      }
    };
    request.onprogress = function (event) {
      if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
      }
    };

    request.onreadystatechange = function () {
      console.log(`request.readyState: ${request.readyState}`);
    };
    request.send();
  });
}

loadImage("https://dog.ceo/api/breeds/image/random")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
