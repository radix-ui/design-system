///////////////////////////////////////////////////////////////////////////////
/** @preserve
/////    SAPC APCA - Advanced Perceptual Contrast Algorithm
/////           Beta 0.1.9 W3 • contrast function only
/////           DIST: W3 • Revision date: July 3, 2022
/////    Function to parse color values and determine Lc contrast
/////    Copyright © 2019-2022 by Andrew Somers. All Rights Reserved.
/////    LICENSE: W3 LICENSE
/////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
/////    https://github.com/Myndex/SAPC-APCA/
/////
///////////////////////////////////////////////////////////////////////////////
/////
/////    MINIMAL IMPORTS:
/////      import { APCAcontrast, sRGBtoY, displayP3toY,
/////               calcAPCA, fontLookupAPCA } from 'apca-w3';
/////      import { colorParsley } from 'colorparsley';
/////
/////    FORWARD CONTRAST USAGE:
/////      Lc = APCAcontrast( sRGBtoY( TEXTcolor ) , sRGBtoY( BACKGNDcolor ) );
/////    Where the colors are sent as an rgba array [255,255,255,1]
/////
/////    Retrieving an array of font sizes for the contrast:
/////      fontArray = fontLookupAPCA(Lc);
/////
/////    Live Demonstrator at https://www.myndex.com/APCA/
// */
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
/////
/////                  SAPC Method and APCA Algorithm
/////   W3 Licensed Version: https://github.com/Myndex/apca-w3
/////   GITHUB MAIN REPO: https://github.com/Myndex/SAPC-APCA
/////   DEVELOPER SITE: https://git.myndex.com/
/////
/////   Acknowledgments and Thanks To:
/////   • This project references the research & work of M.Fairchild, R.W.Hunt,
/////     Drs. Bailey/Lovie-Kitchin, G.Legge, A.Arditi, M.Stone, C.Poynton,
/////     L.Arend, M.Luo, E.Burns, R.Blackwell, P.Barton, M.Brettel, and many
/////     others — see refs at https://www.myndex.com/WEB/WCAG_CE17polarity
/////   • Bruce Bailey of USAccessBoard for his encouragement, ideas, & feedback
/////   • Chris Lilly of W3C for continued review, examination, & oversight
/////   • Chris Loiselle of Oracle for getting us back on track in a pandemic
/////   • The many volunteer test subjects for participating in the studies.
/////   • The many early adopters, beta testers, and code/issue contributors
/////   • Principal research conducted at Myndex by A.Somers.
/////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
/////
/////   *****  SAPC BLOCK  *****
/////
/////   For Evaluations, refer to this as: SAPC-8, 0.0.98G-series constant 4g
/////            SAPC • S-LUV Advanced Predictive Color
/////
/////   SIMPLE VERSION — Only the basic APCA contrast predictor.
/////
/////   Included Extensions & Model Features in this file:
/////       • SAPC-8 Core Contrast (Base APCA, non-clinical use only)
/////       • G series constants, group "G-4g" using a 2.4 monitor exponent
/////       • sRGB to Y, parses numeric sRGB color to luminance
/////       • SoftToe black level soft clamp and flare compensation.
/////
/////
////////////////////////////////////////////////////////////////////////////////
/////
/////               DISCLAIMER AND LIMITATIONS OF USE
/////     APCA is an embodiment of certain suprathreshold contrast
/////     prediction technologies and it is licensed to the W3 on a
/////     limited basis for use in certain specific accessibility
/////     guidelines for web content only. APCA may be used for
/////     predicting colors for web content use without royalty.
/////
/////     However, Any such license excludes other use cases
/////     not related to web content. Prohibited uses include
/////     medical, clinical evaluation, human safety related,
/////     aerospace, transportation, military applications,
/////     and uses which are not specific to web based content
/////     presented on self-illuminated displays or devices.
/////
////////////////////////////////////////////////////////////////////////////////

