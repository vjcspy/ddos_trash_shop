import fetch from 'node-fetch';

import { performanceNow } from './performance-now';

const ladipage_id = '617a20854456620012e4fbea';
const form_config_id = '61784bb470b33200122469a1';

const getDataKey = () => {
  const a = form_config_id + '|' + ladipage_id + '|' + Date.now() + '|' + performanceNow();

  return a;
};

export const getCheckoutToken = async () => {
  try {
    const data = await fetch('https://api.ladisales.com/2.0/cart/add', {
      'headers': {
        'accept': '*/*',
        'accept-language': 'vi',
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

    const json = await data.text();


    return JSON.parse(json);
  } catch (e) {
    return null;
  }
};

export const sendForm1 = async () => {
  const body = {
    'form_config_id': '61784bb470b33200122469a1',
    'ladi_form_id': 'FORM1659',
    'ladipage_id': '617a20854456620012e4fbea',
    'tracking_form': [{
      'name': 'url_page',
      'value': 'https://phuonglinhperfume.com/khuyen-mai/'
    }, { 'name': 'utm_source', 'value': '' }, {
      'name': 'utm_medium',
      'value': ''
    }, { 'name': 'utm_campaign', 'value': '' }, {
      'name': 'utm_term',
      'value': ''
    }, { 'name': 'utm_content', 'value': '' }, {
      'name': 'variant_url',
      'value': ''
    }, { 'name': 'variant_content', 'value': '' }],
    'form_data': [{ 'name': 'name', 'value': 'Anh Hai' }, {
      'name': 'phone',
      'value': '0916024182'
    }, { 'name': 'address', 'value': '' }, {
      'name': 'coupon',
      'value': '',
      'is_ladipage': true
    }, {
      'name': 'cart_products',
      'value': ['46765:1:899000::|Mã 01 - Coco Noir Chanel (black)'],
      'is_ladipage': true
    }, { 'name': 'cart_revenue', 'value': 899000, 'is_ladipage': true }],
    'data_key': '61784bb470b33200122469a1|617a20854456620012e4fbea|1645612402700|6b664f89-f669-4d38-ae63-9087bb53715e',
    'status_send': 1,
    'total_revenue': 899000,
    'time_zone': 7
  };

  const data = await fetch('https://api.form.ladipage.com/sendform', {
    'headers': {
      'accept': '*/*',
      'accept-language': 'vi',
      'content-type': 'application/json',
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'Referer': 'https://phuonglinhperfume.com/',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    },
    'body': JSON.stringify(body),
    'method': 'POST'
  });
};

export const sendForm2 = async () => {
  const body = {
    'form_config_id': '61784bb470b33200122469a1',
    'ladi_form_id': 'FORM1659',
    'ladipage_id': '617a20854456620012e4fbea',
    'tracking_form': [{
      'name': 'url_page',
      'value': 'https://phuonglinhperfume.com/khuyen-mai/'
    }, { 'name': 'utm_source', 'value': '' }, {
      'name': 'utm_medium',
      'value': ''
    }, { 'name': 'utm_campaign', 'value': '' }, {
      'name': 'utm_term',
      'value': ''
    }, { 'name': 'utm_content', 'value': '' }, {
      'name': 'variant_url',
      'value': ''
    }, { 'name': 'variant_content', 'value': '' }],
    'form_data': [{ 'name': 'name', 'value': 'Anh Hai' }, {
      'name': 'phone',
      'value': '0916024182'
    }, { 'name': 'address', 'value': '410 Xa Dan Street' }, {
      'name': 'coupon',
      'value': '',
      'is_ladipage': true
    }, {
      'name': 'cart_products',
      'value': ['46765:1:899000::|Mã 01 - Coco Noir Chanel (black)'],
      'is_ladipage': true
    }, { 'name': 'cart_revenue', 'value': 899000, 'is_ladipage': true }],
    'data_key': '61784bb470b33200122469a1|617a20854456620012e4fbea|1645612841118|be640378-2a22-4a63-bae4-07ee204dfc93',
    'status_send': 2,
    'checkout_token': 'dda12b69336b4517b21078b13fa89238',
    'total_revenue': 899000,
    'time_zone': 7
  };
  const data = await fetch('https://api.form.ladipage.com/sendform', {
    'headers': {
      'accept': '*/*',
      'accept-language': 'vi',
      'content-type': 'application/json',
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'Referer': 'https://phuonglinhperfume.com/',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    },
    'body': JSON.stringify(body),
    'method': 'POST'
  });

  return data;
};
