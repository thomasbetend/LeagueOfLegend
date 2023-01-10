import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class DataService implements InMemoryDbService{

constructor() { }

    createDb() {
        const data = [
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Monkey King",
                id: 1,
                key: "MonkeyKing",
                name: "Wukong",
                image: "monkey_king.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Assassin"
                ],
                title: "Grandmaster at Arms",
                id: 2,
                key: "Jax",
                name: "Jax",
                image: "jax.jpeg"
            },
            {
                tags: [
                    "Mage",
                    "Support"
                ],
                title: "the Harbinger of Doom",
                id: 3,
                key: "Fiddlesticks",
                name: "Fiddlesticks",
                image: "fiddlesticks.jpeg"
            },
            {
                tags: [
                    "Assassin"
                ],
                title: "the Demon Jester",
                id: 4,
                key: "Shaco",
                name: "Shaco",
                image: "shaco.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Uncaged Wrath of Zaun",
                id: 5,
                key: "Warwick",
                name: "Warwick",
                image: "warwick.jpeg"
            },
            {
                tags: [
                    "Marksman"
                ],
                title: "the Rebel",
                id: 6,
                key: "Xayah",
                name: "Xayah",
                image: "xayah.jpeg"
            },
            {
                tags: [
                    "Assassin",
                    "Fighter"
                ],
                title: "the Bestial Huntress",
                id: 7,
                key: "Nidalee",
                name: "Nidalee",
                image: "nidalee.jpeg"
            },
            {
                tags: [
                    "Mage",
                    "Support"
                ],
                title: "Rise of the Thorns",
                id: 8,
                key: "Zyra",
                name: "Zyra",
                image: "zyra.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Cantankerous Cavalier",
                id: 9,
                key: "Kled",
                name: "Kled",
                image: "kled.jpeg"
            },
            {
                tags: [
                    "Mage"
                ],
                title: "the Burning Vengeance",
                id: 10,
                key: "Brand",
                name: "Brand",
                image: "brand.jpeg"
            },
            {
                tags: [
                    "Tank",
                    "Fighter"
                ],
                title: "the Armordillo",
                id: 11,
                key: "Rammus",
                name: "Rammus",
                image: "rammus.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Kraken Priestess",
                id: 12,
                key: "Illaoi",
                name: "Illaoi",
                image: "illaoi.jpeg"
            },
            {
                tags: [
                    "Marksman"
                ],
                title: "the Daring Bombardier",
                id: 13,
                key: "Corki",
                name: "Corki",
                image: "corki.jpeg"
            },
            {
                tags: [
                    "Support",
                    "Tank"
                ],
                title: "the Heart of the Freljord",
                id: 14,
                key: "Braum",
                name: "Braum",
                image: "braum.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Hand of Noxus",
                id: 15,
                key: "Darius",
                name: "Darius",
                image: "darius.jpeg"
            },
            {
                tags: [
                    "Mage"
                ],
                title: "the Deathsinger",
                id: 16,
                key: "Karthus",
                name: "Karthus",
                image: "karthus.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Marksman"
                ],
                title: "the Defender of Tomorrow",
                id: 17,
                key: "Jayce",
                name: "Jayce",
                image: "jayce.jpeg"
            },
            {
                tags: [
                    "Support",
                    "Fighter"
                ],
                title: "the Yeti Rider",
                id: 18,
                key: "Nunu",
                name: "Nunu",
                image: "nunu.jpeg"
            },
            {
                tags: [
                    "Fighter",
                    "Tank"
                ],
                title: "the Troll King",
                id: 19,
                key: "Trundle",
                name: "Trundle",
                image: "trundle.jpeg"
            },
            {
                tags: [
                    "Marksman"
                ],
                title: "the Outlaw",
                id: 20,
                key: "Graves",
                name: "Graves",
                image: "graves.jpeg"
            },
        ]
        
        return {data};
    }
}
