let url = 'https://api.unsplash.com/search/photos?query=dog&per_page=9&client_id=4qHSi90u2Kll3z02vy6LS60tWsGQhpGZaSLeX_kh58Q';
const galleryContainer = document.querySelector('.images');

async function getData() {
   const res = await fetch(url);
   const data = await res.json();
   showData(data);
}
 getData();

function showData(data) {
  galleryContainer.innerHTML='';
  data.results.forEach(result => {
   const imgDiv = `<div class="gallery-img-container"><a class="image-link" href="${result.links.html}"><div class="gallery-img" style="background-image: url('${result.urls.regular}');"></div></a></div>`;
   galleryContainer.insertAdjacentHTML('beforeend', imgDiv);
  });
}

window.addEventListener('load', getData());


const input = document.querySelector('.input');
const search = document.querySelector('.search__button');
const abort = document.querySelector('.search__abort');

window.addEventListener('load', input.focus());

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    search.click();
  }
})

abort.addEventListener('click', () => {
  input.value="";
  input.focus();
});

search.addEventListener('click', (e) => {
  if (input.value.trim() !== '') {
      url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=15&client_id=4qHSi90u2Kll3z02vy6LS60tWsGQhpGZaSLeX_kh58Q`;
  } else {
    url = 'https://api.unsplash.com/search/photos?query=nothing&&per_page=9&client_id=4qHSi90u2Kll3z02vy6LS60tWsGQhpGZaSLeX_kh58Q';
  }
  getData();
  
});




let costOfMyPain = `Итоговая оценка: 65/60.

Ваша отметка - 60 балла(ов)
Отзыв по пунктам ТЗ:

кнопка поиска и кнопка сброса поиска не в поле ввода. но работают.
Из доп функционала реализовал переход на оригинал картинки по клику.
`;

console.log(costOfMyPain);
