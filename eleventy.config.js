export default function (eleventyConfig) {
  // Ship these byte-identical, untouched
  eleventyConfig.addPassthroughCopy("docs/pdfs");
  eleventyConfig.addPassthroughCopy("docs/html");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
}
