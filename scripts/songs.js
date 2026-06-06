// ==========================
// ELEMENTOS
// ==========================

const audio = document.getElementById("audio");

const cover = document.getElementById("cover-img");

const songTitle = document.getElementById("song-title");

const songArtist = document.getElementById("song-artist");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const playlistContent =
    document.getElementById("playlist-content");

const playlist =
    document.querySelector(".playlist");

const playlistHeader =
    document.querySelector(".playlist-header");

const playlistButton =
    document.getElementById("playlist-open");

const currentTimeEl =
    document.getElementById("current-time");

const durationEl =
    document.getElementById("duration");

const glow =
document.querySelector(".cover-glow");

const volumeSlider =
document.getElementById("volume-slider");

const volumeIcon =
document.getElementById("volume-icon");

// ==========================
// PLAYLIST
// ==========================

const songs = [

    {
        name: "Preciso Dizer Que Te Amo",
        artist: "Cazuza, Bebel Gilberto",
        path: "../assets/music/precisodizerqueteamo.mp3",
        cover: "../assets/music/capas_musica/precisodizerqueteamo.png"
    },
    
    {
        name: "Vagabundo e a Dama",
        artist: "Oriente",
        path: "../assets/music/vagabundoeadama.mp3",
        cover: "../assets/music/capas_musica/vagabundo.png"
    },

    {
        name: "Serenata Existencialista",
        artist: "O grilo",
        path: "../assets/music/serenata_existencialista.mp3",
        cover: "../assets/music/capas_musica/serenata.png"
    },
    
    {
        name: "Dizeres",
        artist: "Organico, Lourena, Sant, Léo Casa 1, Rap box",
        path: "../assets/music/undaia.mp3",
        cover: "../assets/music/capas_musica/undaia.png"
    },

    {
        name: "Poesia Acústica 2",
        artist: "Delacruz, Maria, Ducon, Luiz Lins, Diomedes, Bk', Kayuá",
        path: "../assets/music/poesia2.mp3",
        cover: "../assets/music/capas_musica/poesia2.png"
    },

    {
        name: "Meu Novo Mundo",
        artist: "Charlie Brown Jr.",
        path: "../assets/music/meunovomundo.mp3",
        cover: "../assets/music/capas_musica/meunovomundo.jpg"
    },

    {
        name: "Exagerado",
        artist: "Cazuza",
        path: "../assets/music/Exagerado.mp3",
        cover: "../assets/music/capas_musica/exagerado.png"
    },

    {
        name: "Ela Une Todas As Coisas",
        artist: "Jorge Vercillo",
        path: "../assets/music/une_todas.mp3",
        cover: "../assets/music/capas_musica/une_todas.png"
    },

    {
        name: "Flor de Tangerina",
        artist: "Alceu Valença",
        path: "../assets/music/flor_tangerina.mp3",
        cover: "../assets/music/capas_musica/flor_tangerina.png"
    },
    
    {
        name: "Aliança",
        artist: "Tribalistas",
        path: "../assets/music/alianca.mp3",
        cover: "../assets/music/capas_musica/alianca.png"
    },

    {
        name: "Me Namora",
        artist: "Edu Ribeiro",
        path: "../assets/music/menamora.mp3",
        cover: "../assets/music/capas_musica/menamora.png"
    },

    {
        name: "Uma Arlinda Mulher",
        artist: "Mamonas Assassinas",
        path: "../assets/music/umaarlinda.mp3",
        cover: "../assets/music/capas_musica/umaarlinda.png"
    },
    
    {
        name: "Eu Te Devoro",
        artist: "Djavan",
        path: "../assets/music/eutedevoro.mp3",
        cover: "../assets/music/capas_musica/eutedevoro.png"
    }


];


// ==========================
// VARIÁVEIS
// ==========================

let currentSong = 0;

let isPlaying = false;


// ==========================
// CARREGA MÚSICA
// ==========================

function loadSong(index) {

    audio.src = songs[index].path;

    cover.src = songs[index].cover;

    songTitle.textContent =
        songs[index].name;

    songArtist.textContent =
        songs[index].artist;
}

