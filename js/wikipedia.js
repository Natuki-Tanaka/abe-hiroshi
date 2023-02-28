function wordSeach() {
    // 入力された値を取得
    const inputValue = document.getElementById('site-search').value;
    // 入力された値をページ内から検索
    const elements = document.querySelectorAll('*');
    const filterElements = Array.from(elements).filter((element)=>{
        return element.textContent === inputValue; 
    });
    // 一致する箇所の色を変更
    for(el of filterElements){
        el.style.color = 'red';
    }
}