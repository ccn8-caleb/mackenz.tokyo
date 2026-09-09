export default {
  async fetch(request, env, ctx) {
    // Passes every request through to the static assets built by Eleventy (_site)
    return await env.ASSETS.fetch(request);
  }
};