//////////   APCA 0.1.9  G 4g USAGE  ///////////////////////////////////////////
///
///  The API for "APCA 0.1.9" is trivially simple.
///  Send text and background sRGB numeric values to the sRGBtoY() function,
///  and send the resulting text-Y and background-Y to the APCAcontrast function
///  it returns a signed float with the numeric Lc contrast result.
///
///  The two inputs are TEXT color and BACKGROUND color in that order.
///  Each must be a numeric NOT a string, as this simple version has
///  no string parsing utilities. EXAMPLE:
///  ________________________________________________________________________
///
///     txtColor = colorParsley(0x123456); // color of the text
///     bgColor  = colorParsley(0xabcdef); // color for the background
///
///     contrastLc = APCAcontrast( sRGBtoY(txtColor) , sRGBtoY(bgColor) );
///  ________________________________________________________________________
///
///                  **********   QUICK START   **********
///
///  Each color must be a 24bit color (8 bit per channel) as a single integer
///  (or 0x) sRGB encoded color, i.e. White is either the integer 16777216 or
///  the hex 0xffffff. A float is returned with a positive or negative value.
///  Negative values mean light text and a dark background, positive values
///  mean dark text and a light background. 60.0, or -60.0 is a contrast
///  "sort of like" the old WCAG 2's 4.5:1. NOTE: the total range is now less
///  than ± 110, so output can be rounded to a signed INT but DO NOT output
///  an absolute value - light text on dark BG should return a negative number.
///
///     *****  IMPORTANT: Do Not Mix Up Text and Background inputs.  *****
///     ****************   APCA is polarity sensitive!   *****************
///
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/////    BEGIN APCA  0.1.9  BLOCK       \/////////////////////////////////////
////                                     \///////////////////////////////////
///                                       \/////////////////////////////////
//                                         \///////////////////////////////

/////  DEPENDENCIES  /////

// The following imports are not needed for the main APCA function,
// but are needed for the shortcut/alias calcAPCA(), and for the
// future invertAPCA function, which examines hue.

////  (add slash to line start for local test mode, remove before push)
/*    ////  LOCAL TESTING SWITCH for using test.html
    import{colorParsley}from'../node_modules/colorparsley/src/colorparsley.js';
/*/ //// TOGGLE
// */ //// END LOCAL TESTING SWITCH

/////  Module Scope Object Containing Constants  /////
/////   APCA   0.0.98G - 4g - W3 Compatible Constants

/////  𝒦 SA98G  ///////////////////////////////////
const SA98G = {
  mainTRC: 2.4, // 2.4 exponent for emulating actual monitor perception

  // For reverseAPCA
  get mainTRCencode() {
    return 1 / this.mainTRC;
  },

  // sRGB coefficients
  sRco: 0.2126729,
  sGco: 0.7151522,
  sBco: 0.072175,

  // G-4g constants for use with 2.4 exponent
  normBG: 0.56,
  normTXT: 0.57,
  revTXT: 0.62,
  revBG: 0.65,

  // G-4g Clamps and Scalers
  blkThrs: 0.022,
  blkClmp: 1.414,
  scaleBoW: 1.14,
  scaleWoB: 1.14,
  loBoWoffset: 0.027,
  loWoBoffset: 0.027,
  deltaYmin: 0.0005,
  loClip: 0.1,

  ///// MAGIC NUMBERS for UNCLAMP, for use with 0.022 & 1.414 /////
  // Magic Numbers for reverseAPCA
  mFactor: 1.9468554433171,
  get mFactInv() {
    return 1 / this.mFactor;
  },
  mOffsetIn: 0.0387393816571401,
  mExpAdj: 0.283343396420869,
  get mExp() {
    return this.mExpAdj / this.blkClmp;
  },
  mOffsetOut: 0.312865795870758,
};

//////////////////////////////////////////////////////////////////////////////
//////////  APCA CALCULATION FUNCTIONS \/////////////////////////////////////