function changeSong(index){

    cover.classList.add("fade-out");

    songTitle.classList.add("fade-out");

    songArtist.classList.add("fade-out");

    setTimeout(() => {

        loadSong(index);

        cover.classList.remove("fade-out");
        songTitle.classList.remove("fade-out");
        songArtist.classList.remove("fade-out");

        cover.classList.add("fade-in");
        songTitle.classList.add("fade-in");
        songArtist.classList.add("fade-in");

        if(isPlaying){
            playMusic();
        }

        setTimeout(() => {

            cover.classList.remove("fade-in");
            songTitle.classList.remove("fade-in");
            songArtist.classList.remove("fade-in");

        }, 250);

    }, 250);
}


function formatTime(time) {

    const minutes =
        Math.floor(time / 60);

    const seconds =
        Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// ==========================
// CRIAR PLAYLYST
// ==========================

function createPlaylist() {

    playlistContent.innerHTML = "";

    songs.forEach((song, index) => {

        const item = document.createElement("div");

        item.classList.add("playlist-item");

        item.innerHTML = `
        <div class="playlist-song-info">

        <div class="playlist-icon">
            <i class="fa-solid fa-music"></i>
        </div>

        <div class="playlist-text">
            <h4>${song.name}</h4>
            <p>${song.artist}</p>
        </div>

        </div>
        `;

        item.addEventListener("click", () => {

            currentSong = index;

            changeSong(currentSong);

            updatePlaylistActive();

            playlist.classList.remove("active");
        });

        playlistContent.appendChild(item);

    });

    updatePlaylistActive();
}

// ==========================
// MUSICA ATIVA DESTACA
// ==========================

function updatePlaylistActive() {

    const items =
        document.querySelectorAll(".playlist-item");

    items.forEach((item, index) => {

        item.classList.remove("active");

        if (index === currentSong) {

            item.classList.add("active");
        }

    });
}

// ==========================
// PLAY
// ==========================

function playMusic() {

    audio.play();

    isPlaying = true;

    cover.style.animationPlayState = "running";

    glow.style.animationPlayState = "running";

    playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';
}


// ==========================
// PAUSE
// ==========================

function pauseMusic() {

    audio.pause();

    isPlaying = false;

    cover.style.animationPlayState = "paused";

    glow.style.animationPlayState = "paused";

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}

// ==========================
// BOTÃO PLAY
// ==========================

playBtn.addEventListener("click", () => {

    if (isPlaying) {

        pauseMusic();

    } else {

        playMusic();
    }

});


// ==========================
// PRÓXIMA
// ==========================

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;
    }

    changeSong(currentSong);
    updatePlaylistActive();

}


// ==========================
// ANTERIOR
// ==========================

function prevSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;
    }

    changeSong(currentSong);
    updatePlaylistActive();

}


// ==========================
// EVENTOS
// ==========================

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);

playlistButton.addEventListener("click", () => {

    playlist.classList.toggle("active");
});

playlistHeader.addEventListener("click", () => {

    playlist.classList.remove("active");
});

audio.addEventListener("loadedmetadata", () => {

    durationEl.textContent =
        formatTime(audio.duration);

});

volumeSlider.addEventListener("input", () => {

    audio.volume = volumeSlider.value / 100;

    if(audio.volume === 0){

        volumeIcon.className =
        "fa-solid fa-volume-xmark";

    }else if(audio.volume < 0.5){

        volumeIcon.className =
        "fa-solid fa-volume-low";

    }else{

        volumeIcon.className =
        "fa-solid fa-volume-high";
    }

});

volumeIcon.addEventListener("click", () => {

    if(audio.volume > 0){

        audio.volume = 0;

        volumeSlider.value = 0;

        volumeIcon.className =
        "fa-solid fa-volume-xmark";

    }else{

        audio.volume = 1;

        volumeSlider.value = 100;

        volumeIcon.className =
        "fa-solid fa-volume-high";
    }

});

// ==========================
// INICIALIZAÇÃO
// ==========================
audio.volume = 1;
loadSong(currentSong);
createPlaylist();

// ==========================
// PROGRESSO
// ==========================

audio.addEventListener("timeupdate", () => {

    if (audio.duration) {

        const progressPercent =
            (audio.currentTime / audio.duration) * 100;

        progress.value = progressPercent;

        currentTimeEl.textContent =
            formatTime(audio.currentTime);
    }

});

// ==========================
// ARRASTAR BARRA
// ==========================

progress.addEventListener("input", () => {

    const seekTime =
        (progress.value / 100) * audio.duration;

    audio.currentTime = seekTime;
});

// ==========================
// QUANDO A MUSICA ACABAR
// ==========================


audio.addEventListener("ended", () => {

    nextSong();
});
