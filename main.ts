enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const collectable = SpriteKind.create()
    export const creeper = SpriteKind.create()
    export const creeper_egg = SpriteKind.create()
    export const p = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SONIC.vy == 0) {
        SONIC.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    tiles.placeOnTile(SONIC, tiles.getTileLocation(31, 6))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.creeper_egg, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    creeps = sprites.create(img`
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 f f f 7 7 7 f f f 7 . . 
        . . . 7 f f f 7 7 7 f f f 7 . . 
        . . . 7 f f f f f f f f f 7 . . 
        . . . 7 7 7 7 f f f 7 7 7 7 . . 
        . . . 7 7 7 f f f f f 7 7 7 . . 
        . . . 7 7 7 f f 7 f f 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 . . . 7 7 7 7 . . 
        . . . f f f f . . . f f f f . . 
        `, SpriteKind.creeper)
    creeps.setPosition(SONIC.x + 3, SONIC.y - 3)
    creeps.follow(SONIC, 5)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    scene.cameraShake(4, 1000)
    tiles.placeOnRandomTile(SONIC, myTiles.tile13)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.creeper, function (sprite, otherSprite) {
    if (SONIC.y < creeps.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
    creeps.destroy(effects.coolRadial, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.p, function (sprite, otherSprite) {
    game.splash("hello sonic", "have you come to find the happy button")
    game.splash("oh", "the button is on the other side of this realm")
    game.splash("wait", "beware of the eggs they contain creepers")
    battle_toad.destroy(effects.smiles, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.collectable, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.rings, 100)
})
let egg: Sprite = null
let collectable: Sprite = null
let battle_toad: Sprite = null
let creeps: Sprite = null
let SONIC: Sprite = null
game.showLongText("can you help sonic find the button", DialogLayout.Center)
tiles.setTilemap(tiles.createTilemap(hex`32001400070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b08070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b080c0101010101010101060606060601010101010101010101010e010e0e0c0c1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a0c0c010101010101010f0605050506010101010101010101010101010e0e0c0c0101010101010101010101010101010101010c0c0101010101010f0f06050505010f0f0101010101010101010e0101010c0c0101010101010101010101010101010101010c0c0101010101010f0f060505050f0f0f0f0f0101010101010101010e120c0c0101010101010101010101010101010101010c0c10051d01010f0f0f060505160f0f0f0f0f0101010101010f010101110c0c0101010101010101010101010101010101010c0c0606060101010f0f06060606060f0f0f0101010101010f0f0f0101110c0c0101010101010101010101010101010101010c0c0101010101010101010101010101010101010101010f0f0f0f0505050c0c0205050101010101010101010101010101010c0c010101011c050501010101010101010101010101010f0f0f0f0606060c0c1818180101010101010101010101010101010c0c010101010606060101010101010101010101010101010f0f0f060f010c0c0101010505050501010101010101010101010c0c010101010101010105050501010101010101010101010101060101010c0c0101011818181801010101010101010505010c0c010101010101010106060601010101010101010505051c05010101010c0c0101010101010105050505010101010505190c0c0101010101010101010101010115051c0505010606060606010101010c0c0101010101010118181818010101011818180c0c010101010101010101010101010606060606010101010101010101010c0c0101010101010101010101050505010101010c0c010101010101010101010101010101010101010101010101010101010c0c0101010101010101010101181818010101010c0c010101010101010101010101010101010101010101010101010101010c0c0101010101010101010101010101010101010c0c010101010101010101010101010101010101010101010101010101010c0c0101010101010101010101010101010101010c0c010101010101010101010101010101010101010101010101010101010c0c0101010101010101010101010101010101010c0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c0c1c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d1c0c090b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a090b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 2 2 2 . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 
    2 . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 
    2 . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 
    2 . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 . . 2 2 2 2 2 . . . . . . . . . . . 2 
    2 . . . . . . . . 2 2 2 . . . . . . . . 2 2 2 2 2 . . . . 2 2 . . . . . . 2 2 2 2 2 . . . . 2 2 2 2 
    2 . . . . . . . . . . . . . 2 2 2 2 . . . 2 2 2 2 . . . . 2 2 . . . . . . 2 2 2 2 2 . . . . 2 2 2 2 
    2 . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . 2 2 . . . . . . . . . . 2 2 2 . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath5,sprites.dungeon.hazardLava1,myTiles.tile3,sprites.builtin.brick,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,sprites.builtin.field0,sprites.dungeon.buttonOrangeDepressed,myTiles.tile15,sprites.dungeon.buttonOrange,myTiles.tile16,myTiles.tile17,myTiles.tile18], TileScale.Sixteen))
scene.setBackgroundColor(9)
SONIC = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . . . . . . . . . 
    . . . 8 8 . 8 8 8 8 . . . . . . . . . . . . . . 
    . . . 8 8 8 . 8 8 8 8 8 . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 1 1 1 8 . . . . . . . . . . . 
    . . . . 8 8 8 8 8 1 f 1 8 f f . . . . . . . . . 
    . . 8 8 8 8 8 8 8 1 1 1 8 f f . . . . . . . . . 
    . . 8 8 . d d d d d d d d . . . . . . . . . . . 
    . . . . . d d d d d d d d . . . . . . . . . . . 
    . . 8 8 8 d d d d d d d . . 1 1 1 . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . 1 1 1 . . . . . . . 
    . . 8 8 . 8 8 8 8 8 8 8 . . d d . . . . . . . . 
    . . . d d 8 8 8 d d d d d d d . . . . . . . . . 
    . . d d d 8 8 8 d d d d d d . . . . . . . . . . 
    1 1 1 d . 8 8 8 d d d d . . . . . . . . . . . . 
    1 1 1 . . 8 8 8 d d d d . . . . . . . . . . . . 
    . . . . . 8 8 8 d d d d . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 d d . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
    . . . . . 8 . . . . . 8 . . . . . . . . . . . . 
    . . . . 2 2 . . . . 2 2 . . . . . . . . . . . . 
    . . . . 2 2 1 . . . 2 2 1 . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SONIC, 100, 0)
tiles.placeOnTile(SONIC, tiles.getTileLocation(1, 4))
SONIC.ay = 350
scene.cameraFollowSprite(SONIC)
game.onUpdate(function () {
    SONIC.setImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . . . . . . . . . 
        . . . 8 8 . 8 8 8 8 . . . . . . . . . . . . . . 
        . . . 8 8 8 . 8 8 8 8 8 . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 1 1 1 8 . . . . . . . . . . . 
        . . . . 8 8 8 8 8 1 f 1 8 f f . . . . . . . . . 
        . . 8 8 8 8 8 8 8 1 1 1 8 f f . . . . . . . . . 
        . . 8 8 . d d d d d d d d . . . . . . . . . . . 
        . . . . . d d d d d d d d . . . . . . . . . . . 
        . . 8 8 8 d d d d d d d . . 1 1 1 . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . 1 1 1 . . . . . . . 
        . . 8 8 . 8 8 8 8 8 8 8 . . d d . . . . . . . . 
        . . . d d 8 8 8 d d d d d d d . . . . . . . . . 
        . . d d d 8 8 8 d d d d d d . . . . . . . . . . 
        1 1 1 d . 8 8 8 d d d d . . . . . . . . . . . . 
        1 1 1 . . 8 8 8 d d d d . . . . . . . . . . . . 
        . . . . . 8 8 8 d d d d . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 d d . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
        . . . . . 8 . . . . . 8 . . . . . . . . . . . . 
        . . . . 2 2 . . . . 2 2 . . . . . . . . . . . . 
        . . . . 2 2 1 . . . 2 2 1 . . . . . . . . . . . 
        `)
    if (true) {
        SONIC.setImage(img`
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . . . . . . . . . 
            . . . 8 8 . 8 8 8 8 . . . . . . . . . . . . . . 
            . . . 8 8 8 . 8 8 8 8 8 . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 1 1 1 8 . . . . . . . . . . . 
            . . . . 8 8 8 8 8 1 f 1 8 f f . . . . . . . . . 
            . . 8 8 8 8 8 8 8 1 1 1 8 f f . . . . . . . . . 
            . . 8 8 . d d d d d d d d . . . . . . . . . . . 
            . . . . . d d d d d d d d . . . . . . . . . . . 
            1 1 1 8 8 d d d d d d d . . 1 1 1 . . . . . . . 
            1 1 1 . 8 8 8 8 8 8 8 8 . . 1 1 1 . . . . . . . 
            . d d d . 8 8 8 8 8 8 8 . . d d . . . . . . . . 
            . . . d d 8 8 8 8 d d d d d d . . . . . . . . . 
            . . . d d 8 8 8 8 d d d d d . . . . . . . . . . 
            . . . . . 8 8 8 8 d d d . . . . . . . . . . . . 
            . . . . . 8 8 8 8 d d d . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 d d . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
            . . . . . 8 . . . . . 8 . . . . . . . . . . . . 
            . . . . . 2 2 . . . . 2 2 . . . . . . . . . . . 
            . . . . . 2 2 1 . . . 2 2 1 . . . . . . . . . . 
            `)
    } else if (SONIC.vy < 0) {
        SONIC.setImage(img`
            . . . . . . . . . . . f . . . . . . . . . . . . 
            . f . . . f . . . f . f . . f . . . . . . . . . 
            . f . . . f . . . f . f . . f . . f . . . . . . 
            . f . . . f 8 8 . . . . . . f . . f . . . . . . 
            . . . 8 8 . 8 8 8 8 . . . f . . . f . . . . . . 
            . . . 8 8 8 . 8 8 8 8 8 . f . . . f . . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . . f . . . . . . 
            . . . . 8 8 8 8 8 1 f 1 8 f f . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 f f . f . . . . . . . 
            . . 8 8 . d d d d d d d d . . . f . . . . . . . 
            . . . . . d d d d f f d d . . . . . . . . . . . 
            . . 8 8 8 d d d f f f f . . 1 1 1 . . . . . . . 
            f . 8 8 8 8 8 8 8 8 8 8 . . 1 1 1 . . . . . . . 
            f . 8 8 . 8 8 8 8 8 8 8 . . d d . . . . . . . . 
            . . . d d 8 8 8 d d d d d d d . . . . . . . . . 
            . . d d d 8 8 8 d d d d d d . . . . . . . . . . 
            1 1 1 d . 8 8 8 d d d d . . . . . . . . . . . . 
            1 1 1 . . 8 8 8 d d d d . . . . . . . . . . . . 
            . . . . . 8 8 8 d d d d . . . . . . . . . . . . 
            2 2 8 8 . 8 8 8 8 8 d d . 8 8 2 2 . . . . . . . 
            2 2 . 8 8 8 8 8 8 8 8 8 8 8 . 2 2 . . . . . . . 
            1 . . . . . . . . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            `)
    } else if (SONIC.x % 2 == 0) {
        SONIC.setImage(img`
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . . . . . . . . . 
            . . . 8 8 . 8 8 8 8 . . . . . . . . . . . . . . 
            . . . 8 8 8 . 8 8 8 8 8 . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 1 1 1 8 . . . . . . . . . . . 
            . . . . 8 8 8 8 8 1 f 1 8 f f . . . . . . . . . 
            . . 8 8 8 8 8 8 8 1 1 1 8 f f . . . . . . . . . 
            . . 8 8 . d d d d d d d d . . . . . . . . . . . 
            . . . . . d d d d d d d d . . . . . . . . . . . 
            . . 8 8 8 d d d d d d d . . 1 1 1 . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 . . 1 1 1 . . . . . . . 
            . . 8 8 . 8 8 8 8 8 8 8 . . d d . . . . . . . . 
            . . . d d 8 8 8 d d d d d d d . . . . . . . . . 
            . . d d d 8 8 8 d d d d d d . . . . . . . . . . 
            1 1 1 d . 8 8 8 d d d d . . . . . . . . . . . . 
            1 1 1 . . 8 8 8 d d d d . . . . . . . . . . . . 
            . . . . . 8 8 8 d d d d . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 d d . . . . . . . . . . . . 
            . . 2 2 . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
            . . 2 2 8 8 . . . . . 8 . . . . . . . . . . . . 
            . . 1 . . . . . . . 2 2 . . . . . . . . . . . . 
            . . . . . . . . . . 2 2 1 . . . . . . . . . . . 
            `)
    }
    if (SONIC.vy > 0) {
        SONIC.image.flipX()
    }
    for (let value of tiles.getTilesByType(myTiles.tile7)) {
        tiles.setTileAt(value, myTiles.tile1)
    }
    for (let value of tiles.getTilesByType(myTiles.tile17)) {
        battle_toad = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f 7 f . . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . . 7 f 7 . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . 7 7 7 7 7 . . . . . . . 
            . . . 7 7 f 7 f 7 7 . . . . . . 
            . . . 7 . 7 7 7 . 7 . . . . . . 
            . . . 7 . 7 7 7 . 7 . . . . . . 
            . . . . . 7 . 7 . . . . . . . . 
            . . . . . 7 . 7 . . . . . . . . 
            . . . . 7 7 . 7 7 . . . . . . . 
            . . . . 7 7 . 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.p)
        tiles.placeOnTile(battle_toad, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    info.setLife(3)
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        collectable = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . 5 5 5 . . . . . 5 5 5 . . . 
            . 5 5 5 . . . . . . . 5 4 4 . . 
            . 5 5 . . . . . . . . . 4 5 . . 
            . 5 4 . . . . . . . . . 5 5 . . 
            . 5 5 . . . . . . . . . 5 4 . . 
            . 5 5 . . . . . . . . . 4 5 . . 
            . 5 4 . . . . . . . . . 5 5 . . 
            . 5 5 5 . . . . . . . 5 5 4 . . 
            . . 5 5 5 . . . . . 5 5 4 . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            `, SpriteKind.collectable)
        animation.runImageAnimation(
        collectable,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 4 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 4 5 . . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . 5 5 . . . . . . . . . 5 5 . 
            . . 5 5 . . . . . . . . . 4 4 . 
            . . 5 4 . . . . . . . . . 4 5 . 
            . . 5 5 . . . . . . . . . 5 4 . 
            . . 5 4 . . . . . . . . . 4 5 . 
            . . 5 5 . . . . . . . . . 5 5 . 
            . . 5 5 . . . . . . . . . 5 4 . 
            . . . 5 5 . . . . . . . 5 4 . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . 5 5 5 5 5 4 5 5 5 . . . 
            . . . . 5 . . . . . . . 5 . . . 
            . . . 5 4 . . . . . . . 5 4 . . 
            . . . 5 5 . . . . . . . 4 5 . . 
            . . . 5 4 . . . . . . . 5 4 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . . 4 4 . . 
            . . . 5 5 . . . . . . . 4 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . . 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . . 5 5 5 5 4 5 5 . . . . 
            . . . . . 5 . . . . . 5 . . . . 
            . . . . 5 4 . . . . . 5 4 . . . 
            . . . . 5 5 . . . . . 4 5 . . . 
            . . . . 5 4 . . . . . 5 4 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . 5 5 . . . . . 4 4 . . . 
            . . . . 5 5 . . . . . 4 5 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . . 5 5 5 5 4 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 4 . . . 5 4 . . . . 
            . . . . . 5 5 . . . 4 5 . . . . 
            . . . . . 5 4 . . . 5 4 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 4 4 . . . . 
            . . . . . 5 5 . . . 4 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 4 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 4 . 5 4 . . . . . 
            . . . . . . 5 5 . 4 5 . . . . . 
            . . . . . . 5 4 . 5 4 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 . 4 4 . . . . . 
            . . . . . . 5 5 . 4 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 4 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 4 5 . . . . . . 
            . . . . . . . 5 4 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 4 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 4 . 5 4 . . . . . 
            . . . . . . 5 5 . 4 5 . . . . . 
            . . . . . . 5 4 . 5 4 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 . 4 4 . . . . . 
            . . . . . . 5 5 . 4 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 4 . . . 5 4 . . . . 
            . . . . . 5 5 . . . 4 5 . . . . 
            . . . . . 5 4 . . . 5 4 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 4 4 . . . . 
            . . . . . 5 5 . . . 4 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 . . . 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . . 5 5 5 5 4 5 5 . . . . 
            . . . . . 5 . . . . . 5 . . . . 
            . . . . 5 4 . . . . . 5 4 . . . 
            . . . . 5 5 . . . . . 4 5 . . . 
            . . . . 5 4 . . . . . 5 4 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . 5 5 . . . . . 4 4 . . . 
            . . . . 5 5 . . . . . 4 5 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . 5 5 . . . . . 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 4 5 5 5 . . . . 
            . . . . 5 5 5 5 5 4 5 5 5 . . . 
            . . . . 5 . . . . . . . 5 . . . 
            . . . 5 4 . . . . . . . 5 4 . . 
            . . . 5 5 . . . . . . . 4 5 . . 
            . . . 5 4 . . . . . . . 5 4 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . . 4 4 . . 
            . . . 5 5 . . . . . . . 4 5 . . 
            . . . 5 5 . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . . 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        true
        )
        tiles.placeOnTile(collectable, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile16)) {
        egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 f 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 f 7 f 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 f . . . . 
            . . . 7 f 7 f 7 7 7 7 7 7 . . . 
            . . . 7 7 7 7 7 7 f 7 7 f . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 f 7 7 f 7 f 7 . . . . 
            . . . . . . f 7 7 7 . . . . . . 
            `, SpriteKind.creeper_egg)
        tiles.placeOnTile(egg, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
})
