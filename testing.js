const result = document.getElementById("btn");
const apiURL = 'https://api.lyrics.ovh';
result.addEventListener("click", () => {
    result.innerHTML = `<ul><li>first</li><li>second</li></ul>`;
    searchSongs("arijit");
})



// Search by song or artist
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    let s = "";
    data.data.map((song) => { s += song.artist.name + "\n" });
    alert(s);
}