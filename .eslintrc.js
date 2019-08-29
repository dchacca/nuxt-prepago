module.exports = {
    root: true,
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    env: {
        browser: true,
    },
    extends: [
        "plugin:vue/recommended",
        "@vue/prettier",
        "@vue/typescript",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    // required to lint *.vue files
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        "generator-star-spacing": "on",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    }
}