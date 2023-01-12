const withMDX = require("@next/mdx")({
    extension: /\.mdx$/,
});
module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    env: {
        TDA_CLIENT_ID: process.env.TDA_CLIENT_ID,
        TDA_REFRESH_TOKEN: process.env.TDA_REFRESH_TOKEN,
    },
});
