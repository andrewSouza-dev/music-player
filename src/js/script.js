// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

// back to home btn
const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); 
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');


const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); 

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); 
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); 

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", 

        // Lirik timestamp
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4",

        // Lirik timestamp
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" },
            { time: 101, text: "I found a woman, stronger than anyone I know" },
            { time: 108, text: "She shares my dreams, I hope that someday I'll share her home" },
            { time: 116, text: "I found a lover to carry more than just my secrets" },
            { time: 124, text: "To carry love, to carry children of our own" },
            { time: 130.5, text: "We are still kids, but we're so in love" },
            { time: 135, text: "Fighting against all odds" }, 
            { time: 139, text: "I know we'll be alright this time" },
            { time: 146, text: "Darling, just hold my hand" },
            { time: 150, text: "Be my girl, I'll be your man, I see my future in your eyes" },
            { time: 160.5, text: "Baby, I'm dancing in the dark" },
            { time: 168, text: "With you between my arms" },
            { time: 172, text: "Barefoot on the grass" },
            { time: 176, text: "Listening to our favourite song" },
            { time: 179, text: "When I saw you in that dress, Looking so beautiful" },
            { time: 185, text: "I don't deserve this" },
            { time: 188.5, text: "Darling, you look perfect tonight" },
            { time: 206.3, text: "Baby, I'm dancing in the dark" },
            { time: 213.5, text: "With you between my arms" },
            { time: 217.5, text: "Barefoot on the grass" },
            { time: 221, text: "Listening to our favourite song" },  
            { time: 224.5, text: "I have faith in what I see" },
            { time: 228, text: "Now I know I have met an angel in person" },
            { time: 234, text: "And she looks perfect" },
            { time: 238, text: "I don't deserve this" },
            { time: 242, text: "You look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", 

        // Lirik timestamp
        lyrics: [
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.5, text: "All your insecurities" },
            { time: 27.2, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71.5, text: "Don't need apologies" },
            { time: 75, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 140, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 1, text: "You know I want you" },
            { time: 5, text: "It's not a secret I try to hide" },
            { time: 9, text: "You know you want me" },
            { time: 13, text: "So don't keep sayin' our hands are tied" },
            { time: 16.5, text: "You claim it's not in the cards" },
            { time: 18.5, text: "And fate is pullin' you miles away and out of reach from me" },    
            { time: 24.5, text: "But you're here in my heart" },
            { time: 26, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 34, text: "What if we rewrite the stars?" },
            { time: 38, text: "Say you were made to be mine" },
            { time: 42, text: "Nothin' could keep us apart" },
            { time: 46, text: "You'd be the one I was meant to find" },
            { time: 50, text: "It's up to you and it's up to me" },
            { time: 53.5, text: "No one can say what we get to be" },
            { time: 57, text: "So why don't we rewrite the stars?" },
            { time: 61, text: "Maybe the world could be ours tonight" },
            { time: 66, text: "Ah-oh (No, no, no, no)" },
            { time: 70, text: "Ah-oh (Mm)" },
            { time: 73.8, text: "You think it's easy" },
            { time: 78, text: "You think I don't wanna run to you, yeah" },
            { time: 81.6, text: "But there are mountains (There are mountains)" },
            { time: 85.3, text: "And there are doors that we can't walk through" },
            { time: 89, text: "I know you're wonderin' why" },
            { time: 91, text: "Because we're able to be just you and me within these walls" },
            { time: 97, text: "But when we go outside" },
            { time: 99, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 106.8, text: "No one can rewrite the stars" },
            { time: 110.9, text: "How can you say you'll be mine?" },
            { time: 114.5, text: "Everything keeps us apart" }, 
            { time: 118, text: "And I'm not the one you were meant to find" },
            { time: 122, text: "It's not up to you, it's not up to me" },
            { time: 125.8, text: "When everyone tells us what we can be" },
            { time: 129.8, text: "And how can we rewrite the stars?" },
            { time: 133.5, text: "Say that the world can be ours tonight" },
            { time: 139, text: "All I want is to fly with you" },
            { time: 143, text: "All I want is to fall with you" },
            { time: 146.8, text: "So just give me all of you" },
            { time: 151, text: "It feels impossible" },
            { time: 152, text: "It's not impossible" },
            { time: 153, text: "Is it impossible?" },
            { time: 155, text: "Say that it's possible" },  
            { time: 158.5, text: "How do we rewrite the stars?" },
            { time: 162, text: "Say you were made to be mine" },
            { time: 166, text: "And nothin' could keep us apart" },
            { time: 169.6, text: "'Cause you are the one I was meant to find" },
            { time: 173.6, text: "It's up to you and it's up to me" },
            { time: 177.1, text: "No one could say what we get to be" },
            { time: 181, text: "And why don't we rewrite the stars?" },
            { time: 185, text: "Changin' the world to be ours" },
            { time: 190, text: "Ah-oh (No, no, no, no)" },
            { time: 194, text: "Ah-oh (Mm)" },       
            { time: 197.5, text: "You know I want you" },
            { time: 201.5, text: "It's not a secret I try to hide" },
            { time: 205, text: "But I can't have you" },
            { time: 209, text: "We're bound to break and my hands are tied" }
        ]
    },

    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 18, text: "I wanna be your vacuum cleaner" },
            { time: 21.5, text: "Breathing in your dust" },
            { time: 25, text: "I wanna be your Ford Cortina" },
            { time: 29, text: "I will never rust" },
            { time: 32.5, text: "If you like your coffee hot" },
            { time: 36, text: "Let me be your coffee pot" },
            { time: 39.5, text: "You call the shots, babe" },
            { time: 42.3, text: "I just wanna be yours" },
      
            { time: 46, text: "Secrets I have held in my heart" },
            { time: 50, text: "Are harder to hide than I thought" },
            { time: 54, text: "Maybe I just wanna be yours" },
            { time: 56, text: "I wanna be yours, I wanna be yours" },
            { time: 62, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 75, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 81.5, text: "Let me be the portable heater that you'll get cold without" },
            { time: 89, text: "I wanna be your setting lotion (wanna be)" },
            { time: 93, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 96, text: "At least as deep as the Pacific Ocean" },
            { time: 99, text: "I wanna be yours" },

            { time: 103, text: "Secrets I have held in my heart" },
            { time: 106.8, text: "Are harder to hide than I thought" },
            { time: 110.4, text: "Maybe I just wanna be yours" },
            { time: 113.5, text: "I wanna be yours, I wanna be yours" },
            { time: 119.3, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 129, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 140, text: "Wanna be yours, wanna be yours" },

            { time: 146.2, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 150, text: "Breathing in your dust (Wanna be yours)" },
            { time: 153, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 156.5, text: "I will never rust (Wanna be yours)" },
            { time: 159, text: "I just wanna be yours (Wanna be yours)" },
            { time: 163, text: "I just wanna be yours (Wanna be yours)" },
            { time: 166.8, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    




// -- Logic --

];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; 

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); 
    backgroundVideo.pause(); 
    backgroundVideo.src = ""; 
    backgroundVideo.load();
    pauseTrack(); 
}


function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); 
    backgroundVideo.src = ""; 
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); 

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); 
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        
        
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); 
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
           
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); 
            }
        });
        listItem.addEventListener('mouseleave', () => {
            
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); 
                backgroundVideo.src = ""; 
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); 
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; 
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); 
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}


function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; 
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); 
        span.classList.add('lyric-line'); 
        lyricsContainer.appendChild(span);
        
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); 
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
           
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

     
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

           
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
               
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});


playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        
    } else {
        nextTrack();
    }
});


backToHomeFromDetailBtn.addEventListener('click', showHomePage); 
backToHomeBtn.addEventListener('click', showHomePage); 


playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); 
    console.log("Songs array length:", songs.length); 
    console.log("songListElement:", songListElement); 

    renderSongList(); 
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; 
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; 
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); 
    console.log("Initialization complete."); 
}

init();