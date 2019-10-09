module.exports = function(hex) {
    hexNums = {
        a: '10', b: '11', c: '12', d: '13', e: '14', f: '15',
        A: '10', B: '11', C: '12', D: '13', E: '14', F: '15'
    }
    rgbArr = [];

    if (!hex || !(hex.toString().match(/^([A-Fa-f0-9]{6})$/g) ||
    hex.toString().match(/^[A-Fa-f0-9]{3}$/g))) {
        console.log("Usage is \"node [filename].js [hex code]\"");
        process.exit();
    }

    hexArr = hex.split('');
    hexArr = hexArr.map(hx => {
        if (isNaN(hx)) return (parseInt(hexNums[hx]));
        else return (parseInt(hx));
    })
    minorHx = [];
    majorHx = [];
    if (hexArr.length == 3) {
        rgbArr = hexArr.map(hx => hx * 17)
    }
    else { // The hex is a full 6 byte hex.
      for (let i = 0; i < hexArr.length; i++) {
        if(i%2!=0) {
          minorHx.push(hexArr[i]);
          // These are minor codes that are in the ones place
          // 0x0x0x
        } else {
          majorHx.push(hexArr[i]);
          // These are major codes that are in the sixteens place
          // x0x0x0
        }
      }
      for(let i=0;i<3;i++){
        rgbArr[i] = majorHx[i] * 16 + minorHx[i];
      }
    }
    red   = rgbArr[0];
    green = rgbArr[1];
    blue  = rgbArr[2];
    return({red: red, green: green, blue: blue});
}
