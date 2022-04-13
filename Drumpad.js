const audio = new Audio();
const Sounds = ["/Kick.wav", "/Piano.wav", "/Snare.wav", "/Clap.wav", "/Hit.wav", "/Snap.wav", "/OH.wav", "/Bell.wav", "/Trap.wav"]



function music(number){
    audio.src = Sounds[number]
    audio.play()
}