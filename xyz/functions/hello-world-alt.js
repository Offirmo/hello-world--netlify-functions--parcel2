////////////////////////////////////
const $5465732c4170ebb4$export$c3c52e219617878 = async (event, badly_typed_context)=>{
    const msg = `Hello from netlify 2!`;
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


export {$5465732c4170ebb4$export$c3c52e219617878 as handler};
