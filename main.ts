// microlibrary v1.0 (MIT LICENSE, CAN BE EDITED.) \\

namespace microlib {
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

    // built-in functions (simple)

    radio.onReceivedString(function(received){
        basic.showString(received)
    })
}

// Playground:

// v1.1 LOVE METER

input.onPinPressed(TouchPin.P0, function(){
    microlib.LoveMeter()
})

/* v1.0:
microlib.Roll();
pause(200);
microlib.Pear();

// microlibrary still in progress

microlib.Connection(1);
microlib.Send("MCTNB", "test") // will send to MicroBit 1 first for some reason.
microlib.Send("MCTNB", "test2") // will send to both MicroBits
*/