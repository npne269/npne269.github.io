'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dc8af8f9f25ec83da0986abc8b8a5a75",
".git/config": "8f13502cf023af972ecbd9261915a6ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bb900f4b63f132b7bce370a1cdb31285",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60876adde7d8fab39b7b803ca93bff42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4dcfaa6222dac25abe78cd8e902d008",
".git/logs/refs/heads/main": "41ced87a6fe2cfd63cbdd08c94dd5b35",
".git/logs/refs/heads/master": "f9bde45a529ffe91258d34b1c7a07005",
".git/logs/refs/remotes/origin/main": "015af4986bfafe637a21ff276ed5d68b",
".git/logs/refs/remotes/origin/maina": "246c5b80a7e580032e7cf811116327bf",
".git/logs/refs/remotes/origin/master": "2f74f35e425d7344e986128ecbadab56",
".git/objects/01/99a7ad73e5c32442e4bf924244197441380b55": "d2c5027995426389225a12bd6189c5dd",
".git/objects/01/b12fefd392a0f69527b495a309a822758b76f1": "dcf5e29e702ebc0be9124c56981b976b",
".git/objects/02/7f1655165643a77831960e5973da7c11d46fb2": "dcf8ca9b7b2100841a95b32f736125fb",
".git/objects/02/d784b1ab1151d5a6ab95b5be7d3e017ecfc156": "cd18febfb3911a3ce93f84d2bae6f465",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/8a638815ceae6685dfd2d4cd111892d8e94cfd": "ce1f6ef21ed380ec585ef001ea6532e4",
".git/objects/07/3c58d28ec58fc0d975cdaa0ad027afb53ef6ff": "2a19002d3baf5736e671e29d587e137a",
".git/objects/07/c6cd22840ab85447e8ad122e26cf75dab2fa06": "88d8ad44d48451f74ea4e44160208d46",
".git/objects/07/fbf17c4fb38c3d378f1a21d3a6fc205d8468a6": "82074e1ec6048c7188baf4c36a8d0cdc",
".git/objects/0b/4cd85311698ee3aa24273f8b0c48ceecffcbf3": "1fe66867b35686cb04ec953ff9bfea97",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/5851c61e20d1bfe89cc1e1ca9414a63bc6e020": "14feeb9694c88c40cd0e3ded36c65076",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/10/404d43deb5ca749d633ef7400b7f08e4346399": "ebea7148b924dd5aa630525a0ed96777",
".git/objects/10/ace3e9391f3b16957f0b28d55ea2e7152af61a": "a1bbc9afab2d58f20884e2ad177e2363",
".git/objects/11/f83c7e0131e80c7cc983cf8a7aad1ad5773454": "6de7aef5b87d87a39a786dd44c816067",
".git/objects/1a/01b17d8ec5f58098b1cbcb90892567b180b84a": "63c2bd0a83f9a61fae1bd91720d0b8a0",
".git/objects/1d/0b27fd77fc63cab54269e408b83b1459462ebb": "ff62b5f88706d99edd3b33a79e4dc107",
".git/objects/1d/2dc82037128a1cd997c86652cd7c06fcaf5af6": "7e4637b6074f032a9de12dc260321e69",
".git/objects/1d/8507a294be846d7c51b805845ef6b13ecfda5b": "b71c3e166c3cfcba043b498bda2c4926",
".git/objects/1d/8b1759fa508a77b34458e1499ec5feee44a5cd": "4d30d726617ddfcfb5086eccc5535228",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/7c787c31a48e674de056a6dd88944f1f7a4dc7": "bbead45b6e3d228cfff0d85046fc991e",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/fda65f1448a52b7202f0d327ecdf0bad6d4465": "51900719c179d890ea526f0405ba4a09",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/194f3191b66f01ebb0117e95992ddbda984bca": "4eb0deb2edcbc0e200a5c3621bb3791f",
".git/objects/28/81b23c26fc9504499cbed6a3dae5a25dfea403": "21731f718aea45c4c70de44b6a230850",
".git/objects/29/10b920b47d131932ebce1e13d26e006df37090": "6386b75f28cdabbc960ba175c826c0ca",
".git/objects/29/cddb3408dfa0c98fe3a36625f6179684fd3657": "2968545dd6a456d395fedd9d7fd58041",
".git/objects/2e/606fea9fce92223b210f5b25caedb6b36ae6ca": "0c592dd9e1e49b1d2ea56e61bb8d089d",
".git/objects/32/b2407f18ce5d045173afcde7a6fb2734ca88f0": "bafde914e8843c5c08ba7f67733fc3d4",
".git/objects/32/c0e407c5e5249f510387558781bc82854090eb": "398dc026068151bb1abb270df1f3e101",
".git/objects/33/f5efd97662272cb22fb2ecc975d462d0e262cc": "2395a6ce0c18e75d2148d2da4bbe9862",
".git/objects/35/563baf9bc3af9e57cd8d486b6097de0f776bbd": "2eabd59bf06699d89cd1e5e7961262a5",
".git/objects/35/57d1d1ed7409b2ed5660cbfbca1280973e169d": "41400304aefbb1933e07f41d44e8132d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/a08c2b1c3f283b7a369c3ffae6ae2bacb2ea6e": "4b2fda5135d6d83515155dc03cde5d7d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/26c073977d22b542d60a23981234665e024e38": "321b284a15077e3e448a5beef02a612f",
".git/objects/40/f48bbd5539397b6e55472f0807ddd6a0482da2": "d41a3c0d31c95ac3353da6add403eaf8",
".git/objects/45/ff9a4e9c898f19b948c4c5572aad3f703d2287": "94da3eca1c8da421e4d31b9588452ab3",
".git/objects/47/aab5cb06487354b1e21d53b8ebcdf41432a7b9": "271140d7124791d4ed74c47606cbd1ef",
".git/objects/4b/6368eb08c858281ee4be1e045537543ede64e9": "99fe1316350fdf4cba7a97cca4d903fd",
".git/objects/4d/b533c86f217ae634a9f2cb87915735241ca4f9": "ecaa411b3f6f87d53a8aabdf170a7ee7",
".git/objects/4e/93f4b4a04e294ff4dbbfc3a0f90ef090640be2": "5845f9ba2c47f299487fda5af21a68ca",
".git/objects/50/87225890e62f0a2e0701dba64c99887865e8ec": "672a9bc7f3dff6a7ba332a78297a577e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/e1ed003418640e96b42995ebd9649d768265c2": "080db35a14add3fb13ba92d1afbfbc17",
".git/objects/57/e20b510b77a11c6234dc50cde027b9bcb9bf52": "0c5ca803d30a20833e7d7a50c0d7096b",
".git/objects/58/9c28685cf2b5b8d33cdb3da0d2aa5059ea5945": "44a716a2ac3af987e85c14d3e44263b9",
".git/objects/5b/ccb6367be5612013e15a4a74f025bab0c247f0": "dd220115bfe829da21a399432b4b5160",
".git/objects/61/7b95e7473a1e6ff69f07a616f0efd073990b65": "0dc97fd4d7424934d747be7af1411883",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/2b0aacd48478964c0e8c400595890e98b35fd9": "a9c27236eff6a1fe995e97811c4ea0f5",
".git/objects/68/730c992de52cc35cc8c0d9a566215e8432d095": "f2346a8b3ff07a2e141955960c143c51",
".git/objects/6a/333ed59dc769c050b144b5569439a1f4451834": "0df4e20e54f04cefc60a73020a131320",
".git/objects/6e/4faaf12ccaefad4529622fe9bd0e478f45a277": "2e1a0e7731e5d9c979bdd71af7854358",
".git/objects/6e/e7e247f53e772ed161b6c0f6d7b2c21f62f72b": "b6399994a6240207c6f181137fb08baf",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/8499e001ea09d39c416d9106e8335b04994bba": "a8bc1dd7b3bcd5c4ab2088c7fd391ca3",
".git/objects/76/ad34ba32d257ea175b5c4507683fee534bd6ea": "68fd70a147640d6b11fa82d9ce89eb90",
".git/objects/7b/ec49c915121693f6961fbb331e70cad178d760": "a83d9e073ce2eeeff91b611b35932c51",
".git/objects/7c/abb97058bd511bcff965c94f474e6fc958b8ee": "475c68c291a0a8dd5d5e1572c685ce50",
".git/objects/7e/946cd7bf92b9bcf5c4d658b0a0c27e3a0addd2": "4e79a225027c3e3c3f434deaa19805f0",
".git/objects/83/382e09b214e66c5582502cdcb8ed99574a0c83": "af96ad3ddbbd53fcd227de9e2d6247a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/38aca793e509fe19ffa0954f70538ee84075be": "5744b1b4ff3228b0fdbfa434edd8d773",
".git/objects/8d/da3832741861e19ceb078975819cea78c6ca78": "c35d03a88d5b7ce49dae3fe1e3e37b9e",
".git/objects/93/ddfd44d92527ec304db8bbc98e4da9143da914": "e53976b7c8cd3dc4d7ed44acf011477b",
".git/objects/9d/f5965a5d6934d2a9d6f5af9c92ce68f49de264": "6d6ad2bba12221f802e96e80cec414a4",
".git/objects/a7/e8f44d75ab7585f61ad313875a4a06c4ce7d99": "555152d46911e7f66ce0fcb9b90666ca",
".git/objects/a8/2b667b48e0873a2a5709071405793c688c666f": "fc7832e0658a6190f86bf08be5768915",
".git/objects/aa/2ee318f8d675bc8b29043681ea0856a8418373": "5b393e3257a7802370ee55e14494bf54",
".git/objects/aa/2fd99fcc6be8118b05777a0108124a1ba4c7b6": "47a9bc15e051b2129a0d0fe7a55a86b3",
".git/objects/ac/095089218d42fa765adc32c23caf59d2d70696": "f1ed46fb6d66842c7522461aae0260c4",
".git/objects/ac/28f97fdc7b71e72c77f6d28b625b248cbc9dd2": "b86149ad3c75274966251d7d5e0b2101",
".git/objects/b0/5b8212966f095ea099794cc6f2403ecf549364": "fc6c5e5342870ce8a286a0c8c6f451e6",
".git/objects/b0/cff010e00d0f1afc8891f61a43498bd3e9c47c": "2264d15903371f6e2b45f5d6fa3325a4",
".git/objects/b1/92f44ff56a3db35c8059cbf98a3287fbdf6740": "c63ef55866ca0629d5ce598625382348",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/792033560c7052319852b2a0e71c879062b43e": "c51fd4a5991fbd71ba5b796aac4081d8",
".git/objects/b7/3bccba54bb3123ba807b74f2c4fba854ca625d": "10087c6956b9e489c415ab99f65b289c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1de708005649d9a4cecc8048f1ee3993c30a5e": "86b7595e18f10d510d81c37d423f0c32",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/6854fdccd12c2d65f1902cd061f38423e5eaa3": "d7c0fd7c7a6fe1ab84ae3e0b5c420501",
".git/objects/bf/ec6a1b0502cf25c2c659d5e4d740b2de158c7f": "674c341d3f04fb7a3d5a63848a86245d",
".git/objects/c0/49101105421b466b50a51ccce6e3a755eed139": "78289dcb4e612ac895f0f05bbd4d6341",
".git/objects/c0/a981fef3d248b390bc065ad9ceda11f1276b5e": "0f0ccfec982f5d0807550ef911f6688e",
".git/objects/c8/d9e9346ecc8571eb41315cee8847eba4a64385": "34ba7c9125aed589a185625000623e2f",
".git/objects/ca/37cf69e0a6e00bbef94b71a12283e612092808": "b53b94059c041edac83bc0f2239e4b88",
".git/objects/cc/c073adbb49d26ce692bafc62d2126438b40b75": "73653d92a5248674cbcd0d1369648726",
".git/objects/d0/0c5d7e5304af5268c5f133256f78ba938cc284": "9234ca5549e3d5e2953cff006dccdbe7",
".git/objects/d1/0d6e27478ae0df20d3582da16948b8d79bb394": "de7e12dfd943359bc31146623180c577",
".git/objects/d1/8ec57c9de9eb4e45c70b19943ba6319e3ff20b": "890ffcd7062f2b1f4d916ebb287876d9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4fcdd615b13a40c6cae7235a3aa69f420008ac": "e7cbc6f486006f67fe3ed37cf1814b83",
".git/objects/dc/cad9a0cdd910d45834e3c34d070e433e897b51": "4157d69ce81d538e891e8816fd60ccc5",
".git/objects/e3/9a10dcc1aba78fcb4bcde8b5110acea47d54e8": "cc27ff439316bdc71ac8f4c753594bbb",
".git/objects/e7/2a4c11dc3deede000d5750e2601e9f2f1d6941": "884a24d1589af7c249016c0a4ab570d3",
".git/objects/ea/659c96528423b60ab6ddb211b00fccb2c4f3ae": "8aaf25db3a7d01ccf0d59d27d853dd6b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2d4586208ef3c85c3b456588b67c9bd8331971": "31d0b98559c16b9100b0e6c4af7d3172",
".git/objects/ef/c71a217e59c5a682d9b2d026ad83ad6476755a": "96b09b5b208b0c20acdc0dadccacd503",
".git/objects/fa/1bd1a57e2ac74975f941af89d876a0daa9eacc": "fc0bf24b565d348aba35b614ac4da382",
".git/objects/fb/bd3cd4683b7d76e7a958228fa177b46123e8df": "b01f525a346d074f76fce4852c1781e3",
".git/objects/ff/daca08d63c3f17f81213ae8a0bfd29b4717f00": "169d179c5f5a58b4f52afa9ff882bd9d",
".git/ORIG_HEAD": "66839882d803be3b0fda4b0452cc02b8",
".git/refs/heads/main": "66839882d803be3b0fda4b0452cc02b8",
".git/refs/heads/master": "1e1ded617fae494422638ec2f96b682b",
".git/refs/remotes/origin/main": "66839882d803be3b0fda4b0452cc02b8",
".git/refs/remotes/origin/maina": "e542fc9a001e1bf3821942b099effaee",
".git/refs/remotes/origin/master": "1e1ded617fae494422638ec2f96b682b",
"assets/AssetManifest.bin": "b7d4b28c0c2df88f8003327dfeccb54a",
"assets/AssetManifest.json": "53bf2c27306c22bc8cebbc9baad83ddc",
"assets/assets/images/background.jpeg": "2aad4b7de200935b2a25a9d73dc48e13",
"assets/assets/images/bg_earth_star.jpeg": "66f824068fdfdb889b4c1471b436d509",
"assets/assets/images/bg_full_earth.jpeg": "457d8cbd8caab59c5f0d6164b5c54d46",
"assets/assets/images/bg_half_earth.jpeg": "af4bc51e64d48cee49d471be292dd35a",
"assets/assets/images/bg_rocket.jpeg": "5aebe3dae20e2100f89ff6b76d5c375f",
"assets/assets/images/bg_semi_earth.jpeg": "c7de974efb33bf8e9ab0ba1235da45ef",
"assets/assets/images/bg_star.jpeg": "4e97c3227d6469302beb13e44c242f20",
"assets/assets/images/bg_stars.jpeg": "dcf5e6cc306ede36fb829c7666e93f43",
"assets/assets/images/landscape_rocket.jpeg": "6247526196e14ff5b47920c4591c3817",
"assets/assets/images/logo-only.png": "57bb93ecdc712ad770f540da91d7dabe",
"assets/assets/images/logo-white.png": "ac52e0a8429de81b6d182e3321e342fa",
"assets/assets/images/rocket.png": "e9df75107003fee959b8459b6330bd64",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3bbeac69bb24fd4e118d5932e8be1aa8",
"assets/NOTICES": "3b732a54ce594d0cffdfcb72feea34de",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "f31f2d2fbe2eb73a7a83927944f96202",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "6df8d1e9843cd9dcb95bd8b37d3e3cee",
"icons/Icon-512.png": "579c00aa094c6c5cd72a72e3fcd061e7",
"icons/Icon-maskable-192.png": "6df8d1e9843cd9dcb95bd8b37d3e3cee",
"icons/Icon-maskable-512.png": "579c00aa094c6c5cd72a72e3fcd061e7",
"index.html": "18f5f28344bfac2eadbe9ad9eff52144",
"/": "18f5f28344bfac2eadbe9ad9eff52144",
"main.dart.js": "ec38a602004449731e71cc6cc741ebde",
"manifest.json": "2fdc579068e40f74ff7a0d1f11292523",
"version.json": "e6418bf5b190360481ef1b3771f64a12"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
