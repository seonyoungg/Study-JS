export function appendImages(images) {
    const catList = document.querySelector('#cat-list');
    images.forEach((item) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.height = 200;
        img.alt = `랜덤고양이 ${item.id}`;
        img.src = item.url;
        li.appendChild(img);
        catList?.appendChild(li);
    });
}
