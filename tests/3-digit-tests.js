/*
* This test runs codes similar to 'fF4', 'AAa' and '313'
* Testing the functionality of converting 3 digit hex color codes
*/
const hexToRGB = require('../hexToRGB.js');
const testList = [
  { code: 'A3f', values: {red: 170, green: 51, blue: 255 } },
  { code: '15F', values: {red: 17, green: 85, blue: 255} },
  { code: '578', values: {red: 85, green: 119, blue: 136} }
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
