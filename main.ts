radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(100)
    radio.sendNumber(100)
    radio.sendValue(" xc d", 100)
    radio.sendString("100")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.stringPlayable("E A C G C C5 C C5 ", 100), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
