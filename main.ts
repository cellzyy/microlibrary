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

    // Countdown

    export function cd(count: number){
        for (let i = 1; i < count+1; i++) {
            console.log(i)
        }
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

// oops just realized playground makes users who using this as an extension
// automatically load the code sorry