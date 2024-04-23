<template>
  <div>
    <img id="vue2-qrcode-id" src="" alt="" />
  </div>
</template>
<script>
var QrCodeWithLogo = require("../../packages/qrcode-with-logo.min.js");
export default {
  name: "Vue2Qrcode",
  props: {
    content: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 200,
    },
    logoImg: {
      type: String,
      default: "",
    },
    logoZoom: {
      type: Number,
      default: 0.2,
    },
  },
  mounted() {
    this.initQrcode();
  },
  methods: {
    initQrcode() {
      var _n = new QrCodeWithLogo({
        width: this.width,
        content: this.content,
        image: document.getElementById("vue2-qrcode-id"),
        logo: this.logoImg
          ? {
              src: this.logoImg,
              logoSize: 0.2,
            }
          : false,
        errorCorrectionLevel: "H",
      });
      _n.toImage();
    },
  },
};
</script>
