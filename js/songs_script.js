const SONGS = [
    {
        "name": "Buongiorno vita by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2738e7d52ab9e6077b714f8cdb0",
        "preview_url": "https://p.scdn.co/mp3-preview/151fc524ac819faa1c6d3016c988a90055d92046?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "SnoB (feat. Rosa Chemical) - prod. Marz & Zef by Alfa, Rosa Chemical",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273e1b9a2fbbf363ad8da95539c",
        "preview_url": "https://p.scdn.co/mp3-preview/f92ffec51be10fe74c9e35b2e36b730f8c62ab34?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Canzone stupida by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27353baaed66e2c4c4c45e8397a",
        "preview_url": "https://p.scdn.co/mp3-preview/f5aeb41b3ce0086c07e18d52f6428539674f2a6e?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Nice To Meet Ya by Niall Horan",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2733d13e91ce05c4e9b3e7201b7",
        "preview_url": null
    },
    {
        "name": "Il Giro Del Mondo by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/59169adaf9aeaaa9111728afa4dc9cac659a4de8?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Best Seller by Olly, Alfa",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2735cfaff1c622390a09f62477d",
        "preview_url": "https://p.scdn.co/mp3-preview/70fc8867041047ebceed6d449d702e0481e479d6?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Dove Sei? by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/df31bfaa841363de4e6086378496d789391f7eae?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Ferma A Guardare (feat. Pinguini Tattici Nucleari) by Ernia, Pinguini Tattici Nucleari",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2738167798048de8230c7079545",
        "preview_url": null
    },
    {
        "name": "7+3 by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273c369c9a434c0f1f475069c8f",
        "preview_url": "https://p.scdn.co/mp3-preview/b62ba048e8f6595a3ab9aec2a772e70ee046d984?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Il Giro Del Mondo by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273d8ae8de4c1af67c536311120",
        "preview_url": "https://p.scdn.co/mp3-preview/59169adaf9aeaaa9111728afa4dc9cac659a4de8?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Fiamme negli occhi by Coma_Cose",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273cb3dc833e19b5cd89adac215",
        "preview_url": "https://p.scdn.co/mp3-preview/30a86c2237cd62e8ffe2dbf517fea9b75060cfd6?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "ZITTI E BUONI by Maneskin",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2737a3ab8bd64a0952e452ec799",
        "preview_url": "https://p.scdn.co/mp3-preview/55e26ad000107876dda10dad8a33481a229210ca?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Bella e rovinata by Irama",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273207306c498e7c7a85e555ddc",
        "preview_url": "https://p.scdn.co/mp3-preview/1870b36096d1002d6b2ec392b887bcb838c1a217?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "SuL Più BeLLo - prod. Yanomi by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273befd69d0ae0428ea16ed26bb",
        "preview_url": "https://p.scdn.co/mp3-preview/e88adf78144b8363ad5233857c33888663df3e72?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "CHIAMAMI PER NOME by Francesca Michielin, Fedez",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273d6b725434a6904c6de444c36",
        "preview_url": "https://p.scdn.co/mp3-preview/28562c7ac3443b589aad479069fdc6774b06f1f4?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "These Days (feat. Jess Glynne, Macklemore & Dan Caplen) by Rudimental, Jess Glynne, Macklemore, Dan Caplen",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273e9f49a29f00d42d7857794a5",
        "preview_url": "https://p.scdn.co/mp3-preview/57f9b45cd318070b04945fc6c8a7e50eaa7f8971?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Sogni appesi by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27368bf82a553744c54ee7a3efa",
        "preview_url": "https://p.scdn.co/mp3-preview/c1a20c494dad3340474d071e3168cbe85d27226b?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Drag Me Down by One Direction",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        "preview_url": "https://p.scdn.co/mp3-preview/09a6fcd9ca6aac808bf9ab042a55ca9ea63d66d0?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Moscow Mule by Benji & Fede, B3N, Federico Rossi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27308769f8cc3998e10e2ac362a",
        "preview_url": "https://p.scdn.co/mp3-preview/3b2aef78054e1c5049e440a2798a7db53d8fa1d4?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "Come neve by Giorgia, Marco Mengoni",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27320ab0d69371ecc4f8d784997",
        "preview_url": "https://p.scdn.co/mp3-preview/4d2b4bd60db0de7b57267265365d009bfed396a1?cid=774b29d4f13844c495f206cafdad9c86"
    }
]

for (let i = 0; i < 20; i++) {
    let song_json = SONGS[i];

    document.getElementById("name_" + i.toString()).innerHTML = song_json["name"];
    document.getElementById("img_" + i.toString()).src = song_json["image_url"];
    document.getElementById("audio_" + i.toString()).src = song_json["preview_url"];
}