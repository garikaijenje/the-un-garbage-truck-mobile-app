import { Dimensions, Platform, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");

export const deviceWidth = width;
export const deviceHeight = height;

let colors = undefined;
let components = undefined;

try {
  const config = require('../shona.config')
  colors = config.colors;
  components = config.components;
} catch (error) {}

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === 780 || width === 780)
      || (height === 812 || width === 812)
      || (height === 844 || width === 844)
      || (height === 896 || width === 896)
      || (height === 926 || width === 926))
  );
}

export function bottomSpace() {
  return isIphoneX() ? 34 : 0;
}

const standardLength = width > height ? width : height;

const offset = width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

// const deviceHeight = isIphoneX() || Platform.OS === "android" ? standardLength - offset : standardLength;

export const percentageValue = (percent) => { return Math.round((percent * deviceHeight) / 100); }
export const percentageWidth = (percent) => { return Math.round((percent * width) / 100); }

export const relativeValue = (size) => { return Math.round((size * deviceHeight) / height); }

// fontSize

// fontStyle
const fontStyles = ["normal", "italic"];

// fontVariant
const fontVariants = [
  "small-caps",
  "oldstyle-nums",
  "lining-nums",
  "tabular-nums",
  "proportional-nums",
];

// fontWeight
const fontWeights = [
  "normal", "bold", "100", "200", "300",
  "400", "500", "600", "700", "800", "900"
];

// textAlign
const textAlignmentHorizontal = [
  "auto", "left", "right", "center", "justify"
];

// textAlignVertical
const textAlignmentVertical = [
  "auto", "top", "bottom", "center"
];

// letterSpacing

// writtingDirection
const writingDirections = [
  "auto", "ltr", "rtl"
];

// textDecorationLine
const textDecorationLines = [
  "none", "underline", "line-through", "underline line-through"
];

// textDecorationStyle
const textDecorationStyles = [
  "solid", "double", "dotted", "dashed"
];

// textTransform
const textTransformations = [
  "none", "uppercase", "lowercase", "capitalize"
];

  // lineHeight
  // letterSpacing
  // includeFontPadding

const shonaStyles = [

  "text-size", "ts",  // text size relative
  "text-decoration", "td",  // text decoration
  "text-weight", "tw",  // text weight
  "text-position", "tp",  // text position [left, right, center, justified]
  "text-color", "tc", // text-color

  "width", "w", // width
  
  "flex", "f", // flex
  "direction", "d", // flex
  "justify", "j", // flex
  "items", "i", // flex
  "self", "s", // flex
  
  "height", "h", // height

  "position",   // position [relative, absolute]
  "position-left",
  "position-right",
  "position-top",
  "position-bottom",

  "background", "bg",   // background color

  "padding", "p",    // padding
  "padding-x-axis", "px",  // padding x-axis
  "padding-y-axis", "py",  // padding y-axis
  "padding-left", "pl",  // padding left
  "padding-right", "pr",  // padding right
  "padding-top", "pt",  // padding top
  "padding-bottom", "pb",  // padding bottom

  "margin", "m",   // margin
  "margin-x-axis", "mx",  // margin x-axis
  "margin-y-axis", "my",  // margin y-axis
  "margin-left", "ml",  // margin left
  "margin-right", "mr",  // margin right
  "margin-top", "mt",  // margin top
  "margin-bottom", "mb",  // margin bottom relative

  "radius", "r",    // radius
  "radius-top", "rt",   // radius top
  "radius-bottom", "rb",   // radius bottom
  "radius-left", "rl",   // radius left
  "radius-right", "rr",   // radius right
  "radius-top-left", "rtl",   // radius top left
  "radius-top-right", "rtr",   // radius top right
  "radius-bottom-left", "rbl",   // radius bottom left
  "radius-bottom-right", "rbr",   // radius bottom right
  
  "line-heigh","lh",   // line height relative
  "letter-spacing","ls",   // letter spacing relative

];

const handleJustify = (value) => {

  switch (value) {
    case 'center':
      return 'center';
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return null;
  }

}

const handleItems = (value) => {

  switch (value) {
    case 'center':
      return 'center';
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'stretch':
      return 'stretch';
    case 'baseline':
      return 'baseline';
    default:
      return null;
  }

}

const handleSelf = (value) => {

  switch (value) {
    case 'center':
      return 'center';
    case 'auto':
      return 'auto';
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'stretch':
      return 'stretch';
    default:
      return null;
  }

}

const handleDirection = (value) => {

  switch (value) {
    case 'row':
      return 'row';
    case 'rowreverse':
      return 'row-reverse';
    case 'column':
      return 'column';
    case 'columnreverse':
      return 'column-reverse';
    default:
      return null;
  }

}

