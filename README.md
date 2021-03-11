# Pin Reset Remote Control (Panasonic Viera)

Pin Reset Remote Control (Panasonic Viera) is a basic remote control for Android app written in React Native.

It has all the basic functionalities of a Panasonic Viera Remote Control, plus an extra button that runs an automation script for resetting the 4 digit PIN number on a Panasonic Viera TV, in case you forgot completely forgot it.

The Reset PIN button will basically try every code possible until it finds the forgotten PIN.

It is meant to go at human speed because that's the speed the testing TV was able to respond to. Going faster would just result on the TV not being process all commands on the sequence.

![pin-reset-remote-control](https://github.com/y152132341/pin-reset-remote-control/blob/main/app/assets/remote.png)

## Non Developers

If you are not a developer and you only want to reset your pin, you can just download the app from [this path](https://github.com/y152132341/pin-reset-remote-control/android/app/build/outputs/apk/debug/app-debug.apk) on your phone and install it from your browser. 

You must have an android device on Dev Mode and with an IR Blaster.

## Development

### Requirements

1. Android SDK (with adb)
1. React Native Dev environment
1. Android phone on Dev Mode with IR Blaster

### Usage

First open a terminal window and start the app's server
```
$ yarn start
```
Then open another terminal window and build the app.
This command will also install the app on your phone, so you need to have it already plugged in to your computer.

```
$ yarn run android
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
