/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8a82f3ec9ff71e2cfd332147bace691d"
  },
  {
    "url": "about/index.html",
    "revision": "cd7bf75e47929b58eece2159a54c08bd"
  },
  {
    "url": "archives/index.html",
    "revision": "9fb0a4be5aca91c5a69d7df5cac88998"
  },
  {
    "url": "assets/css/0.styles.7aa83782.css",
    "revision": "f2c31585ecd8d1b3acec3287bd16b146"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.10824af7.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.56573229.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",
    "revision": "66c678209ce93b6e2b583f02ce41529e"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",
    "revision": "796f3797cdf36fcaea18c3070a608378"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",
    "revision": "f9e6a99f4a543b7d6cad1efb6cf1e4b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.4cdba646.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",
    "revision": "a9382e25bcf75d856718fcef54d7acdb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",
    "revision": "d873734390c716d6e18ff3f71ac6eb8b"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.65297062.woff2",
    "revision": "652970624cde999882102fa2b6a8871f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.818582da.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",
    "revision": "f8a7f19f45060f7a177314855b8c7aa3"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",
    "revision": "1320454d951ec809a7dbccb4f23fccf0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",
    "revision": "d8b7a801bd87b324efcbae7394119c24"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",
    "revision": "ad546b4719bcf690a3604944b90b7e42"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",
    "revision": "e934cbc86e2d59ceaf04102c43dc0b50"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",
    "revision": "1ac3ed6ebe34e473519ca1da86f7a384"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",
    "revision": "b8b8393d2e65fcebda5fa99fa3264f41"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.fd048565.js",
    "revision": "1525fcd80e2f806db4fd0acc7a50cdc0"
  },
  {
    "url": "assets/js/11.d84cac13.js",
    "revision": "ad06b810b9aef76b5803e7ab816cce5b"
  },
  {
    "url": "assets/js/12.63ce8dc9.js",
    "revision": "edad53692a2aa0cda6c7ca1679611740"
  },
  {
    "url": "assets/js/13.ed8cf36c.js",
    "revision": "56fae85a0eb3b770837f12a7a0c5f24f"
  },
  {
    "url": "assets/js/14.5695ce61.js",
    "revision": "2b94396e2ef18655c09e206c324ead56"
  },
  {
    "url": "assets/js/15.ed16f0da.js",
    "revision": "b248c711f6059a4362ffcb95dd37909a"
  },
  {
    "url": "assets/js/16.299d764a.js",
    "revision": "905f0d225e09e3bc6133b27ac00ea779"
  },
  {
    "url": "assets/js/17.27416899.js",
    "revision": "69bb33e9f888370ca365e0c369d04430"
  },
  {
    "url": "assets/js/18.31c32a59.js",
    "revision": "43b2cb95c99e90bf06b021df8b1dd6ff"
  },
  {
    "url": "assets/js/19.5285d173.js",
    "revision": "243d2c4824fd4c078e49f738e6a2f889"
  },
  {
    "url": "assets/js/20.6ea0bf9f.js",
    "revision": "697953e712cb05c902ffc93e705d9282"
  },
  {
    "url": "assets/js/21.8bf7936d.js",
    "revision": "50354146f40d006d86b4571dc4b6876a"
  },
  {
    "url": "assets/js/22.a0a27a49.js",
    "revision": "3262ea3b799886d9953eab04be04b14b"
  },
  {
    "url": "assets/js/23.bf5e4a57.js",
    "revision": "3c266f5cb90fa05c78890f2e3f2ec045"
  },
  {
    "url": "assets/js/24.d438b542.js",
    "revision": "2e7dc423967cdbc5e8e93036398c8302"
  },
  {
    "url": "assets/js/25.ffca6a0c.js",
    "revision": "2db6fe88a4ecb69842029ca928e5b01c"
  },
  {
    "url": "assets/js/26.5156c732.js",
    "revision": "e1a356ef43413b1a825ba9e40efbce27"
  },
  {
    "url": "assets/js/27.42d80276.js",
    "revision": "94b9ee87ed913cef867d446aa92d0f2c"
  },
  {
    "url": "assets/js/28.1423b035.js",
    "revision": "ea169a1e9488c94a0d754b797a1d39a8"
  },
  {
    "url": "assets/js/29.a81990f8.js",
    "revision": "6c31bb8d0c2b59f9b894138794000027"
  },
  {
    "url": "assets/js/30.c3ca9e20.js",
    "revision": "0e16cf7cfc6e0d52db13e2b77816ec57"
  },
  {
    "url": "assets/js/31.e03be712.js",
    "revision": "e159e1de0282d2e9c14b97d5db131831"
  },
  {
    "url": "assets/js/32.e1d46a35.js",
    "revision": "f64e96b370bbf4237703629592d37878"
  },
  {
    "url": "assets/js/33.8ddfd517.js",
    "revision": "200540d64364fb3dff9f87258280bf75"
  },
  {
    "url": "assets/js/34.04ec7b42.js",
    "revision": "2f1237d3eeafe3a054beff16ea8c1cc3"
  },
  {
    "url": "assets/js/35.768bbe1d.js",
    "revision": "34aa371443e8dc379fa014478f328277"
  },
  {
    "url": "assets/js/36.928cd6e2.js",
    "revision": "75bd68429cbe9c5065aec1d5a59eab2b"
  },
  {
    "url": "assets/js/37.2dee7df3.js",
    "revision": "64d99499e4d42dfd67b216fd341adce1"
  },
  {
    "url": "assets/js/38.3f95c73b.js",
    "revision": "7ce5b194787ffb440cd5ce06c358e7f6"
  },
  {
    "url": "assets/js/39.a420c21b.js",
    "revision": "a4231d420b3fca0dffc54319f403f53c"
  },
  {
    "url": "assets/js/40.887c5396.js",
    "revision": "f9ad80ad55a226e368589ba04d8f44b0"
  },
  {
    "url": "assets/js/41.f37a2cff.js",
    "revision": "c9ef1b546bde72363dd7ccd6757b1304"
  },
  {
    "url": "assets/js/42.bce847af.js",
    "revision": "6d82056bbe8b16ee8fdeb7144289c575"
  },
  {
    "url": "assets/js/43.043998c2.js",
    "revision": "9ee28d81326e472af4655b6d1a005aa0"
  },
  {
    "url": "assets/js/44.3041ca21.js",
    "revision": "bf86f4f043f70782c816c3fc97443919"
  },
  {
    "url": "assets/js/45.54087af1.js",
    "revision": "0686a33d7a2708e63d17ba6cc6042a2a"
  },
  {
    "url": "assets/js/46.8c56343c.js",
    "revision": "6b37f39357ec3153ffdeeac7d9192516"
  },
  {
    "url": "assets/js/47.4978f3c2.js",
    "revision": "70c9d625ecc4ee2c87fd567dfa60576c"
  },
  {
    "url": "assets/js/48.9a18071c.js",
    "revision": "0db2a72bdae65fcf338e4c544f30d2f6"
  },
  {
    "url": "assets/js/49.0b16336c.js",
    "revision": "255a57ac2b2ac5e7474caa088292f834"
  },
  {
    "url": "assets/js/50.9e781ea3.js",
    "revision": "97092c73b565b9fd544d70d186b673dc"
  },
  {
    "url": "assets/js/51.70b0c8b2.js",
    "revision": "60c62e6911c8c29132e3354ee3cd7b75"
  },
  {
    "url": "assets/js/52.cf347cf0.js",
    "revision": "b5da7d2c3c91dc606b21c9c6de9d85ad"
  },
  {
    "url": "assets/js/53.b03fa5ce.js",
    "revision": "8e15a935a779750e693758b7c41df46b"
  },
  {
    "url": "assets/js/54.905928a8.js",
    "revision": "62f8d79f9c4b273eb2586c9fa0d3a996"
  },
  {
    "url": "assets/js/55.fab36b3f.js",
    "revision": "405fb89188ad7d36556e6e0e2ca172df"
  },
  {
    "url": "assets/js/56.1cf72411.js",
    "revision": "18863c83fad6c6366159d11c3ea8f54f"
  },
  {
    "url": "assets/js/57.ebf0a614.js",
    "revision": "ee94e372446688f4517e42bafeea399a"
  },
  {
    "url": "assets/js/58.212994ea.js",
    "revision": "669c38786123955f8ad3ab4b6ccf3a23"
  },
  {
    "url": "assets/js/59.3c0eb4b9.js",
    "revision": "0a81d2615a25e8214e49cc4e34d61474"
  },
  {
    "url": "assets/js/60.ba67800f.js",
    "revision": "def77edf6ed8a6e6bb0eabcac6ad4db6"
  },
  {
    "url": "assets/js/61.576baf42.js",
    "revision": "8cc41aad6518ec8ac0098431a7e4507d"
  },
  {
    "url": "assets/js/62.a161919e.js",
    "revision": "63e970f87b8b3a647c4812ac6789d74c"
  },
  {
    "url": "assets/js/63.27dc39c0.js",
    "revision": "9798b6ea4fe081af4be411142447ac83"
  },
  {
    "url": "assets/js/64.76ed5a25.js",
    "revision": "254a63c833b08e557c05658c765fa6bf"
  },
  {
    "url": "assets/js/65.7afe87ed.js",
    "revision": "fe356c1bfe70223a60fe54a54fe62160"
  },
  {
    "url": "assets/js/66.e1896d64.js",
    "revision": "6a6ffe6ac751344067835cb5087ae265"
  },
  {
    "url": "assets/js/app.7687b9df.js",
    "revision": "58d0246cafa688dad56ed3a51ef09540"
  },
  {
    "url": "assets/js/vendors~aplayer.f96278d0.js",
    "revision": "a5046089a29d6a2f6d492fb5aa6b8b21"
  },
  {
    "url": "assets/js/vendors~artplayer.a9db8d7e.js",
    "revision": "fc2f3c97d3caf77467770e71cd367f8e"
  },
  {
    "url": "assets/js/vendors~dash.a7433c80.js",
    "revision": "280ab8edbde240337ea6284d6ac0aa54"
  },
  {
    "url": "assets/js/vendors~dplayer.c29ddcb1.js",
    "revision": "78cafe016960b8f09bb209857865f6b6"
  },
  {
    "url": "assets/js/vendors~hls.0e6be8f9.js",
    "revision": "432a14d5de1457ffc31e8226bd0e5ad2"
  },
  {
    "url": "assets/js/vendors~mpegts.749d0941.js",
    "revision": "005eca03ea0078de9bf5c3ef83987c22"
  },
  {
    "url": "assets/js/vendors~shaka-player.e0c261e1.js",
    "revision": "e975ee23b74e1a0bdcb8eb27ff450a2f"
  },
  {
    "url": "assets/js/vendors~webtorrent.537bb66c.js",
    "revision": "4e5a9f4ec5abb7ba4696527705cace21"
  },
  {
    "url": "categories/index.html",
    "revision": "73a882bb6b673babb739e54badeef508"
  },
  {
    "url": "common/core/index/index.html",
    "revision": "a192e27635f33ee7f06997b678be69fd"
  },
  {
    "url": "common/core/p1/index.html",
    "revision": "ca5bbc25274ec6e951694d8a45e34ccc"
  },
  {
    "url": "common/core/p2/index.html",
    "revision": "10fae02837c255bc24cb3b22dcee2e71"
  },
  {
    "url": "common/index/index.html",
    "revision": "9b8d2b17d66a532bbf252eb468f94ec3"
  },
  {
    "url": "common/plan/index.html",
    "revision": "7f0bb851a0396a55fa239c3efe0c05ac"
  },
  {
    "url": "common/roadmap/index.html",
    "revision": "f5c347f123731a403fb83cd79f91e015"
  },
  {
    "url": "example/index.html",
    "revision": "5f8f80145cc6ffe9a1eaeaa95fb55f94"
  },
  {
    "url": "example/index/index.html",
    "revision": "1690c009da0cffd189b7febe6f26d5ce"
  },
  {
    "url": "example/plan/index.html",
    "revision": "6e7973a708df74d1a48ab376cd90fefa"
  },
  {
    "url": "example/roadmap/index.html",
    "revision": "fe3b0db35467d2edb3cc788eb0843cec"
  },
  {
    "url": "fastest/core/index/index.html",
    "revision": "182628a34de4221d023d8e18d9c9ea42"
  },
  {
    "url": "fastest/core/p1/index.html",
    "revision": "b3b99f9f2e0cf0a323a7a74d9dc1b7d7"
  },
  {
    "url": "fastest/index/index.html",
    "revision": "0a84b570affde8d30ec1a686546ac02c"
  },
  {
    "url": "fastest/plan/index.html",
    "revision": "0ded9b10b35846ec88689cca9c0af402"
  },
  {
    "url": "fastest/roadmap/index.html",
    "revision": "f3154c273d40bfe7c8f1909dafa54e42"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "25405150935a28b791dc150dfd9be649"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "1bf55dfe3cdbcb7c3d3ae83fed69f12e"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "16117966a025333921bb2007625cca54"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "7fe107bbfb497b17c974939871658b18"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "88887d18da7671792f40afab4a252f1d"
  },
  {
    "url": "img/logo.png",
    "revision": "9a3a17c60c2179d1f019498b4af7df0b"
  },
  {
    "url": "index.html",
    "revision": "c06e9a234c22d3bc83362633fb6f62cf"
  },
  {
    "url": "polyfill/core/index/index.html",
    "revision": "6e66e1d7290f4caac43e3ac9b870fb20"
  },
  {
    "url": "polyfill/core/p1/index.html",
    "revision": "baab881fd124260260b4021f3305abfe"
  },
  {
    "url": "polyfill/core/p2/index.html",
    "revision": "48b098e095a7cea78726a9395e74e2a2"
  },
  {
    "url": "polyfill/core/p3/index.html",
    "revision": "5e847de2b0861740d86d489f6281916c"
  },
  {
    "url": "polyfill/index/index.html",
    "revision": "1ef6b0f7787082a0d621732f04fdbaad"
  },
  {
    "url": "polyfill/plan/index.html",
    "revision": "0899f82d594d884c5696796d5ddba7ae"
  },
  {
    "url": "polyfill/roadmap/index.html",
    "revision": "8bf8ecb8c6c5f59b2e8c1ac3e327b4ba"
  },
  {
    "url": "snippet/core/index/index.html",
    "revision": "2c276040556fa66e5cfdf3b86090e30b"
  },
  {
    "url": "snippet/core/p1/index.html",
    "revision": "ec61c08ca89ae201cfac851ea82a9b9b"
  },
  {
    "url": "snippet/index/index.html",
    "revision": "a5d14320ed7b9b32ffe91b2c3a32f7bc"
  },
  {
    "url": "snippet/plan/index.html",
    "revision": "acb9ee4c41de7bc066798892fe423848"
  },
  {
    "url": "snippet/roadmap/index.html",
    "revision": "7b561556bbec2cff8604130a1a9510ac"
  },
  {
    "url": "tags/index.html",
    "revision": "5cf0edd18a8fdc0f8bca4258f3c1c3b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
