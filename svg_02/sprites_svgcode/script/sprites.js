// SVGファイルを非同期で取得して表示する関数
function loadSVG(data, svgContainer) {
  fetch(data)
  .then((response) => response.text())
  .then((svgData) => {
    // SVGを挿入する要素を取得
    const container = document.querySelector(svgContainer);

    // 取得したSVGデータを要素に挿入
    container.innerHTML = svgData;
  })
  .catch((error) => {
    console.error("Error fetching SVG:", error);
  });
}
