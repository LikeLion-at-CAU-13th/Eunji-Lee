document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);

function formatDate(dateStr) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${year.slice(2)}/${month}/${day}`;
  }

const detail = document.getElementById("detail");

const title = params.get("title");
const location = params.get("location");
const date = formatDate(params.get("date"));
const photographer = params.get("photographer");
const keywords = decodeURIComponent(params.get("keywords"));
const image = params.get("image");

detail.innerHTML = `
  <img src="${image}" alt="${title}" />
  <h2>${title}</h2>
  <div class="detail-info">
  <p>📍 장소: ${location}</p>
  <p>🗓️ 날짜: ${date}</p>
  <p>📸 촬영자: ${photographer}</p>
  <p>🏷️ 키워드: ${keywords}</p>
  <a href="index.html">📋 목록으로 돌아가기</a>
  </div>
  `;
});