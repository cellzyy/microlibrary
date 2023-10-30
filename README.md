![version](https://img.shields.io/badge/version-1.2-green) ![functions](https://img.shields.io/badge/functions-11-blue)

> HOLD UP!
>
> We open source now: https://mctnb.github.io/microlibrary/main.ts
>
> When you edit, make a PR with your changes and I will review them!

# What is MicroLibrary

A hands-free library for MakeCode. With over 10 functions so far. I am constantly making updates to this. Using MicroLibrary you agree to the MIT License.

> Review license: https://raw.githubusercontent.com/mctnb/microlibrary/master/LICENSE
> 
> Code was made in MakeCode, you can steal scan for viruses if you need

# Functions

```js
microlib.Connection(channel: number); // connect to a radio channel number must be equal or under 255.
microlib.Send(username: string, message: string); // send a message
microlib.ValidateString(string: any); // string or number, also this is useless cuz toString, toNumber, and parseInt.
microlib.Add(number1: number, number2: number); // add (obvious)
microlib.Subtraction(number1: number, number2: number); // subtract (obvious)
microlib.Multiply(number1: number, number2: number); // multiply (obvious)
microlib.Divide(number1: number, number2: number); // divide (obvious)
microlib.Roll(); // returns basic.showNumber, just for testing
microlib.Pear(); // returns basic.showNumber(6), just for funnies
microlib.LoveMeter(); // basically the tutorial in a function.
microlib.SmileyButtons(button: Button); // Button.A or Button.B
```

# Version

> v1.0:
> Connection, Send, ValidateStirng, Add, Subtraction, Multiply, Divide, Roll, Pear added.
> 
> v1.1:
> LoveMeter added, and automatic showing for receiving string.
>
> v1.2:
> Smiley Buttons added.

# MakeCode Basic Stuff

> I don't control this part, it's controlled by MakeCode themselves.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/mctnb/microlibrary** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/mctnb/microlibrary** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