//////////  ƒ  APCAcontrast()  ////////////////////////////////////////////
export function APCAcontrast(txtY: number, bgY: number, places = -1) {
  // send linear Y (luminance) for text and background.
  // txtY and bgY must be between 0.0-1.0
  // IMPORTANT: Do not swap, polarity is important.

  const icp = [0.0, 1.1]; // input range clamp / input error check

  if (isNaN(txtY) || isNaN(bgY) || Math.min(txtY, bgY) < icp[0] || Math.max(txtY, bgY) > icp[1]) {
    return 0.0; // return zero on error
    // return 'error'; // optional string return for error
  }

  //////////   SAPC LOCAL VARS   /////////////////////////////////////////

  let SAPC = 0.0; // For raw SAPC values
  let outputContrast = 0.0; // For weighted final values
  let polCat = 'BoW'; // Alternate Polarity Indicator. N normal R reverse

  // TUTORIAL

  // Use Y for text and BG, and soft clamp black,
  // return 0 for very close luminances, determine
  // polarity, and calculate SAPC raw contrast
  // Then scale for easy to remember levels.

  // Note that reverse contrast (white text on black)
  // intentionally returns a negative number
  // Proper polarity is important!

  //////////   BLACK SOFT CLAMP   ////////////////////////////////////////

  // Soft clamps Y for either color if it is near black.
  txtY = txtY > SA98G.blkThrs ? txtY : txtY + Math.pow(SA98G.blkThrs - txtY, SA98G.blkClmp);
  bgY = bgY > SA98G.blkThrs ? bgY : bgY + Math.pow(SA98G.blkThrs - bgY, SA98G.blkClmp);

  ///// Return 0 Early for extremely low ∆Y
  if (Math.abs(bgY - txtY) < SA98G.deltaYmin) {
    return 0.0;
  }

  //////////   APCA/SAPC CONTRAST - LOW CLIP (W3 LICENSE)  ///////////////

  if (bgY > txtY) {
    // For normal polarity, black text on white (BoW)

    // Calculate the SAPC contrast value and scale
    SAPC = (Math.pow(bgY, SA98G.normBG) - Math.pow(txtY, SA98G.normTXT)) * SA98G.scaleBoW;

    // Low Contrast smooth rollout to prevent polarity reversal
    // and also a low-clip for very low contrasts
    outputContrast = SAPC < SA98G.loClip ? 0.0 : SAPC - SA98G.loBoWoffset;
  } else {
    // For reverse polarity, light text on dark (WoB)
    // WoB should always return negative value.
    polCat = 'WoB';

    SAPC = (Math.pow(bgY, SA98G.revBG) - Math.pow(txtY, SA98G.revTXT)) * SA98G.scaleWoB;

    outputContrast = SAPC > -SA98G.loClip ? 0.0 : SAPC + SA98G.loWoBoffset;
  }

  // return Lc (lightness contrast) as a signed numeric value
  // Round to the nearest whole number as string is optional.
  // Rounded can be a signed INT as output will be within ± 127
  // places = -1 returns signed float, 1 or more set that many places
  // 0 returns rounded string, uses BoW or WoB instead of minus sign

  if (places < 0) {
    // Default (-1) number out, all others are strings
    return outputContrast * 100.0;
  } else if (places == 0) {
    return Math.round(Math.abs(outputContrast) * 100.0) + '<sub>' + polCat + '</sub>';
  } else if (Number.isInteger(places)) {
    return (outputContrast * 100.0).toFixed(places);
  } else {
    return 0.0;
  }
} // End APCAcontrast() // END SWITCH //////////  ƒ  reverseAPCA() DEPRECATED SOON ///////////////////////////////

