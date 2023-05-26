
import adapter from "@sveltejs/adapter-static"; 
import { vitePreprocess } from '@sveltejs/kit/vite';
// was "@sveltejs/adapter-auto"

const dev = process.argv.includes('dev');

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: "public",
            assets: "public"
        }),
        paths: {
            // change below to your repo name
            base: dev ? '' : process.env.BASE_PATH,
        },
        // hydrate the <div id="svelte"> element in src/app.html

    }
};

export default config;

