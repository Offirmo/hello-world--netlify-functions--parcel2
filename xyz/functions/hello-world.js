////////////////////////////////////
const $b915829f7022294e$export$c3c52e219617878 = async (event, badly_typed_context)=>{
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


export {$b915829f7022294e$export$c3c52e219617878 as handler};
