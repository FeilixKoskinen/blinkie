input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . . #
            . # . # .
            . . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
})
