## vue2-qr
**English** | [中文](./README.zh-CN.md)  
## Introduction  
A plugin suitable for vue2.x with a QR code in the center with a logo.  
## Example
<img src="./img/npmjs.com.png" width="300">

## Run demo
```bash
# yarn
yarn install
# npm
npm install
```

```bash
# yarn
yarn serve
# npm
npm run serve
```

## How to use  
```javascript
import { Vue2Qrcode } from "vue2-qr";
```
```html
<Vue2Qrcode
  content="https://www.npmjs.com/"
  width="100"
  :logoImg="require('./assets/logo.png')"
/>
```
## Parameter explanation  
| Parameter | Explain                                                                   | Type             | Default |
| --------- | ------------------------------------------------------------------------- | ---------------- | ------- |
| content   | Content that needs to be converted into QR code                           | String           | ''      |
| width     | QR code width                                                             | Number \| String | 200     |
| logoImg   | Logo picture in the center area. If no picture is required, do not set it | String           | ''      |
| logoZoom  | The scaling ratio of the logo image in the center area                    | Number           | 0.2     |
