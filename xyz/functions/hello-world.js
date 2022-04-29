function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "handler", () => $5e472f089da6c671$export$c3c52e219617878);
////////////////////////////////////
const $5e472f089da6c671$export$c3c52e219617878 = async (event, badly_typed_context)=>{
    const msg = `Hello from netlify 1!`;
    console.log('(console.log)', msg);
    console.info('(console.info)', msg);
    console.warn('(console.warn)', msg);
    console.error('(console.error)', msg);
    return {
        statusCode: 200,
        headers: {},
        body: msg
    };
};


