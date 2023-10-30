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
}

// Playground:

microlib.Roll();
pause(200);
microlib.Pear();

// microlibrary still in progress