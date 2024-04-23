## vue2qrcode
[English](./README.md) | **中文**
## 描述  
A plugin suitable for vue2.x with a QR code in the center with a logo.  
## 效果图
<img src="./img/npmjs.com.png" width="300">

## 运行 demo
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

## 如何使用  
```javascript
import { Vue2Qrcode } from "./index";
```
```html
<Vue2Qrcode
  content="https://www.npmjs.com/"
  width="100"
  :logoImg="require('./assets/logo.png')"
/>
```
## 参数说明 
| 参数     | 解释                          | 类型             | 默认值 |
| -------- | ---------------------------- | ---------------- | ------ |
| content  | 需要转为二维码的内容           | String           | ''     |
| width    | 二维码宽度                    | Number \| String | 200    |
| logoImg  | 二维码中心logo，需要则不设置   | String           | ''     |
| logoZoom | 中心logo缩放                  | Number           | 0.2    |