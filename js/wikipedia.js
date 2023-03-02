function wordSeach() {
    // 指定した要素を取得し色を黒にする
    const elements = document.querySelectorAll('h1,h2,h3,p');
    elements.forEach(element => element.style.color = 'black');
    // 入力された値を取得
    const inputValue = document.getElementById('site-search').value;
    // 指定した要素(elements)の中から入力した値(inputValue)を含むものを抽出
    const filteredElements = Array.from(elements).filter(element => element.textContent.includes(inputValue));
    // 抽出した要素(filterdeElements)の色を変更
    filteredElements.forEach(element => element.style.color = 'red');
};

