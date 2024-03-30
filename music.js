class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Natural", "Imagine Dragons", "1.jpeg", "1.mp3"),
    new Music("Taking to the Moon", "Bruno Mars", "2.jpeg", "2.mp3"),
    new Music("Clock", "Coldplay", "3.jpeg", "3.mp3")
];