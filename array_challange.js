const posts = [
  {
    title: "Blog Post 1",
    author: "John Doe",
    views: 120,
    langs: ["EN", "NL", "DE", "JA"],
  },
  {
    title: "Blog Post 2",
    author: "Jane Doe",
    views: 40,
    langs: ["EN", "NL", "NL", "ES", "PT"],
  },
  {
    title: "Blog Post 3",
    author: "John Doe",
    views: 90,
    langs: ["EN", "DE", "NO", "DK", "SE"],
  },
  {
    title: "Blog Post 4",
    author: "Jane Doe",
    views: 20,
    langs: ["EN", "NL", "DE", "NO", "SE"],
  },
  {
    title: "Blog Post 5",
    author: "John Doe",
    views: 120,
    langs: ["EN", "NL", "ES", "NO", "IT"],
  },
  {
    title: "Blog Post 6",
    author: "Will Smith",
    views: 100,
    langs: ["EN", "NL", "DE", "NO", "PT"],
  },
  {
    title: "Blog Post 7",
    author: "Jane Doe",
    views: 90,
    langs: ["EN", "NL", "DE", "NO", "SE"],
  },
  {
    title: "Blog Post 8",
    author: "Will Smith",
    views: 20,
    langs: ["EN", "NL", "SE", "NO", "PT"],
  },
  {
    title: "Blog Post 9",
    author: "John Doe",
    views: 130,
    langs: ["EN", "NL", "IT", "PT", "DK"],
  },
];

const verboseFlag = true;

/*  testFunctionResult
 *  functionToTest: the function to test
 *  expected: the expected value
 *  verbose: if true, log the function name and result
 *  ...args: the arguments to pass to the function
 *  returns: the result of the function
 */
function testFunctionResult(functionToTest, expected, verbose, ...args) {
  const result = functionToTest(...args);
  if (verbose) {
    console.log("\nfunctionToTest.name: ", functionToTest.name);
    console.log("result: ", result);
  }
  const assertionValue = result.length === expected;
  console.assert(
    assertionValue,
    `${functionToTest.name} should return ${expected} unique languages, rather than ${result.length}`
  );
  if (assertionValue && verbose) {
    console.log(functionToTest.name + " passed the test\n");
  }
  return result;
}

/* getUniqueLanguages : function to get the unique languages of posts
 *    by an author with more than a minimum number of views
 *    example one, with filter and map, and flat and Set
 *   posts: an array of posts  (see above)
 *   author: the author of the posts
 *   views: the minimum views of the posts
 *   returns: an array of unique languages
 */
function getUniqueLanguages(posts, author, views) {
  const postsByAuthorWithMoreThanViews = posts.filter(
    (post) => post.author === author && post.views > views
  );
  const languages = postsByAuthorWithMoreThanViews.map((post) => post.langs);
  const uniqueLanguages = [...new Set(languages.flat())];
  return uniqueLanguages;
}
const uniqueLanguages = testFunctionResult(
  getUniqueLanguages,
  9,
  verboseFlag,
  posts,
  "John Doe",
  100
);

// which languages has John Dones posts be written, which got more than 100 views
// try two
function getUniqueLanguagesWithwithMapAndFlat(posts, author, views) {
  return [
    ...new Set(
      posts
        .filter((post) => post.author === author && post.views > views)
        .map((post) => post.langs)
        .flat()
    ),
  ];
}
const uniqueLanguages2 = testFunctionResult(
  getUniqueLanguagesWithwithMapAndFlat,
  9,
  verboseFlag,
  posts,
  "John Doe",
  100
);

// another way of going from a Set to array
const newSet = new Set(["a", "b", "c"]);
const Set2Array = Array.from(newSet);
console.log("newSet: ", newSet);
console.log("Set 2 Array: ", Set2Array);
console.log("Set 2 Array .length: ", Set2Array.length);

// which languages has John Dones posts be written, which got more than 100 views
// try three with flatMap
function getUniqueLanguagesWithFlatMap(posts, author, views) {
  const languagesArray = posts
    .filter((post) => post.author === author && post.views > views)
    .flatMap((post) => post.langs);
  return [...new Set(languagesArray)];
}
const uniqueLanguages3 = testFunctionResult(
  getUniqueLanguagesWithFlatMap,
  9,
  verboseFlag,
  posts,
  "John Doe",
  100
);

// which languages has John Dones posts be written, which got more than 100 views
// try four with reduce
function getUniqueLanguagesWithReduce(posts, author, views) {
  const authorPosts = posts.filter(
    (post) => post.author === author && post.views > views
  );
  const languages = authorPosts.map((post) => post.langs);
  const flattenedLanguages = languages.reduce(
    (acc, cur) => acc.concat(cur),
    []
  );
  return [...new Set(flattenedLanguages)];
}
const uniqueLanguages4 = testFunctionResult(
  getUniqueLanguagesWithReduce,
  9,
  verboseFlag,
  posts,
  "John Doe",
  100
);
