import { getRandomAdd } from './lib/getRandomAdd';

const main = async ()=>{
 const data = await getRandomAdd();
  console.log(data);
}

main();
