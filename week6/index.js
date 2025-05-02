const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "%2B99VuwX%2B10xqw%2FQlNIoB1XhDGpyzKkERySZjurEexWL26fgt4T7fjD0cCl0dIigeaWbJvjdymwo%2B4RpwbwQAqw%3D%3D",
    numofRows: 6,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
  };

const container = document.getElementById("container");
let photoIndex = 1;

async function getData() {
   let count = Math.floor(Math.random() * 1000) + 1;
   const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${count}&serviceKey=${option.serviceKey}`
   
   const fetchData = await fetch(url);
   const toJson = await fetchData.json();
   const datas = await toJson.response.body.items.item;

   datas.forEach((data, i) => {
      const list = document.createElement('div');
      list.id = 'list';

      const image = document.createElement('img');
      image.src = data.galWebImageUrl;

      const info = document.createElement('span');
      info.innerText = `
      🏷️ ${photoIndex++}번째 사진
      📸 제목 : ${data.galTitle}
      ⛳️ 장소 : ${data.galPhotographyLocation}`;

      list.appendChild(image);
      list.appendChild(info);

      container.appendChild(list);

      const button = document.createElement('button');
      button.innerText = "더보기";
      button.addEventListener('click', () => {
       const params = new URLSearchParams({
          title: data.galTitle,
          location: data.galPhotographyLocation,
          date: data.galCreatedtime,
          photographer: data.galPhotographer,
          keywords: data.galSearchKeyword,
          image: data.galWebImageUrl,
       });

       window.location.href = `detail.html?${params.toString()}`;
      });

      list.appendChild(button);
      container.appendChild(list);
   });
   count++;
}