/*  SWITCH -- WORK IN PROGRESS DO NOT USE
//////////  ƒ  invertAPCA()  //////////////////////////////////////////////////
export function invertAPCA (
      {knownColor: [128,128,128], knownType: 'bg', targetCnst: 75,
       returnAs: 'object', unknownType: 'txt', hueInvert: false,
       hueRange: 5, preserveSat: false }) {

  //if (Math.abs(targetCnst) < 15) { return false }; // abs contrast must be > 15

  let knownY = sRGBtoY (knownColor);
  let unknownY = knownY, knownExp, unknownExp;
  let min,max,knownLs,isBG = true;


  if (knownType == 'bg' || knownType == 'background') {
    knownLs = Math.pow(knownY, );
    black = APCAcontrast(0,knownY);
    white = APCAcontrast(1,knownY);
  } else if  (knownType == 'txt' || knownType == 'text') {
    isBG = false;
    black = APCAcontrast(knownY,0);
    white = APCAcontrast(knownY,1);
  } else { return false } // return false on error


/////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////

  const scale = contrast > 0 ? SA98G.scaleBoW : SA98G.scaleWoB;
  const offset = contrast > 0 ? SA98G.loBoWoffset : -SA98G.loWoBoffset;


    targetCnst = ( parseFloat(targetCnst) * 0.01 + offset ) / scale;

              // Soft clamps Y if it is near black.
    knownY = (knownY > SA98G.blkThrs) ? knownY :
              knownY + Math.pow(SA98G.blkThrs - knownY, SA98G.blkClmp);

       // set the known and unknown exponents
    if (isBG) {
        knownExp = targetCnst > 0 ? SA98G.normBG : SA98G.revBG;
        unknownExp = targetCnst > 0 ? SA98G.normTXT : SA98G.revTXT;
        unknownY = Math.pow( Math.pow(knownY,knownExp) - targetCnst, 1/unknownExp );
        if (isNaN(unknownY)) return false;
    } else if (!isBG) {
        knownExp = targetCnst > 0 ? SA98G.normTXT : SA98G.revTXT;
        unknownExp = targetCnst > 0 ? SA98G.normBG : SA98G.revBG;
        unknownY = Math.pow(targetCnst + Math.pow(knownY,knownExp), 1/unknownExp );
        if (isNaN(unknownY)) return false;
    }

    //return contrast +'----'+unknownY;

    if (unknownY > 1.06 || unknownY < 0) { return false } // return false on overflow
    // if (unknownY < 0) { return false } // return false on underflow
    //unknownY = Math.max(unknownY,0.0);

                //  unclamp
    unknownY = (unknownY > SA98G.blkThrs) ? unknownY :
    (Math.pow(((unknownY + SA98G.mOffsetIn)m* SA98G.mFactor),
                           SA98G.mExp) * SA98G.mFactInv) - SA98G.mOffsetOut;

//    unknownY - 0.22 * Math.pow(unknownY*0.5, 1/blkClmp);

    unknownY = Math.max(Math.min(unknownY,1.0),0.0);

    let testedCnst = (isBG) ? APCAcontrast(unknownY,knownY) :
                              APCAcontrast(knownY,unknownY);

  if (returnAs === 'object') {
    let hexB = ( Math.round(Math.pow(unknownY,SA98G.mainTRCencode) * 255)
                ).toString(16).padStart(2,'0');
    hexB = '#' + hexB + hexB + hexB;
    return  {color: hexB, Lc: testedCnst, whiteLc: white, blackLc: black};
  } else if (returnAs === 'hex') {
    let hexB = ( Math.round(Math.pow(unknownY,SA98G.mainTRCencode) * 255)
                ).toString(16).padStart(2,'0');
    return  '#' + hexB + hexB + hexB;
  } else if (returnAs === 'array') {
    let colorB = Math.round(Math.pow(unknownY,SA98G.mainTRCencode) * 255);
    let retUse = (knownType == 'bg') ? 'txtColor' : 'bgColor'
    return  [colorB,colorB,colorB,1,retUse];
  } else if (returnAs === 'Y' || returnAs === 'y') {
    return  Math.max(0.0,unknownY);
  } else { return false } // return knownY on error
}
//  */ export function reverseAPCA(
  contrast = 0,
  knownY = 1.0,
  knownType = 'bg',
  returnAs = 'hex'
) {
  if (Math.abs(contrast) < 9) {
    return false;
  } // abs contrast must be > 9

  let unknownY = knownY,
    knownExp,
    unknownExp;

  /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////

  const scale = contrast > 0 ? SA98G.scaleBoW : SA98G.scaleWoB;
  const offset = contrast > 0 ? SA98G.loBoWoffset : -SA98G.loWoBoffset;

  contrast = (parseFloat(contrast) * 0.01 + offset) / scale;

  // Soft clamps Y if it is near black.
  knownY =
    knownY > SA98G.blkThrs ? knownY : knownY + Math.pow(SA98G.blkThrs - knownY, SA98G.blkClmp);

  // set the known and unknown exponents
  if (knownType == 'bg' || knownType == 'background') {
    knownExp = contrast > 0 ? SA98G.normBG : SA98G.revBG;
    unknownExp = contrast > 0 ? SA98G.normTXT : SA98G.revTXT;
    unknownY = Math.pow(Math.pow(knownY, knownExp) - contrast, 1 / unknownExp);
    if (isNaN(unknownY)) return false;
  } else if (knownType == 'txt' || knownType == 'text') {
    knownExp = contrast > 0 ? SA98G.normTXT : SA98G.revTXT;
    unknownExp = contrast > 0 ? SA98G.normBG : SA98G.revBG;
    unknownY = Math.pow(contrast + Math.pow(knownY, knownExp), 1 / unknownExp);
    if (isNaN(unknownY)) return false;
  } else {
    return false;
  } // return false on error

  //return contrast +'----'+unknownY;

  if (unknownY > 1.06 || unknownY < 0) {
    return false;
  } // return false on overflow
  // if (unknownY < 0) { return false } // return false on underflow
  //unknownY = Math.max(unknownY,0.0);

  //  unclamp
  unknownY =
    unknownY > SA98G.blkThrs
      ? unknownY
      : Math.pow((unknownY + SA98G.mOffsetIn) * SA98G.mFactor, SA98G.mExp) * SA98G.mFactInv -
        SA98G.mOffsetOut;

  //    unknownY - 0.22 * Math.pow(unknownY*0.5, 1/blkClmp);

  unknownY = Math.max(Math.min(unknownY, 1.0), 0.0);

  if (returnAs === 'hex') {
    let hexB = Math.round(Math.pow(unknownY, SA98G.mainTRCencode) * 255)
      .toString(16)
      .padStart(2, '0');

    return '#' + hexB + hexB + hexB;
  } else if (returnAs === 'color') {
    let colorB = Math.round(Math.pow(unknownY, SA98G.mainTRCencode) * 255);
    let retUse = knownType == 'bg' ? 'txtColor' : 'bgColor';
    return [colorB, colorB, colorB, 1, retUse];
  } else if (returnAs === 'Y' || returnAs === 'y') {
    return Math.max(0.0, unknownY);
  } else {
    return false;
  } // return knownY on error
}

