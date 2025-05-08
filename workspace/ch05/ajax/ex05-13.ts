// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from './types.js';
import { appendImages } from './utils.js';

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');

btn?.addEventListener('click', getImages);

async function getImages(): Promise<void> {
  try {
    const response = await fetch(url);

    if (response.ok) {
      console.log(response);
      const data: Cat[] = await response.json();
      appendImages(data);
    } else {
      console.log(response.status, '에러 발생');
    }
  } catch (err) {
    //네트워크 오류
    console.error('에러 발생', err);
  }
}
