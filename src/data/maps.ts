// src/data/maps.ts

const BASE_URL = import.meta.env.BASE_URL;

export interface MapData {
    episode: number;
    level: number;
    name: string;
    maxStages: number;
    isStarred: boolean;
    respawnTime: number;
    imagePath?: string;
    enName: string;
}

export const maps: MapData[] = [
    { episode: 1, level: 40, name: '天使波利', maxStages: 1, isStarred: false, respawnTime: 25 * 60 + 15, imagePath: `${BASE_URL}maps/XXXXXX.webp`, enName: 'boli' },
    { episode: 15, level: 118, name: '尤那耶爾紀念區', maxStages: 4, isStarred: false, respawnTime: 25 * 60 + 15, imagePath: `${BASE_URL}maps/XXXXXX.webp`, enName: 'Jonael Commemorative Orb' },
    { episode: 15, level: 120, name: '坦尼爾1世紀念區', maxStages: 4, isStarred: false, respawnTime: 25 * 60 + 15, imagePath: `${BASE_URL}maps/XXXXXX.webp`, enName: 'Taniel I Commemorative Orb' },
    { episode: 15, level: 123, name: '緹玫勒斯寺院', maxStages: 4, isStarred: false, respawnTime: 25 * 60 + 15, imagePath: `${BASE_URL}maps/XXXXXX.webp`, enName: 'Timerys Temple' }

];
