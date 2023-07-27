'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "8f13502cf023af972ecbd9261915a6ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "58c7e89144967ab46dce3e67dbc96a90",
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
".git/index": "d12399e3ffaa06756af850b495fee325",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ade17cba45aec58a3e3522a84379a5ac",
".git/logs/refs/heads/main": "00e50901105a60000d235d7bde35c010",
".git/logs/refs/heads/master": "f9bde45a529ffe91258d34b1c7a07005",
".git/logs/refs/remotes/origin/main": "0f81bd9b07c9fb0d8704ad9f1947d270",
".git/logs/refs/remotes/origin/maina": "a31b34da495f5ce3de1f3366ff50473e",
".git/logs/refs/remotes/origin/master": "2f74f35e425d7344e986128ecbadab56",
".git/objects/01/99a7ad73e5c32442e4bf924244197441380b55": "d2c5027995426389225a12bd6189c5dd",
".git/objects/01/b12fefd392a0f69527b495a309a822758b76f1": "dcf5e29e702ebc0be9124c56981b976b",
".git/objects/02/7f1655165643a77831960e5973da7c11d46fb2": "dcf8ca9b7b2100841a95b32f736125fb",
".git/objects/02/d784b1ab1151d5a6ab95b5be7d3e017ecfc156": "cd18febfb3911a3ce93f84d2bae6f465",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/0448763a235257272030d770fd668e6223a676": "f8d4fab45759eb5fc6fca600286bc87c",
".git/objects/04/8a638815ceae6685dfd2d4cd111892d8e94cfd": "ce1f6ef21ed380ec585ef001ea6532e4",
".git/objects/05/fba74c6baf7f23c0892f3dddf8c70541690d67": "98e027d8471afbe15e1f4032058af94f",
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
".git/objects/1c/939dac57671483ba1f73d35cb61b04fd2db3d2": "e5663a2fc6f38931c5d6b9d6de13ae2f",
".git/objects/1d/0b27fd77fc63cab54269e408b83b1459462ebb": "ff62b5f88706d99edd3b33a79e4dc107",
".git/objects/1d/2dc82037128a1cd997c86652cd7c06fcaf5af6": "7e4637b6074f032a9de12dc260321e69",
".git/objects/1d/8507a294be846d7c51b805845ef6b13ecfda5b": "b71c3e166c3cfcba043b498bda2c4926",
".git/objects/1d/8b1759fa508a77b34458e1499ec5feee44a5cd": "4d30d726617ddfcfb5086eccc5535228",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/dc83eb4e1007ffabaf378edbf549cb137a93d8": "b0f4d89c69af269f453771652ea63e1d",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/7c787c31a48e674de056a6dd88944f1f7a4dc7": "bbead45b6e3d228cfff0d85046fc991e",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/fda65f1448a52b7202f0d327ecdf0bad6d4465": "51900719c179d890ea526f0405ba4a09",
".git/objects/25/b8ae2b858a3dbe0d82e5e9cb8d4374a7e9f2fc": "ae8816091d1f8283ba5172c63711b3be",
".git/objects/26/4295bf560198ced72666ff01ad8e485e87b234": "a98abe5fae194e88d128ac48f8471014",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/194f3191b66f01ebb0117e95992ddbda984bca": "4eb0deb2edcbc0e200a5c3621bb3791f",
".git/objects/28/81b23c26fc9504499cbed6a3dae5a25dfea403": "21731f718aea45c4c70de44b6a230850",
".git/objects/28/fc29891aa96334d9fe31185bca54701aad9a10": "f203e12f181ae697baf8d206d3ecb319",
".git/objects/29/10b920b47d131932ebce1e13d26e006df37090": "6386b75f28cdabbc960ba175c826c0ca",
".git/objects/29/cddb3408dfa0c98fe3a36625f6179684fd3657": "2968545dd6a456d395fedd9d7fd58041",
".git/objects/2c/31ec5bc52eef67e85bcdedc2f65ab98f6fa840": "5519b76cfcbe90bca8ca9bf78b540e67",
".git/objects/2d/067740f6e4ef107e996c35d43f27effb853a09": "ba91ca936e4d2067c89997a76b6d7036",
".git/objects/2e/606fea9fce92223b210f5b25caedb6b36ae6ca": "0c592dd9e1e49b1d2ea56e61bb8d089d",
".git/objects/32/b2407f18ce5d045173afcde7a6fb2734ca88f0": "bafde914e8843c5c08ba7f67733fc3d4",
".git/objects/32/c0e407c5e5249f510387558781bc82854090eb": "398dc026068151bb1abb270df1f3e101",
".git/objects/33/db489729d8d9c00429a67c4a732698dff1e380": "c67a21c454a16d37b61d957dc61f0b4a",
".git/objects/33/f5efd97662272cb22fb2ecc975d462d0e262cc": "2395a6ce0c18e75d2148d2da4bbe9862",
".git/objects/35/563baf9bc3af9e57cd8d486b6097de0f776bbd": "2eabd59bf06699d89cd1e5e7961262a5",
".git/objects/35/57d1d1ed7409b2ed5660cbfbca1280973e169d": "41400304aefbb1933e07f41d44e8132d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/a08c2b1c3f283b7a369c3ffae6ae2bacb2ea6e": "4b2fda5135d6d83515155dc03cde5d7d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/7d1cb87704c35498b4dc91e7c9b0c04a85dfec": "94ba3cbb86407221f6c0ee3d296f0f87",
".git/objects/3e/26c073977d22b542d60a23981234665e024e38": "321b284a15077e3e448a5beef02a612f",
".git/objects/40/f48bbd5539397b6e55472f0807ddd6a0482da2": "d41a3c0d31c95ac3353da6add403eaf8",
".git/objects/45/ff9a4e9c898f19b948c4c5572aad3f703d2287": "94da3eca1c8da421e4d31b9588452ab3",
".git/objects/47/aab5cb06487354b1e21d53b8ebcdf41432a7b9": "271140d7124791d4ed74c47606cbd1ef",
".git/objects/4a/0b8222b5a0825da4c582ecce0870f9fa565dc4": "810738bedad823dfb93e203dc7fce500",
".git/objects/4b/6368eb08c858281ee4be1e045537543ede64e9": "99fe1316350fdf4cba7a97cca4d903fd",
".git/objects/4d/b2358692c357f2b0399d1bf4cd1841a5e85883": "33585b5b831b7715476be6c35821e6d9",
".git/objects/4d/b533c86f217ae634a9f2cb87915735241ca4f9": "ecaa411b3f6f87d53a8aabdf170a7ee7",
".git/objects/4e/93f4b4a04e294ff4dbbfc3a0f90ef090640be2": "5845f9ba2c47f299487fda5af21a68ca",
".git/objects/4e/ef61b7c81fbe04b279b7ea1f0d4fb4d64d07b4": "fdc80895c6de4be970ad25fbd2a823be",
".git/objects/50/3e06a70119b38f538a3c0373c781b949e84ced": "20cb6daf2fb4e4e042845dcc19c04255",
".git/objects/50/87225890e62f0a2e0701dba64c99887865e8ec": "672a9bc7f3dff6a7ba332a78297a577e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/dcd08159ac612aca9f17ecc9b105094d098be0": "47c9d1b0438efe635d96762a6b63f2d9",
".git/objects/51/e1ed003418640e96b42995ebd9649d768265c2": "080db35a14add3fb13ba92d1afbfbc17",
".git/objects/56/3d7985eed5fdbcfed80a9220a38c1884cb8619": "b33a0a7301008f725787bc417a0fe81a",
".git/objects/57/e20b510b77a11c6234dc50cde027b9bcb9bf52": "0c5ca803d30a20833e7d7a50c0d7096b",
".git/objects/58/9c28685cf2b5b8d33cdb3da0d2aa5059ea5945": "44a716a2ac3af987e85c14d3e44263b9",
".git/objects/5b/ccb6367be5612013e15a4a74f025bab0c247f0": "dd220115bfe829da21a399432b4b5160",
".git/objects/5c/97cc9243086729b42987d9ecc08368a750ed86": "b31644f36771287e5d48e2325ff2aab7",
".git/objects/5d/69706d186ab5931538d5005a6241709de6e08c": "f313298bdccdf02dd37495d603b4e4b2",
".git/objects/5e/1d3bcd498136023ce9dfb23875e92bb12907bf": "a2c41a2977506c589943d63286a54edd",
".git/objects/5e/e0267f6220572420448489310360a6b887d2a6": "2f904812ce0b5aa7523014be62c17281",
".git/objects/61/7b95e7473a1e6ff69f07a616f0efd073990b65": "0dc97fd4d7424934d747be7af1411883",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/2b0aacd48478964c0e8c400595890e98b35fd9": "a9c27236eff6a1fe995e97811c4ea0f5",
".git/objects/68/730c992de52cc35cc8c0d9a566215e8432d095": "f2346a8b3ff07a2e141955960c143c51",
".git/objects/68/b10c97480600d11b8522570468c2b1434ea183": "393747d9cf32a96a2eb39c00e2e47252",
".git/objects/69/311250b80ead7d77eb25bc4960902d686a2d3d": "f0e9be2c870a236c7a6dec3c3e17b47d",
".git/objects/6a/333ed59dc769c050b144b5569439a1f4451834": "0df4e20e54f04cefc60a73020a131320",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6d/ae2f47cf839a8cccbf70df0d5d17e7e1986cef": "51c4f05563c9378dfda33ff6f27e781f",
".git/objects/6e/1e4776133977f3ad9354e45738f577189b7e49": "c5e83f5242bed59f9b4f2ab3ce086a61",
".git/objects/6e/4faaf12ccaefad4529622fe9bd0e478f45a277": "2e1a0e7731e5d9c979bdd71af7854358",
".git/objects/6e/e7e247f53e772ed161b6c0f6d7b2c21f62f72b": "b6399994a6240207c6f181137fb08baf",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/9c0ef70fd0c33a4159ffc73a945409de79711d": "f955af32ba3a3cca4792b87e394b3826",
".git/objects/76/8499e001ea09d39c416d9106e8335b04994bba": "a8bc1dd7b3bcd5c4ab2088c7fd391ca3",
".git/objects/76/ad34ba32d257ea175b5c4507683fee534bd6ea": "68fd70a147640d6b11fa82d9ce89eb90",
".git/objects/77/c618e6e6ea6f8037d80b849d461ad8845c9d15": "330c40b5add097908e6da9d54d2f5bb3",
".git/objects/79/7aa5885d57ec6ad14ac81d2693ec0905fbbbac": "7315ddd66b881323f00854c4fe041003",
".git/objects/7b/ec49c915121693f6961fbb331e70cad178d760": "a83d9e073ce2eeeff91b611b35932c51",
".git/objects/7c/2b3fdf211976fa838d060b196a205ba8b22c96": "70a2c895dcce9593a47dc82db6cffc91",
".git/objects/7c/abb97058bd511bcff965c94f474e6fc958b8ee": "475c68c291a0a8dd5d5e1572c685ce50",
".git/objects/7e/946cd7bf92b9bcf5c4d658b0a0c27e3a0addd2": "4e79a225027c3e3c3f434deaa19805f0",
".git/objects/83/382e09b214e66c5582502cdcb8ed99574a0c83": "af96ad3ddbbd53fcd227de9e2d6247a9",
".git/objects/87/748b2cd03f45ee1493894d84e7fd2bbe6b7bcd": "297266335b907a922387123513a20d09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e04432f6dbc1d01c44a15810e77f4e5640a238": "1ec5be14fb7566a9d14ec9bf12709eb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b3ce2975c5123b78e58cfc2761f42967f86129": "fb7c0c62594b4ffdd9cfb380ba9ec118",
".git/objects/8d/38aca793e509fe19ffa0954f70538ee84075be": "5744b1b4ff3228b0fdbfa434edd8d773",
".git/objects/8d/da3832741861e19ceb078975819cea78c6ca78": "c35d03a88d5b7ce49dae3fe1e3e37b9e",
".git/objects/8f/f02c39970c5f03d47b936e30c23152d992c82e": "c41e16df38f072841ddc796989944351",
".git/objects/91/4a60c877a7190d76eb9c0eccf2928b2e4f25a4": "305a4ba2ecc2e87df8fe9d444f836f8f",
".git/objects/93/ddfd44d92527ec304db8bbc98e4da9143da914": "e53976b7c8cd3dc4d7ed44acf011477b",
".git/objects/95/d763db57c7fe1f61e28674896738fd74766604": "39e469ea1884a04ac75b2a267e53e14c",
".git/objects/98/a7a96fe3d8c0cd8bba0ac2aec07823f59b2614": "fab9bfd8b87b0a65510f2ee1b1c36b7e",
".git/objects/9c/c41f2b16ba96e7dae9d7f754eb6dd6bdee78a6": "180a77bfafadf7cf1b9079f993e7ef38",
".git/objects/9d/f5965a5d6934d2a9d6f5af9c92ce68f49de264": "6d6ad2bba12221f802e96e80cec414a4",
".git/objects/a7/9adb1c58cd9c9e68814a693685b1b12f2a2dc5": "40f0e82a7a7ea0dce7ba0895d452219d",
".git/objects/a7/e8f44d75ab7585f61ad313875a4a06c4ce7d99": "555152d46911e7f66ce0fcb9b90666ca",
".git/objects/a8/2b667b48e0873a2a5709071405793c688c666f": "fc7832e0658a6190f86bf08be5768915",
".git/objects/aa/2ee318f8d675bc8b29043681ea0856a8418373": "5b393e3257a7802370ee55e14494bf54",
".git/objects/aa/2fd99fcc6be8118b05777a0108124a1ba4c7b6": "47a9bc15e051b2129a0d0fe7a55a86b3",
".git/objects/ac/095089218d42fa765adc32c23caf59d2d70696": "f1ed46fb6d66842c7522461aae0260c4",
".git/objects/ac/28f97fdc7b71e72c77f6d28b625b248cbc9dd2": "b86149ad3c75274966251d7d5e0b2101",
".git/objects/ac/a78da26c08c2acec8693772942ed7fa338d276": "e0b261887e9338aed39f8aa69395222b",
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
".git/objects/be/4d65b8b6ffb791c12af165d17ca0ec245036a9": "7fd2aff06f2a4efeec05274c408e97b2",
".git/objects/bf/0b4581a2e93c3510e44f911cccbd2f6d7776ae": "711493ab12c16fe6213f53828edec67c",
".git/objects/bf/ec6a1b0502cf25c2c659d5e4d740b2de158c7f": "674c341d3f04fb7a3d5a63848a86245d",
".git/objects/c0/49101105421b466b50a51ccce6e3a755eed139": "78289dcb4e612ac895f0f05bbd4d6341",
".git/objects/c0/a981fef3d248b390bc065ad9ceda11f1276b5e": "0f0ccfec982f5d0807550ef911f6688e",
".git/objects/c1/d332b7cb96286a92597024003424d887f28906": "0bf1272ce964005ad14c6be74db4c95b",
".git/objects/c8/d9e9346ecc8571eb41315cee8847eba4a64385": "34ba7c9125aed589a185625000623e2f",
".git/objects/c9/000d3305c986cad8f08de9aa019f714e9b2af3": "44a91567c4ccbe76aef15bb46661907f",
".git/objects/c9/e73e2c0fdc2a8939a4b981de4fe241fb8b42ef": "a1a872ca16ac20cb95891a73b0a3d928",
".git/objects/ca/37cf69e0a6e00bbef94b71a12283e612092808": "b53b94059c041edac83bc0f2239e4b88",
".git/objects/cc/c073adbb49d26ce692bafc62d2126438b40b75": "73653d92a5248674cbcd0d1369648726",
".git/objects/d0/0c5d7e5304af5268c5f133256f78ba938cc284": "9234ca5549e3d5e2953cff006dccdbe7",
".git/objects/d1/0d6e27478ae0df20d3582da16948b8d79bb394": "de7e12dfd943359bc31146623180c577",
".git/objects/d1/8ec57c9de9eb4e45c70b19943ba6319e3ff20b": "890ffcd7062f2b1f4d916ebb287876d9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/994df6f5ac7ce4b27cbcc236e244fe2a985311": "a8cc9ad5940309f55b79be9ec036b8d2",
".git/objects/d5/50e870ab227f3ff37cd12369a2b3b021ddfec0": "8e851abf03b798118214f000519e4caf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4fcdd615b13a40c6cae7235a3aa69f420008ac": "e7cbc6f486006f67fe3ed37cf1814b83",
".git/objects/db/b7edc486af901d7f11f5720a5390c81f628a68": "9fef88727df9017305acb7b879dd1652",
".git/objects/dc/cad9a0cdd910d45834e3c34d070e433e897b51": "4157d69ce81d538e891e8816fd60ccc5",
".git/objects/df/27d352a9e4e5d0389ebc48968db812ff0d9a44": "f0c72b7c11d6aeda88e8b7e84ed74c14",
".git/objects/e3/9a10dcc1aba78fcb4bcde8b5110acea47d54e8": "cc27ff439316bdc71ac8f4c753594bbb",
".git/objects/e7/2a4c11dc3deede000d5750e2601e9f2f1d6941": "884a24d1589af7c249016c0a4ab570d3",
".git/objects/e7/e910d948dc8ee94f4b40d3e1594dd87c68a04b": "f279bf0cebb6596b549a58703974ab90",
".git/objects/ea/659c96528423b60ab6ddb211b00fccb2c4f3ae": "8aaf25db3a7d01ccf0d59d27d853dd6b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2d4586208ef3c85c3b456588b67c9bd8331971": "31d0b98559c16b9100b0e6c4af7d3172",
".git/objects/ef/c71a217e59c5a682d9b2d026ad83ad6476755a": "96b09b5b208b0c20acdc0dadccacd503",
".git/objects/f0/8a3006dbd755a0a6652a4c400b2dc4df6492f1": "efab758487cc469eb24fd2b537b4abdb",
".git/objects/f1/587a9746a4b64b015d94add195cd87b93dc12d": "9384e48f67991049a9591c4d349a9178",
".git/objects/f6/1c9bd78ebffdc68f160b08881536860d9f9bc5": "b76853fd8b5e165d75e571d834d2b5da",
".git/objects/fa/1bd1a57e2ac74975f941af89d876a0daa9eacc": "fc0bf24b565d348aba35b614ac4da382",
".git/objects/fb/135dfee080793c6c4c6b342a8dde810d2262f2": "65618b880f53d98bbfa339a360a22d46",
".git/objects/fb/bd3cd4683b7d76e7a958228fa177b46123e8df": "b01f525a346d074f76fce4852c1781e3",
".git/objects/fd/6b826858e895e3253d6113374a627e241e4717": "aabb7d5c2083179aabacb025b7f8b54f",
".git/objects/ff/daca08d63c3f17f81213ae8a0bfd29b4717f00": "169d179c5f5a58b4f52afa9ff882bd9d",
".git/ORIG_HEAD": "8970373672f4bb8d2ecfe49afabb3f71",
".git/refs/heads/main": "8970373672f4bb8d2ecfe49afabb3f71",
".git/refs/heads/master": "1e1ded617fae494422638ec2f96b682b",
".git/refs/remotes/origin/main": "8970373672f4bb8d2ecfe49afabb3f71",
".git/refs/remotes/origin/maina": "5171dc0acc8a5be21aeea76cd2434f72",
".git/refs/remotes/origin/master": "1e1ded617fae494422638ec2f96b682b",
"assets/AssetManifest.bin": "b858694d40db923f4b526986ae560d09",
"assets/AssetManifest.json": "ec31c0544b25ed6c86e69407458315b9",
"assets/assets/images/bg.png": "c29e4e4d63059ba16c5fbeb7180eb108",
"assets/assets/images/bg_half_earth.jpeg": "af4bc51e64d48cee49d471be292dd35a",
"assets/assets/images/bg_star.jpeg": "4e97c3227d6469302beb13e44c242f20",
"assets/assets/images/full_moon.png": "76f314d43fdba27dae669e44afe8b36b",
"assets/assets/images/logo-only.png": "57bb93ecdc712ad770f540da91d7dabe",
"assets/assets/images/logo-white.png": "ac52e0a8429de81b6d182e3321e342fa",
"assets/assets/images/moon.png": "d136adc04d4a79d443b2e5e3d108fb52",
"assets/assets/images/rocket_bg.png": "1fd960449a62a8787171b2dadc189184",
"assets/assets/images/slanted_rocket.png": "c8adbbd507a8660fbbf4fda85d931a69",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3bbeac69bb24fd4e118d5932e8be1aa8",
"assets/NOTICES": "9c06dee3888c6af3e9dcaadd0553d3d3",
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
"index.html": "6089feb2d19de882825f07d03579e68a",
"/": "6089feb2d19de882825f07d03579e68a",
"main.dart.js": "efb9bba328b6a95d9a0b5102834eb4f8",
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
