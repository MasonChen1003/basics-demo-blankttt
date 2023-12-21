// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000101010101010101010102020202020200000000000000000000000000000000000404040404040400000000000000000000020202020202000000000303030303030303030303030303030303030303`, img`
. . . . . . . . . . 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardWater,sprites.dungeon.collectibleBlueCrystal,sprites.skillmap.islandTile4,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
