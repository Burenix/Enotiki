function huh(num) {
    next[num].addEventListener("click", () => {
          document.getElementById("next"+num).disabled = true;
          img[num].src = img2[num];
          img1[num] = img2[num];
          if (img2[num] == "./image/Злюка.gif") {
              showLoseModal();
              next[num].disabled = true;
              for (i = 0; i < 9; i++) {
                if (img1[i] == "./image/Весельчак.jpeg") {img[i].src = "./image/Злой_енотик.png"}    
              } 
            }
          else {count++}
          if (count == 8) {
              showWinModal();
            }
      });
  }
  
  const img = [], img1 = [], img2 = [], next = [];
  
  for (i = 0; i < 9; i++) {
      img.push(document.querySelector('.img' + i));
      next.push(document.getElementById('next' + i));
      img1.push('./image/' + i + '.png');
      if (i == 8) {img2.push('./image/Злюка.gif');}
      else {img2.push('./image/Весельчак.jpeg');}
  }
  
  img1.sort(() => Math.random() - 0.5);
  img2.sort(() => Math.random() - 0.5);

  for (i = 0; i < 9; i++) {
      img[i].src = img1[i];
  }
  
  let count = 0;
  
  for (i = 0; i < 9; i++) {
    huh(i);
  }
