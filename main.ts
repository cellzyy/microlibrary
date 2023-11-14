// microlibrary v1.0 (MIT LICENSE, CAN BE EDITED.) \\
// microlibrary now uses Time and Date extension
// ml v1.4 testing

enum Time {
    AM = timeanddate.MornNight.AM,
    PM = timeanddate.MornNight.PM
}

let cache: any = []

namespace microlib {
    export function FasterConnection(RadioID: number){
        if(RadioID <= 255){
            radio.setGroup(RadioID)
        }
    }

    export function Connection(RadioID: number) {
        if(RadioID >= 256){
            basic.showString("256 and above are invalid channels.")
        }else{
            basic.showString("Connecting")
            radio.setGroup(RadioID);
            basic.showString("Connected")
            radio.sendString("Someone has connected.")
        }
    }

    export function Send(Username: string, Message: string){
        radio.sendString("You got input!")
        radio.sendString(Username + ": " + Message);
    }

    export function ValidateString(string: any){
        if(parseInt(string) == string){
            return false
        }else{
            return true
        }
    }

    export function Add(number1: number, number2: number){
        return number1 += number2
    }

    export function Divide(number1: number, number2: number){
        return number1 / number2
    }

    export function Subtraction(number1: number, number2: number){
        return number1 -= number2
    }

    export function Multiply(number1: number, number2: number){
        return number1 * number2
    }

    export function Roll(){
        return basic.showNumber(randint(1,6));
    }

    export function Pear(){
        // the joke is 6 looks like a pear on microbit
        return basic.showNumber(6);
    }

    // micro:bit tutorials but functions

    export function LoveMeter(){
        let LoveMeter = randint(0,100)
        basic.showString("LOVE METER")
        basic.showNumber(LoveMeter)
        if(LoveMeter <= 25){
            basic.showString("NO LOVE")
        }else{
            if(LoveMeter <= 50){
                basic.showString("BFF LOVE")
            }else{
                if(LoveMeter <= 75){
                    basic.showString("BROKENHEARTED LOVE")
                }else{
                    basic.showString("HOT FIERY LOVE")
                }
            }
        }
    }

    export function SmileyButtons(pressed: Button){
        if(pressed==Button.A){
            basic.showIcon(IconNames.Happy)
        }else{
            if(pressed=Button.B){
                basic.showIcon(IconNames.Sad)
            }else{
                console.log("Error")
            }
        }
    }

    // Servo testing

    export function WritePin(to: number, pin: AnalogPin){
        pins.servoWritePin(pin, to)
    }

    // cache testing V2

    export function write(writeToCache: any){
        cache.push(writeToCache)
    }

    export function grab(lookingFor: any){
        return cache[lookingFor] || "Error: Doesn't exist"
    }

    export function show(){
        return cache
    }

    // Time

    export function SetTime(hour: number, minute: number, second: number, ampm: timeanddate.MornNight){
        timeanddate.setTime(hour, minute, second, ampm)
    }

    export function CurrentTime(){
        return timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM)
    }

    export function MicrobitTime(){
        return timeanddate.secondsSinceReset()
    }

    // built-in functions (simple)

    radio.onReceivedString(function(received){
        basic.showString(received)
    })
}

// Playground:

// v1.4 servos

microlib.FasterConnection(1)

input.onButtonPressed(Button.A, function(){
    microlib.WritePin(180, AnalogPin.P0)
})

input.onButtonPressed(Button.B, function(){
    microlib.WritePin(0, AnalogPin.P0)
})

/*
v1.31 was testing cache thing but its removed now (p.s. now testing again in v1.4)

microlib.ChangeCache({"Test": "string", "test": 1})
console.log(microlib.CacheData())

v1.3 Date and Time blocks (testing)

microlib.SetTime(1, 13, 0, timeanddate.MornNight.PM)
console.log(microlib.CurrentTime())
console.log(microlib.MicrobitTime())

v1.2 SMILEY BUTTONS

input.onButtonPressed(Button.A, function(){
    microlib.SmileyButtons(Button.A)
})

input.onButtonPressed(Button.B, function(){
    microlib.SmileyButtons(Button.B)
})

v1.1 LOVE METER

input.onPinPressed(TouchPin.P0, function(){
    microlib.LoveMeter()
})

v1.0 Basic:

microlib.Roll();
pause(200);
microlib.Pear();

microlibrary still in progress

microlib.Connection(1);
microlib.Send("MCTNB", "test") // will send to MicroBit 1 first for some reason.
microlib.Send("MCTNB", "test2") // will send to both MicroBits
*/