const SONGS = [
    {
        "name": "<b>NoRd</b> by Alfa",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273afbb465300e65fb1c06c0ba3",
        "preview_url": "https://p.scdn.co/mp3-preview/87c7a78b069eb25ebaf52b5c910c4e4344b0ee18?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Buongiorno vita</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2738e7d52ab9e6077b714f8cdb0",
        "preview_url": "https://p.scdn.co/mp3-preview/151fc524ac819faa1c6d3016c988a90055d92046?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>BeVo TuTTa La NoTTe (feat. Drast,Olly)</b> by Alfa, Drast, Olly",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273afbb465300e65fb1c06c0ba3",
        "preview_url": "https://p.scdn.co/mp3-preview/af505d1a53290522e063b52f206819927dc82d98?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>SnoB (feat. Rosa Chemical) - prod. Marz & Zef</b> by Alfa, Rosa Chemical",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273e1b9a2fbbf363ad8da95539c",
        "preview_url": "https://p.scdn.co/mp3-preview/f92ffec51be10fe74c9e35b2e36b730f8c62ab34?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Canzone stupida</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27353baaed66e2c4c4c45e8397a",
        "preview_url": "https://p.scdn.co/mp3-preview/f5aeb41b3ce0086c07e18d52f6428539674f2a6e?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Il Giro Del Mondo</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/59169adaf9aeaaa9111728afa4dc9cac659a4de8?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Best Seller</b> by Olly, Alfa",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2735cfaff1c622390a09f62477d",
        "preview_url": "https://p.scdn.co/mp3-preview/70fc8867041047ebceed6d449d702e0481e479d6?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>7+3</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273c369c9a434c0f1f475069c8f",
        "preview_url": "https://p.scdn.co/mp3-preview/b62ba048e8f6595a3ab9aec2a772e70ee046d984?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>SuL Più BeLLo - prod. Yanomi</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273befd69d0ae0428ea16ed26bb",
        "preview_url": "https://p.scdn.co/mp3-preview/e88adf78144b8363ad5233857c33888663df3e72?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>These Days (feat. Jess Glynne, Macklemore & Dan Caplen)</b> by Rudimental, Jess Glynne, Macklemore, Dan Caplen",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273e9f49a29f00d42d7857794a5",
        "preview_url": "https://p.scdn.co/mp3-preview/57f9b45cd318070b04945fc6c8a7e50eaa7f8971?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Sogni appesi</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27368bf82a553744c54ee7a3efa",
        "preview_url": "https://p.scdn.co/mp3-preview/c1a20c494dad3340474d071e3168cbe85d27226b?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Kiwi</b> by Harry Styles",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859",
        "preview_url": "https://p.scdn.co/mp3-preview/1099b77c35ee3f5e08c976077b8ff8059a42f269?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Wanderlust!</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/83123ed8131efc3dcdecb696f4d9cec9a7360483?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Testa tra le nuvole, Pt. 0</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/ca1af1126c86888fd24d9a739c2edcf2b3e83bca?cid=774b29d4f13844c495f206cafdad9c86",
    },
    {
        "name": "<b>Testa tra le nuvole, Pt. 1</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/5efbe7267f29ab7ea2398d45fa7f838f4faa360d?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>TesTa TrA Le NuVoLE, pT. 2 – prod. Yanomi</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27367e455785af3296ad81afc1e",
        "preview_url": "https://p.scdn.co/mp3-preview/3ae4eafa2c6f306fdba1df22b4d451c5cc9e295e?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Tempo al Tempo</b> by Alfa, Yanomi",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2736f400ead3625f8640f2d9a6f",
        "preview_url": "https://p.scdn.co/mp3-preview/8aff4ec9eb1f892b5f741056f39e10566d775bd2?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Ti dedico il silenzio</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27353baaed66e2c4c4c45e8397a",
        "preview_url": "https://p.scdn.co/mp3-preview/75a09ece5d880f46244feccaae2f14e20e8cb38e?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>Rondini Al Guinzaglio</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273887308d96d2d0191771dd3aa",
        "preview_url": "https://p.scdn.co/mp3-preview/37d1f3734a5df0241c0210f8d2e668a51340472f?cid=774b29d4f13844c495f206cafdad9c86"
    },
    {
        "name": "<b>I Tuoi Particolari</b> by Ultimo",
        "image_url": "https://i.scdn.co/image/ab67616d0000b273887308d96d2d0191771dd3aa",
        "preview_url": "https://p.scdn.co/mp3-preview/90e19b62ac3ea6a655b00277e46caad3fe14d44a?cid=774b29d4f13844c495f206cafdad9c86"
    }
]

let TABLE = "";

SONGS.forEach(function (song_json) {
    let new_row = '<tr>' +
        '<td><img src=' + song_json["image_url"] + ' class="rounded-3" alt="Song"></td>' +
        '<td>' + song_json["name"] + '</td>' +
        '<td><audio controls src=' + song_json["preview_url"] + '></audio></td>' +
        '</tr>';

    TABLE += new_row;
});

document.getElementById("table").innerHTML = TABLE;