//////////  ƒ  calcAPCA()  /////////////////////////////////////////////
export function calcAPCA(
  textColor: [number, number, number, number],
  bgColor: [number, number, number, number],
  places = -1,
  round = true
) {
  // Note that this function requires colorParsley !!
  let hasAlpha = textColor[3] == 1 ? false : true;

  if (hasAlpha) {
    textColor = alphaBlend(textColor, bgColor, round) as [number, number, number, number];
  }

  return APCAcontrast(sRGBtoY(textColor), sRGBtoY(bgColor), places);
} // End calcAPCA()

//////////////////////////////////////////////////////////////////////////////
//////////  ƒ  fontLookupAPCA()  0.1.7 (G)  \////////////////////////////////
/////////                                    \//////////////////////////////

export function fontLookupAPCA(contrast, places = 2) {
  ////////////////////////////////////////////////////////////////////////////
  /////  CONTRAST * FONT WEIGHT & SIZE  /////////////////////////////////////

  // Font size interpolations. Here the chart was re-ordered to put
  // the main contrast levels each on one line, instead of font size per line.
  // First column is LC value, then each following column is font size by weight

  // G G G G G G  Public Beta 0.1.7 (G) • MAY 28 2022

  // Lc values under 70 should have Lc 15 ADDED if used for body text
  // All font sizes are in px and reference font is Barlow

  // 999: prohibited - too low contrast
  // 777: NON TEXT at this minimum weight stroke
  // 666 - this is for spot text, not fluent-Things like copyright or placeholder.
  // 5xx - minimum font at this weight for content, 5xx % 500 for font-size
  // 4xx - minimum font at this weight for any purpose], 4xx % 400 for font-size

  // MAIN FONT SIZE LOOKUP

  //// ASCENDING SORTED  Public Beta 0.1.7 (G) • MAY 28 2022  ////

  //// Lc 45 * 0.2 = 9 which is the index for the row for Lc 45

  // MAIN FONT LOOKUP May 28 2022 EXPANDED
  // Sorted by Lc Value
  // First row is standard weights 100-900
  // First column is font size in px
  // All other values are the Lc contrast
  // 999 = too low. 777 = non-text and spot text only

  const fontMatrixAscend = [
    ['Lc', 100, 200, 300, 400, 500, 600, 700, 800, 900],
    [0, 999, 999, 999, 999, 999, 999, 999, 999, 999],
    [10, 999, 999, 999, 999, 999, 999, 999, 999, 999],
    [15, 777, 777, 777, 777, 777, 777, 777, 777, 777],
    [20, 777, 777, 777, 777, 777, 777, 777, 777, 777],
    [25, 777, 777, 777, 120, 120, 108, 96, 96, 96],
    [30, 777, 777, 120, 108, 108, 96, 72, 72, 72],
    [35, 777, 120, 108, 96, 72, 60, 48, 48, 48],
    [40, 120, 108, 96, 60, 48, 42, 32, 32, 32],
    [45, 108, 96, 72, 42, 32, 28, 24, 24, 24],
    [50, 96, 72, 60, 32, 28, 24, 21, 21, 21],
    [55, 80, 60, 48, 28, 24, 21, 18, 18, 18],
    [60, 72, 48, 42, 24, 21, 18, 16, 16, 18],
    [65, 68, 46, 32, 21.75, 19, 17, 15, 16, 18],
    [70, 64, 44, 28, 19.5, 18, 16, 14.5, 16, 18],
    [75, 60, 42, 24, 18, 16, 15, 14, 16, 18],
    [80, 56, 38.25, 23, 17.25, 15.81, 14.81, 14, 16, 18],
    [85, 52, 34.5, 22, 16.5, 15.625, 14.625, 14, 16, 18],
    [90, 48, 32, 21, 16, 15.5, 14.5, 14, 16, 18],
    [95, 45, 28, 19.5, 15.5, 15, 14, 13.5, 16, 18],
    [100, 42, 26.5, 18.5, 15, 14.5, 13.5, 13, 16, 18],
    [105, 39, 25, 18, 14.5, 14, 13, 12, 16, 18],
    [110, 36, 24, 18, 14, 13, 12, 11, 16, 18],
    [115, 34.5, 22.5, 17.25, 12.5, 11.875, 11.25, 10.625, 14.5, 16.5],
    [120, 33, 21, 16.5, 11, 10.75, 10.5, 10.25, 13, 15],
    [125, 32, 20, 16, 10, 10, 10, 10, 12, 14],
  ];

  // ASCENDING SORTED  Public Beta 0.1.7 (G) • MAY 28 2022 ////

  // DELTA - MAIN FONT LOOKUP May 28 2022 EXPANDED
  // EXPANDED  Sorted by Lc Value ••  DELTA
  // The pre-calculated deltas of the above array

  const fontDeltaAscend = [
    ['∆Lc', 100, 200, 300, 400, 500, 600, 700, 800, 900],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [25, 0, 0, 0, 12, 12, 12, 24, 24, 24],
    [30, 0, 0, 12, 12, 36, 36, 24, 24, 24],
    [35, 0, 12, 12, 36, 24, 18, 16, 16, 16],
    [40, 12, 12, 24, 18, 16, 14, 8, 8, 8],
    [45, 12, 24, 12, 10, 4, 4, 3, 3, 3],
    [50, 16, 12, 12, 4, 4, 3, 3, 3, 3],
    [55, 8, 12, 6, 4, 3, 3, 2, 2, 0],
    [60, 4, 2, 10, 2.25, 2, 1, 1, 0, 0],
    [65, 4, 2, 4, 2.25, 1, 1, 0.5, 0, 0],
    [70, 4, 2, 4, 1.5, 2, 1, 0.5, 0, 0],
    [75, 4, 3.75, 1, 0.75, 0.188, 0.188, 0, 0, 0],
    [80, 4, 3.75, 1, 0.75, 0.188, 0.188, 0, 0, 0],
    [85, 4, 2.5, 1, 0.5, 0.125, 0.125, 0, 0, 0],
    [90, 3, 4, 1.5, 0.5, 0.5, 0.5, 0.5, 0, 0],
    [95, 3, 1.5, 1, 0.5, 0.5, 0.5, 0.5, 0, 0],
    [100, 3, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0, 0],
    [105, 3, 1, 0, 0.5, 1, 1, 1, 0, 0],
    [110, 1.5, 1.5, 0.75, 1.5, 1.125, 0.75, 0.375, 1.5, 1.5],
    [115, 1.5, 1.5, 0.75, 1.5, 1.125, 0.75, 0.375, 1.5, 1.5],
    [120, 1, 1, 0.5, 1, 0.75, 0.5, 0.25, 1, 1],
    [125, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  // APCA CONTRAST FONT LOOKUP TABLES
  // Copyright © 2022 by Myndex Research and Andrew Somers. All Rights Reserved
  // Public Beta 0.1.7 (G) • MAY 28 2022
  // For the following arrays, the Y axis is contrastArrayLen
  // The two x axis are weightArrayLen and scoreArrayLen

  // MAY 28 2022

  const weightArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const weightArrayLen = weightArray.length; // X axis

  let returnArray = [contrast.toFixed(places), 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const returnArrayLen = returnArray.length; // X axis

  const contrastArrayAscend = [
    'lc',
    0,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120,
    125,
  ];
  const contrastArrayLenAsc = contrastArrayAscend.length; // Y azis

  //// Lc 45 * 0.2 = 9, and 9 is the index for the row for Lc 45

  let tempFont = 777;
  contrast = Math.abs(contrast); // Polarity unneeded for LUT
  const factor = 0.2; // 1/5 as LUT is in increments of 5
  const index = contrast == 0 ? 1 : (contrast * factor) | 0; // LUT row... n|0 is bw floor
  let w = 0;
  // scoreAdj interpolates the needed font side per the Lc
  let scoreAdj = (contrast - fontMatrixAscend[index][w]) * factor;

  w++; // determines column in font matrix LUT

  /////////  Font and Score Interpolation  \/////////////////////////////////

  // populate returnArray with interpolated values

  for (; w < weightArrayLen; w++) {
    tempFont = fontMatrixAscend[index][w];

    if (tempFont > 400) {
      // declares a specific minimum for the weight.
      returnArray[w] = tempFont;
    } else if (contrast < 14.5) {
      returnArray[w] = 999; //  999 = do not use for anything
    } else if (contrast < 29.5) {
      returnArray[w] = 777; // 777 =  non-text only
    } else {
      // INTERPOLATION OF FONT SIZE
      // sets level for 0.5px size increments of smaller fonts
      // Note bitwise (n|0) instead of floor
      tempFont > 24
        ? (returnArray[w] = Math.round(tempFont - fontDeltaAscend[index][w] * scoreAdj))
        : (returnArray[w] = tempFont - ((2.0 * fontDeltaAscend[index][w] * scoreAdj) | 0) * 0.5);
      // (n|0) is bitwise floor
    }
  }
  /////////  End Interpolation  ////////////////////////////////////////////

  return returnArray;
} // end fontLookupAPCA

/////////\                                      ///////////////////////////\
//////////\  END  fontLookupAPCA()  0.1.7 (G)  /////////////////////////////\
/////////////////////////////////////////////////////////////////////////////\

//////////////////////////////////////////////////////////////////////////////
//////////  LUMINANCE CONVERTERS  |//////////////////////////////////////////

//////////  ƒ  sRGBtoY()  //////////////////////////////////////////////////
export function sRGBtoY(rgb = [0, 0, 0]) {
  // send sRGB 8bpc (0xFFFFFF) or string

  // NOTE: Currently expects 0-255

  /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
  /*
const mainTRC = 2.4; // 2.4 exponent emulates actual monitor perception

const sRco = 0.2126729,
      sGco = 0.7151522,
      sBco = 0.0721750; // sRGB coefficients
      */
  // Future:
  // 0.2126478133913640	0.7151791475336150	0.0721730390750208
  // Derived from:
  // xW	yW	K	xR	yR	xG	yG	xB	yB
  // 0.312720	0.329030	6504	0.640	0.330	0.300	0.600	0.150	0.060

  // linearize r, g, or b then apply coefficients
  // and sum then return the resulting luminance

  function simpleExp(chan) {
    return Math.pow(chan / 255.0, SA98G.mainTRC);
  }

  return (
    SA98G.sRco * simpleExp(rgb[0]) + SA98G.sGco * simpleExp(rgb[1]) + SA98G.sBco * simpleExp(rgb[2])
  );
} // End sRGBtoY()

//////////  ƒ  displayP3toY()  /////////////////////////////////////////////
export function displayP3toY(rgb = [0, 0, 0]) {
  // send rgba array

  // NOTE: Currently Apple has the tuple as 0.0 to 1.0, NOT 255

  /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////

  const mainTRC = 2.4; // 2.4 exponent emulates actual monitor perception
  // Pending evaluation, because, Apple...

  const sRco = 0.228982959480578,
    sGco = 0.691749262585238,
    sBco = 0.0792677779341829; // displayP3 coefficients

  // Derived from:
  // xW	yW	K	xR	yR	xG	yG	xB	yB
  // 0.312720	0.329030	6504	0.680	0.320	0.265	0.690	0.150	0.060

  // linearize r, g, or b then apply coefficients
  // and sum then return the resulting luminance

  function simpleExp(chan) {
    return Math.pow(chan, mainTRC);
  }

  return sRco * simpleExp(rgb[0]) + sGco * simpleExp(rgb[1]) + sBco * simpleExp(rgb[2]);
} // End displayP3toY()

//////////  ƒ  adobeRGBtoY()  /////////////////////////////////////////////
export function adobeRGBtoY(rgb = [0, 0, 0]) {
  // send rgba array

  // NOTE: Currently expects 0-255

  /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////

  const mainTRC = 2.35; // 2.35 exponent emulates actual monitor perception
  // Pending evaluation...

  const sRco = 0.297355022711381,
    sGco = 0.627372749714528,
    sBco = 0.0752722275740913; // adobeRGB coefficients

  // Derived from:
  // xW	yW	K	xR	yR	xG	yG	xB	yB
  // 0.312720	0.329030	6504	0.640	0.330	0.210	0.710	0.150	0.060

  // linearize r, g, or b then apply coefficients
  // and sum then return the resulting luminance

  function simpleExp(chan) {
    return Math.pow(chan / 255.0, mainTRC);
  }

  return sRco * simpleExp(rgb[0]) + sGco * simpleExp(rgb[1]) + sBco * simpleExp(rgb[2]);
} // End displayP3toY()

////////////////////////////////////////////////////////////////////////////
//////////  UTILITIES  \///////////////////////////////////////////////////

//////////  ƒ  alphaBlend()  /////////////////////////////////////////////

// send rgba array for text/icon, rgb for background.
// Only foreground allows alpha of 0.0 to 1.0
// This blends using gamma encoded space (standard)
// rounded 0-255 or set round=false for number 0.0-255.0
export function alphaBlend(rgbaFG = [0, 0, 0, 1.0], rgbBG = [0, 0, 0], round = true) {
  rgbaFG[3] = Math.max(Math.min(rgbaFG[3], 1.0), 0.0); // clamp alpha 0-1
  let compBlend = 1.0 - rgbaFG[3];
  let rgbOut = [0, 0, 0, 1]; // or just use rgbBG to retain other elements?

  for (let i = 0; i < 3; i++) {
    rgbOut[i] = rgbBG[i] * compBlend + rgbaFG[i] * rgbaFG[3];
    if (round) rgbOut[i] = Math.min(Math.round(rgbOut[i]), 255);
  }
  return rgbOut;
} // End alphaBlend()

//\                                     ////////////////////////////////////////
///\                                   ////////////////////////////////////////
////\                                 ////////////////////////////////////////
/////\  END APCA 0.1.9  G-4g  BLOCK  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