const handleFlex = (value) => {

  if (value === 'row' || value === 'row-reverse' || value === 'column' || value === 'column-reverse' ) {
    return { flexDirection: handleDirection(value) }
  }else if (value === 'wrap' || value === 'nowrap') {
    return { flexWrap: value }
  }else{
    return { flex: parseInt(value)}
  }

}

const handleColors = (value) => {

  if (colors && colors[value]){
    return colors[value]
  }else{
    return value;
  }

}

export const conversion = (identifer, value, negative, percentage) => {

  const options = {

    // TEXT
    "text-size": { fontSize: percentage ? percentageValue(value) : relativeValue(value) },
    "ts": { fontSize: percentage ? percentageWidth(value) : relativeValue(value) },

    "text-color": { color: handleColors(value) },
    "tc": { color: handleColors(value) },

    "text-decoration": { textDecoration: value },
    "td": { textDecoration: value },

    "text-weight": { fontWeight: value },
    "tw": { fontWeight: value },

    "text-position": { textAlign: value },
    "tp": { textAlign: value },

    // SIZE
    "width": { width: percentage ? percentageValue(value) : (value === 'full' ? percentageWidth(100) : (value === 'half' ? '50%' : relativeValue(value) ) ) },
    "w": { width: percentage ? percentageValue(value) : (value === 'full' ? '100%' : (value === 'half' ? '50%' : relativeValue(value) ) ) },

    "flex": handleFlex(value),
    // "flex": { flex: handleFlex(value) },
    "justify": { justifyContent: handleJustify(value) },
    "items": { alignItems: handleItems(value) },
    "self": { alignSelf: handleSelf(value) },

    "height": { height: percentage ? percentageValue(value) : relativeValue(value) },
    "h": { height: percentage ? percentageValue(value) : relativeValue(value) },

    // PADDING
    "padding": { padding: percentage ? percentageValue(value) : relativeValue(value) },
    "p": { padding: percentage ? percentageValue(value) : relativeValue(value) },

    "padding-x-axis": { paddingHorizontal: percentage ? percentageValue(value) : relativeValue(value) },
    "px": { paddingHorizontal: percentage ? percentageValue(value) : relativeValue(value) },
    
    "padding-y-axis": { paddingVertical: percentage ? percentageValue(value) : relativeValue(value) },
    "py": { paddingVertical: percentage ? percentageValue(value) : relativeValue(value) },

    "padding-left": { paddingLeft: percentage ? percentageValue(value) : relativeValue(value) },
    "pl": { paddingLeft: percentage ? percentageValue(value) : relativeValue(value) },

    "padding-right": { paddingRight: percentage ? percentageValue(value) : relativeValue(value) },
    "pr": { paddingRight: percentage ? percentageValue(value) : relativeValue(value) },

    "radius": { borderRadius: percentage ? percentageValue(value) : relativeValue(value) },

    // MARGIN
    "margin": { margin: negative ? -relativeValue(value) : relativeValue(value) },

    "margin-top": { marginTop: negative ? -relativeValue(value) : relativeValue(value) },
    "margin-bottom": { marginBottom: negative ? -relativeValue(value) : relativeValue(value) },

    // BACKGROUND
    "background": { backgroundColor: handleColors(value) },
    "bg": { backgroundColor: handleColors(value) }

  }

  return options[identifer];

}

export const shona = (classNames) => {

  const separateClassNames = classNames.replace(/\s+/g, ' ').trim().split(' ');

    let obj = {};

      separateClassNames.forEach(className => {

        let negative = className.startsWith('-') ? true : false;
        let percentage = className.startsWith('%:') ? true : false;

        if (negative) className = className.substring(1);
        if (percentage) className = className.substring(2);

        const segments = className.split('-');

        const value = segments.pop()

        let identifier = className.substring(0, (className.length - value.length) - 1) // -1 to remove the dash (-)
        
        if (shonaStyles.includes(identifier) ) {

          const con = conversion(identifier, value, negative, percentage);
          Object.assign(obj,con)

        } else {
          console.warn(`Unsupported imarii class: ${className}`);
        }
        
      });
      
      return obj;

}

/**
 * percentageValue (percent:number)
 * 
 * The size is calculated as a percentage of the height (width in landscape mode) of the device.
 *
 * */ 

/**
 * relativeValue (value:number)
 *
 * The size is calculated based on screen height height (width in landscape mode) of the device.
 *
 * */

// TEXT

// tsr- => text size relative
// tsp- => text size percentage

// tb-700 => text bold

// tc => text-center

// border-(1px solid black)
// bw - border width
// bs - border size
// bc - border color

// e.g className = `bg-${var}`

// SHORTHAND NAMING CONVENTION

// take a look at basscss.com

// m - margin
// p - padding
// t - top
// r - right
// b - bottom
// l - left
// x - x-axis (left and right)
// y - y-axis (top and bottom)
// n - nagative
// 0 - 0 reset
// auto


// GRADIENTS
// from-white to-purple

// MEDIA QUERIES
// md:tsr-25