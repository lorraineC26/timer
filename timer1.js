//Implement a timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

const args = process.argv;
const beepTiming = args.slice(2);

for (const timing of beepTiming) {
  if (timing < 0 || isNaN(timing)) { // when input is either not a positive# or a # at all
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07'); // system sound
  }, timing);
}

