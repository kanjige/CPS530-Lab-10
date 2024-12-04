
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/CPS530-Lab-10"
  }
],
  assets: new Map([
['index.csr.html', {size: 516, hash: '042bf6b0860187f96a90bbb13cfe92d5d79c3aa86bc19d6909f86ba2fa64e277', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1029, hash: '0bd051a5facca254474a241fbd45cb1ff74e3c3a285c68568bb740b9e6009b38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 2884, hash: '1bd25442dd026f8a7a621232e426e6dc61f82d3226f359d32f2614eb0bc1edd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
