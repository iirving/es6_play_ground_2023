// fetch returns a promise, so we can use async/await to handle it.
async function fetchImage(url) {
  const response = await fetch(url);
  // const blob = await response.blob();
  const json = await response.json();
  return await json;
}

// fetchImage("https://dog.ceo/api/breeds/image/random")
//   .then((res) => console.log(res))
//   .catch((err) => console.error("ERROR: ", err));

async function fetchImage2(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    // ? the catch block will catch the error, and throw it to the calling function.
    // ? the calling function will catch the error, and handle it.
    // ? if the calling function does not catch the error, the program will stop.
    // ? the catch block allows some error handling to be done in the function that throws the error,
    console.log(
      "fetchImage2",
      "caught error, throwing err to calling function"
    );
    throw err;
  }
}

async function processGoodAnsBadurls(urlList) {
  for (const url of urlList) {
    console.log("url: ", url);
    try {
      const json = await fetchImage2(url);
      if (json.status == "success") {
        console.log("json: ", json);
        // return json;
        //        continue;
      } else {
        //handle non-successful status returned from the url like code 404
        console.log("url responsed with ERROR: ", json.code, json.message);
      }
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }
}

const urlList = [
  "",
  "https://dog.ceo/api/breeds/image/random",
  "https://dog.ceo/api/breeds/image/random2",
];
// processGoodAnsBadurls(urlList);

async function processGoodAnsBadurls2(urlList) {
  for (const url of urlList) {
    console.log("url: ", url);
    await fetchImage2(url)
      .then((result) => {
        if (result.status == "success") {
          console.log("success json: ", result);
        } else {
          //handle non-successful status returned from the url like code 404
          console.log(
            `url responsed with ERROR ${result.code}: `,
            result.message
          );
        }
      })
      .then(() => console.log("url: ", url, "processed"))
      .catch((err) => console.error("ERROR: ", err));
  }
}

// processGoodAnsBadurls2(urlList);

async function processGoodAnsBadurls3(urlList) {
  for (const url of urlList) {
    console.log("url: ", url);

    // ? Note that the fetchImage function returns a promise, so we can use async/await to handle it.
    // ? we can use both fetchImage and fetchImage2 in this function.
    // ? fetchImage2 has a try/catch block, and fetchImage does not.
    // ? fetchImage2 will throw an error if the url is bad, and fetchImage will not.
    await fetchImage(url)
      .then((result) => processResultFromFetchImage3(result))
      .then(() => console.log("url: ", url, "processed"))
      .catch((err) => console.error("ERROR 3: ", err))
      .finally(() => console.log("finally: ", url, "processed\n"));
  }
}

function processResultFromFetchImage3(result) {
  if (result.status == "success") {
    console.log("json: ", result);
  } else {
    //handle non-successful status returned from the url like code 404
    console.log(
      `url responsed with ERROR CODE ${result.code}: `,
      result.message
    );
  }
}

processGoodAnsBadurls3(urlList);
