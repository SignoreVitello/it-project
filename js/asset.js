/**
 * goal: make using assets easy
 * how to use:
 *  let map = assetMap.<your path>;
 *  let as = new asset(map, <name of asset - can be a string or number>);
 *  let comp = new component("asset", as);
 * 
 * map:
 *  the map includes data on the image, and on the sprites of the image
 *  e.g. assetMap.mystic_woods.characters.player
 * asset:
 *  the class asset creates a sprite / object, which the class component can use.
 */
const assetMap = {
    mystic_woods: {
        characters: {
            player : {
                src: "asset/mystic_woods/characters/player.png",
                num_rows: 5, // number of rows in the image
                num_col: 6, // number of colums in the image
                totalWidth: 288, // width of the whole png
                totalHeight: 240, // height of the whole png
                width: /* 288 / 6, */ 48-20, // width of a single asset
                height: /* 240 / 5, */ 48-17, // height of a single asset
                1 : { startX: 0+12, endX: 47, startY: 0+17, endY: 0 },
                2 : { startX: 48+12, endX: 95, startY: 0+17, endY: 0 },
                3 : { startX: 96+12, endX: 143, startY: 0+17, endY: 0 },
                4 : { startX: 144+12, endX: 191, startY: 0+17, endY: 0 },
                5 : { startX: 192+12, endX: 239, startY: 0+17, endY: 0 },
                6 : { startX: 240+12, endX: 287, startY: 0+17, endY: 0 },

                7 : { startX: 0+12, endX: 47, startY: 48+17, endY: 0 },
                8 : { startX: 48+12, endX: 95, startY: 48+17, endY: 0 },
                9 : { startX: 96+12, endX: 143, startY: 48+17, endY: 0 },
                10 : { startX: 144+12, endX: 191, startY: 48+17, endY: 0 },
                11 : { startX: 192+12, endX: 239, startY: 48+17, endY: 0 },
                12 : { startX: 240+12, endX: 287, startY: 48+17, endY: 0 },

                13 : { startX: 0+12, endX: 47, startY: 48*2+17, endY: 0 },
                14 : { startX: 48+12, endX: 95, startY: 48*2+17, endY: 0 },
                15 : { startX: 96+12, endX: 143, startY: 48*2+17, endY: 0 },
                16 : { startX: 144+12, endX: 191, startY: 48*2+17, endY: 0 },

                17 : { startX: 0+12, endX: 47, startY: 48*4+17, endY: 0 },
                18 : { startX: 48+12, endX: 95, startY: 48*4+17, endY: 0 },
                19 : { startX: 96+12, endX: 143, startY: 48*4+17, endY: 0 },
            }
        },
        tilesets : {
            floors : {
                wooden : {
                    src: "asset/mystic_woods/tilesets/floors/wooden.png",
                    num_rows: 1, // number of rows in the image
                    num_col: 1, // number of colums in the image
                    totalWidth: 16, // width of the whole png
                    totalHeight: 16, // height of the whole png
                    width: /* 288 / 6, */ 16, // width of a single asset
                    height: /* 240 / 5, */ 16, // height of a single asset
                    "wooden" : { startX: 0, startY: 0 }
                },
                grass : {
                    src: "asset/mystic_woods/tilesets/floors/grass.png",
                    num_rows: 1, // number of rows in the image
                    num_col: 1, // number of colums in the image
                    totalWidth: 16, // width of the whole png
                    totalHeight: 16, // height of the whole png
                    width: 16, // width of a single asset
                    height: 16, // height of a single asset
                    "grass" : { startX: 0, startY: 0 }
                }
            },
            walls : {
                walls : {
                    /**
                     * For now I did everything manually, but I realised (a bit late though),
                     * that all assets may be intended to be 16 x 16
                     * -> it would fit well for the walls
                     * -> this should be checked and (if you want to) changed
                     */
                    src: "asset/mystic_woods/tilesets/walls/walls.png",
                    // !!! all manually !!!
                    num_rows: 4, // number of rows in the image
                    // num_col: 14, // number of colums in the image
                    totalWidth: 128, // width of the whole png
                    totalHeight: 128, // height of the whole png
                    width: /* 128 / 4 */ 16, // width of a single asset
                    height: /* 128 / 4 */ 23+1, // height of a single asset
                    "start oben light" : { startX: 0, startY: 0 },
                    "ecke oben links light" : { startX: 16, startY: 0 },
                    "little brick oben light" : { startX: 16*2, startY: 0 },
                    "ecke oben rechts light" : { startX: 16*3, startY: 0 },
                    "umbug oben links light" : { startX: 16*4, startY: 0 },
                    "umbug oben rechts light" : { startX: 16*5, startY: 0 },

                    "norm light" : { startX: 0, startY: 23+1 },
                    "ecke unten links light" : { startX: 16, startY: 23+1 },
                    "little brick unten light" : { startX: 16*2, startY: 23+1 },
                    "ecke unten rechts light" : { startX: 16*3, startY: 23+1 },
                    "einzelteil oben rechts light" : { startX: 16*4, startY: 23+1 },
                    "einzelteil oben links light" : { startX: 16*5, startY: 23+1 },

                    "start oben beide dark" : { startX: 0, startY: (23+1)*2 },
                    "start oben links dark" : { startX: 16, startY: (23+1)*2 },
                    "start oben dark" : { startX: 16*2, startY: (23+1)*2 },
                    "start oben rechts dark" : { startX: 16*3, startY: (23+1)*2 },
                    "einzelteil unten rechts dark" : { startX: 16*4, startY: (23+1)*2 },
                    "einzelteil unten links dark" : { startX: 16*5, startY: (23+1)*2 },

                    "start unten beide dark" : { startX: 0, startY: (23+1)*3 },
                    "start unten links dark" : { startX: 16, startY: (23+1)*3 },
                    "start unten dark" : { startX: 16*2, startY: (23+1)*3 },
                    "start unten rechts dark" : { startX: 16*3, startY: (23+1)*3 },
                    "umbug unten links dark" : { startX: 16*4, startY: (23+1)*3},
                    "umbug unten rechts dark" : { startX: 16*5, startY: (23+1)*3},
                },
                wooden_door_b : {
                    src: "asset/mystic_woods/tilesets/walls/wooden_door_b.png",
                    num_rows: 1, // number of rows in the image
                    num_col: 2, // number of colums in the image
                    totalWidth: 32, // width of the whole png
                    totalHeight: 16, // height of the whole png
                    width: /* 32 / 2 */ 16, // width of a single asset
                    height: /* 16 / 1 */ 16, // height of a single asset
                    "closed" : { startX: 0, startY: 0, },
                    "open" : { startX: 16, startY: 0, },
                },
                wooden_door : {
                    src: "asset/mystic_woods/tilesets/walls/wooden_door.png",
                    num_rows: 1, // number of rows in the image
                    num_col: 2, // number of colums in the image
                    totalWidth: 32, // width of the whole png
                    totalHeight: 16, // height of the whole png
                    width: /* 32 / 2 */ 16, // width of a single asset
                    height: /* 16 / 1 */ 16, // height of a single asset
                    "closed" : { startX: 0, startY: 0, },
                    "open" : { startX: 16, startY: 0, },
                }
            }
        }
    }
}

class asset {
    constructor(map, css) {
        this.img = new Image();
        this.img.src = map.src;
        // this.img.style.background = "url(" + src + ") " + css.start + " " + css.end;
        // this.img.style.backgroundPosition = css.start + " " + css.end;

        // this.img.setAttribute("style", "background: url(" + src + ") " + 0 + " " + 0 + " ; width: 48px; height: 48px")
        this.css = map[css];
        this.css.height = map.height;
        this.css.width = map.width;
        // console.log(this);
    }
}