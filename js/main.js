let currentVideoIndex = 0;

// Sample video data (each object should have a `url` property)
const videos = [
    { id: 1, title: 'Racine Carree 1', url: './videos/Racine.mp4' },
    { id: 2, title: 'Racine Carree  2', url: './videos/Racine-Course-1.mp4' },
    { id: 3, title: 'Racine Carree  3', url: './videos/Racine-Cours-2.mp4' },
];

const videoPlayer = document.getElementById('video-player');
videoPlayer.src = videos[currentVideoIndex].url; // Load the first video



// Function to load the video based on the current index
function loadVideo(index) {
    videoPlayer.src = videos[index].url;
    videoPlayer.play();
    currentVideoIndex = index; // Update current index

}

console.log(videoPlayer.src)
// Populate the video list in the sidebar
function populateVideoList() {
    const videoListContainer = document.getElementById('video-list');
    videos.forEach((video, index) => {
        const videoButton = document.createElement('button');
        videoButton.textContent = video.title;
        videoButton.addEventListener('click', () => loadVideo(index));
        videoListContainer.appendChild(videoButton);
    });
}

// Next button event
document.getElementById('next-btn').addEventListener('click', () => {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    }
});

// Previous button event
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    }
});

// Initialize by loading the first video and populating the video list
loadVideo(currentVideoIndex);
populateVideoList();