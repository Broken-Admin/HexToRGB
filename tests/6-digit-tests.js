/*
* This test runs codes similar to 'a4D5f6', '4dD5d0' and '120000'
* Testing the functionality of converting 3 digit hex color codes
*/
const hexToRGB = require('../hexToRGB.js');
const testList = [
  { code: '121212', values: {red: 18, green: 18, blue: 18} },
  { code: 'f0F0f5', values: {red: 240, green: 240, blue: 245} },
  { code: '000000', values: {red: 0, green: 0, blue: 0} },
  { code: '555555', values: {red: 85, green: 85, blue: 85 } },
  { code: '6f6f6f', values: {red: 111, green: 111, blue: 111} },
  { code: 'ffffff', values: {red: 255, green: 255, blue: 255} }
]

for(i in testList) {
  RGBcodes = hexToRGB(testList[i].code);
  if(RGBcodes.red    != testList[i].values.red
  ||  RGBcodes.green != testList[i].values.green
  ||  RGBcodes.blue  != testList[i].values.blue){
   console.log(`Wrong codes returned for 3 length color code - ${testList[i].code}.`);
   process.exit();
  }
  console.log('Test passed!');
  process.exit();
}
