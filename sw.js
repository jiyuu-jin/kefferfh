if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0f713082.db66848f295b9b03d341.js",revision:"9e06edfb15e0c2bd3e928b7fe8c05fcb"},{url:"/_next/static/chunks/5ab29ca5359ed918c61b8c034749df395184ae27.3f68e5542a55bd61538f.js",revision:"657a86334d591159dfa5b5214de7b25b"},{url:"/_next/static/chunks/b637e9a5.6a6e8ff77271ba50f6cf.js",revision:"8ec07a326314bb4185b25373bdbb66f8"},{url:"/_next/static/chunks/commons.136473f176143783e714.js",revision:"364849e59b6cf0bf2b10acff611a0020"},{url:"/_next/static/chunks/framework.ea5d6f7a7099b14097ba.js",revision:"2fad19a1c024b5911479a0ff5588caa3"},{url:"/_next/static/chunks/main-0b936684911f0d15adf8.js",revision:"fa32ba66d8e871d2df75da9b005b51db"},{url:"/_next/static/chunks/pages/_app-f5a03ad64e07b088c0f8.js",revision:"3440790de9264f84d241747f9aae604e"},{url:"/_next/static/chunks/pages/_error-a6322227436c2cab74f9.js",revision:"ebc7ab6a47d6c9ae03b955136d2b2ef7"},{url:"/_next/static/chunks/pages/about-97d68c55799a68c5a814.js",revision:"1553f9ca36efb81394121d40f6ec2bc9"},{url:"/_next/static/chunks/pages/cards-7727a78ac9ad1de9ae0b.js",revision:"a9e256ce8bd90ef5f480c285eb1e4932"},{url:"/_next/static/chunks/pages/caskets-1955d48bf2302835fa68.js",revision:"e81083dd5f4e599ded85a04256a32f98"},{url:"/_next/static/chunks/pages/containers-823735de20a0c20b2c07.js",revision:"a3384d573e684306f7b136a09cb93539"},{url:"/_next/static/chunks/pages/cremation-67f153accb19941171bf.js",revision:"428389703816b184f58f7b5851df2814"},{url:"/_next/static/chunks/pages/florists-8dd92bf4e728087570e6.js",revision:"9cc46159e38b07d044b6de1d6f3a109d"},{url:"/_next/static/chunks/pages/funeral-086eb510580ef74127a5.js",revision:"13b114fa0c4bc5befb7ec7071a9f3cd8"},{url:"/_next/static/chunks/pages/immediate-burial-52d56fbf23a1fc0d50b5.js",revision:"cdc62957ce09c896a2360a0f1e36cb3f"},{url:"/_next/static/chunks/pages/index-568cd6cffe35cd10a70c.js",revision:"db1100ac9366af02f521c7f4cd5987e6"},{url:"/_next/static/chunks/pages/prices-cee844b092882646facd.js",revision:"13e28e8a7bad8963ea5a4359b197d4a5"},{url:"/_next/static/chunks/polyfills-0f7f0f508d490b5a473d.js",revision:"8f44e0698587becb11ef6f9d6d6e6677"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/d8018b17c7de5328bf9b.css",revision:"15831f2e35687c3f33b822d1172f4f7c"},{url:"/_next/static/wlwpiyL2NMJ-jGaPW6jxY/_buildManifest.js",revision:"a42b221abfe2b145f9ec2490857d2f25"},{url:"/_next/static/wlwpiyL2NMJ-jGaPW6jxY/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/images/2018.jpg",revision:"3f4eb015d476ca8fe7f8d74e891ce03e"},{url:"/images/Grace_Keffer_Ireland.jpg",revision:"eeee274aa378c4d9253f0e7fbbbccf41"},{url:"/images/Patrick_O_Brien.jpg",revision:"29a0baa8a0d4a68506d134dad7e2e36a"},{url:"/images/award.png",revision:"589d3f602a5222afc99b21aa82720434"},{url:"/images/background2.jpg",revision:"660f3abfcc0d2cf9d5956bb396e774c9"},{url:"/images/burial_container.jpg",revision:"23860795925c21b17d6333b482de49cf"},{url:"/images/cards/card1.jpg",revision:"c7077b077278a8dbac3d10e9f38e96f5"},{url:"/images/cards/card2.jpg",revision:"882784dd8c019af03cb5decac65729ea"},{url:"/images/cards/card3.png",revision:"0ac874d266d607f43c79c156c7a131ff"},{url:"/images/cards/card4.png",revision:"915fe82a534299dd092342d554857c6f"},{url:"/images/cards/card5.png",revision:"aebb427083dba7f97b7aaf200cebcbd9"},{url:"/images/casket.jpg",revision:"034ad03ad907d8afd8c10ece167994a2"},{url:"/images/caskets/abner.jpg",revision:"04a0e05b410ec2322857c3eb60877b0e"},{url:"/images/caskets/abner.webp",revision:"e0220366eec241c1e6f133c93eac7816"},{url:"/images/caskets/andover.jpg",revision:"69275bedd63784752660abcf0fa02256"},{url:"/images/caskets/andover.webp",revision:"8d74a9591161248ca9fe0ae7ff008da1"},{url:"/images/caskets/ashland.jpg",revision:"2020f05e35c3a52fcddbb7cac4770b48"},{url:"/images/caskets/ashland.webp",revision:"13979d9a3f871dbe862be675edcca6a8"},{url:"/images/caskets/atlantic.jpg",revision:"aad0820d34e46e11395ec13b28c88e4a"},{url:"/images/caskets/atlantic.webp",revision:"d11359ee24ca2f0f9ac217cd251f8f3c"},{url:"/images/caskets/bellevue.jpg",revision:"67ef09b3eeae30d9ea1f2188c6a49055"},{url:"/images/caskets/bellevue.webp",revision:"a91c36c31289de05d63c9f8ebac4aa2a"},{url:"/images/caskets/brandford.jpg",revision:"9fc774719c97bd0fca78c1047ae438b9"},{url:"/images/caskets/brandford.webp",revision:"ce7ab48d2a17ec2f7b163312ff1f34e5"},{url:"/images/caskets/cameo.jpg",revision:"f1e43e4e35bc1810fe5e3cace1e1f551"},{url:"/images/caskets/cameo.webp",revision:"a3d2c8a9e7cfa64c9868cabe381f0d94"},{url:"/images/caskets/cameron.jpg",revision:"0284f687de38204d9fe887eca19d813f"},{url:"/images/caskets/cameron.webp",revision:"fe41deb74a24d85d7449633d16a2eed4"},{url:"/images/caskets/christian_2.jpg",revision:"5f61231d42268965b79c48c1ae1ac510"},{url:"/images/caskets/christian_2.webp",revision:"11c9c83bb2be22436325688001e3815b"},{url:"/images/caskets/classic.jpg",revision:"5d5a15159868601e5c3f89d178a5c160"},{url:"/images/caskets/classic.webp",revision:"bdbc8f4357759a71123ff9178eb3981e"},{url:"/images/caskets/coleman.jpg",revision:"da8552a08802ccd4d83ad610c5ac37a4"},{url:"/images/caskets/coleman.webp",revision:"9c7acbb7c26014f801ed1a380ee33c87"},{url:"/images/caskets/going_home.jpg",revision:"c21035a7a3e1e6cc0ef4dd2df8a997a4"},{url:"/images/caskets/going_home.webp",revision:"d5cd2928741ed36f8ecbb66fe3d8d278"},{url:"/images/caskets/hamilton.jpg",revision:"86c067901154e3f5ac819668d43a9616"},{url:"/images/caskets/hamilton.webp",revision:"e47df0b21428d354f6274254d5567604"},{url:"/images/caskets/hearthside.jpg",revision:"cf891e255116826a7507dfa2021de50c"},{url:"/images/caskets/hearthside.webp",revision:"f275d54d01fc10460f768c8de9b9a5d0"},{url:"/images/caskets/lexington.jpg",revision:"5c5d15436a68e10ccff0db7a39dcb825"},{url:"/images/caskets/lexington.webp",revision:"82b2b60d6ea130699dd811cbcf38bb42"},{url:"/images/caskets/lincoln.jpg",revision:"e9b314fc5a876e1637706b9a9ab86150"},{url:"/images/caskets/lincoln.webp",revision:"019b9eca97608bd404f9ec51d22e1194"},{url:"/images/caskets/livingston.jpg",revision:"5aa64709bcd0cfec6b3f07777c119bb8"},{url:"/images/caskets/livingston.webp",revision:"e88537bceab30e215e932f0e84bbe7a5"},{url:"/images/caskets/mansfield.jpg",revision:"c12d5a33e3c859e27fefceeeec75a0cd"},{url:"/images/caskets/mansfield.webp",revision:"1cfa53a16c0fd54b08e16b6c01f9d43f"},{url:"/images/caskets/monrch.jpg",revision:"6c0038d211721ac92ce1c4c1ed512d9c"},{url:"/images/caskets/monrch.webp",revision:"3f1c96929baa6848c7164c7daa69391c"},{url:"/images/caskets/newport.jpg",revision:"5036a89ccc9b622a81506385a54729e8"},{url:"/images/caskets/newport.webp",revision:"3f4570b985c587aef4d036acc2211d14"},{url:"/images/caskets/olympus.jpg",revision:"6084f10784fcb8334a954c761f61b2c6"},{url:"/images/caskets/olympus.webp",revision:"9c1dc64d2b298ddad34ae9b3c4c903dc"},{url:"/images/caskets/pearl_rose.jpg",revision:"2597a6cc4b410270dc90efc3cd0ce5eb"},{url:"/images/caskets/pearl_rose.webp",revision:"905e3ab7f105882805a5d91948864677"},{url:"/images/caskets/pieta.jpg",revision:"b914020a4cd38999b5d3529f3bcc3830"},{url:"/images/caskets/pieta.webp",revision:"2c25a201fa6aa31a992f6b6e145850a7"},{url:"/images/caskets/portland.jpg",revision:"ec2d3c497298f8db3aa35e58f9727d27"},{url:"/images/caskets/portland.webp",revision:"7ccadb4313d184f626a2fe36e7a70d23"},{url:"/images/caskets/provincial.jpg",revision:"b9b3395bfaae6b0818772082e6876902"},{url:"/images/caskets/provincial.webp",revision:"acf5dea5885bdde3b6e88a434cc20fba"},{url:"/images/caskets/ratlin.jpg",revision:"2686c923d9cb667a915545312f253eda"},{url:"/images/caskets/ratlin.webp",revision:"0bdf1d22a5409c6e199c3ab9a847de05"},{url:"/images/caskets/richmond.jpg",revision:"d42bf1f6b89140aa1eed7ccba10fd6ed"},{url:"/images/caskets/richmond.webp",revision:"28580f7f215fe399733b9cda277f8536"},{url:"/images/caskets/sandhurst_2.jpg",revision:"b39723e48b311a5ee179bf50fd736d54"},{url:"/images/caskets/sandhurst_2.webp",revision:"5ecb9c50add4a8ea7e9aa7b3ab5e12d3"},{url:"/images/caskets/silver_rose.jpg",revision:"49eedcb1b680fb3910ef1d25375b5f72"},{url:"/images/caskets/silver_rose.webp",revision:"448ab34f3a7c980425a6964ec1bf3ca8"},{url:"/images/caskets/spencer.jpg",revision:"177ecd17cc25b8bff32339e553e6c85c"},{url:"/images/caskets/spencer.webp",revision:"97601472c938be1d8d86ce76487d58f4"},{url:"/images/caskets/sterling.jpg",revision:"2d0b9f0943f792fd3153a575ddbf0eec"},{url:"/images/caskets/sterling.webp",revision:"1919995a8b6ed0fae67e39737e04b7e5"},{url:"/images/caskets/union.jpg",revision:"a521a489f64a03c5583012f8f1a11232"},{url:"/images/caskets/union.webp",revision:"77eb55a9efab17a376caddba505d8803"},{url:"/images/caskets/warfield.jpg",revision:"281dd71ff5eb978d874e0e3137ba5909"},{url:"/images/caskets/warfield.webp",revision:"fa6dac21a60700d06a63c24b04fdcc0e"},{url:"/images/caskets/whitmire_2.jpg",revision:"e1afb588e7f022a8d98ae156e0855d99"},{url:"/images/caskets/whitmire_2.webp",revision:"9729ee9a10ceac5b66c1162661314c06"},{url:"/images/caskets/winfield.jpg",revision:"860842df312380fffd719b4ebef5c99e"},{url:"/images/caskets/winfield.webp",revision:"02faba44a7f1cbb321cd3af6254a983f"},{url:"/images/containers/bronzetriune.jpg",revision:"de71db36792872aa9ba2db8632551088"},{url:"/images/containers/bronzetriune.webp",revision:"a25b2e35bad4cf1a23829d8aecdcae03"},{url:"/images/containers/continental.jpg",revision:"c7e2c6abc97154026ba2dad7bfd1df38"},{url:"/images/containers/continental.webp",revision:"0fe2a9c2aba937194be0e03df61d2731"},{url:"/images/containers/copper_triune.jpg",revision:"9ee59aa0ef001ea022c4f62f4821f59f"},{url:"/images/containers/copper_triune.webp",revision:"375652021c8251a9f1c201486ae8ef0d"},{url:"/images/containers/grave_liner.jpg",revision:"d038a9544301650a5de0211c66b51f43"},{url:"/images/containers/grave_liner.webp",revision:"5b8a2885ce5aa7a9b2cf55b972edda12"},{url:"/images/containers/monticello.jpg",revision:"6f94beb372c2ff1b4f756f4231658203"},{url:"/images/containers/monticello.webp",revision:"68227f17f86ac6c89dcdb4992055ad9a"},{url:"/images/containers/stainles_steel.jpg",revision:"a850ab5f557e6321be9091ba1de52652"},{url:"/images/containers/stainles_steel.webp",revision:"1c3c479f0bbd79b42fcccb8a9af97cdb"},{url:"/images/containers/standard.jpg",revision:"e150e2cd3a939d84179281dd12082a7d"},{url:"/images/containers/standard.webp",revision:"bf765430ca75d7eb5ed799f5b0b8d460"},{url:"/images/containers/venetian.jpg",revision:"9cac8bf7550d7c0d97323fddaa274efe"},{url:"/images/containers/venetian.webp",revision:"d62f3e05cf3cf12268ef4cb665b61442"},{url:"/images/cremation.png",revision:"c4375ed1522738d5fc2c7e4954ba8102"},{url:"/images/crematory.jpg",revision:"97eda1b8f847b49049cfb8dfa4c277c8"},{url:"/images/east_york.jpg",revision:"3edc70fceb13d0c52baf3ebfe84a84ef"},{url:"/images/george_curilla.jpg",revision:"7b036e27f0d550585d768616d1e7bb5b"},{url:"/images/john_keffer.jpg",revision:"e353895430df64735a3c73d37bb55b5c"},{url:"/images/john_keffer_2.jpg",revision:"5d5d3a83700f24cdeff3c51868cc683f"},{url:"/images/joseph_keffer.jpg",revision:"7669d73a5caa0ec47aa99689e61fce2f"},{url:"/images/kevin_sandmeyer.jpg",revision:"1c65e80bae49bf3860f5c1eb948335c5"},{url:"/images/logo.png",revision:"35bde102d93df70eaa65f48b4909e44f"},{url:"/images/prayer_card.jpg",revision:"e7d3aa458005b2ae4430030e7c95f79b"},{url:"/images/robert_ramsey.jpg",revision:"c1cb2510d69d390bd80a56ad05089b57"},{url:"/images/sean_pelkey.jpg",revision:"e4b70b9b8437caad3696d7d0360ac3be"},{url:"/images/secure_choice.png",revision:"8c4457d068d67a0e966d5cbb3376a5d5"},{url:"/images/stock.jpg",revision:"72532959aaa84038664ea99bcf725f5b"},{url:"/images/urn.png",revision:"935c35343dda0fae7c8e675f3af60ced"},{url:"/images/west_york.jpg",revision:"d96cf681c42f57cf7877d56b07ef52ca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));