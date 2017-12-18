
/* =======================================================================================*/
                                        // index3.html
/* =======================================================================================*/

var redBtn = document.getElementById('redBtn');
redBtn.onmouseover = function () {
    var divElement = document.getElementById('div');
    // divElement.className = 'clas-one';               /* css class use syntex */
    divElement.style.backgroundColor = 'red';       /* java css use syntex */
};

var greenBtn = document.getElementById('greenBtn');
greenBtn.onmouseover = function () {
    var divElement = document.getElementById('div');
    // divElement.className = 'clas-two';
    divElement.style.backgroundColor = 'green';
};

var blueBtn = document.getElementById('blueBtn');
blueBtn.onmouseover = function () {
    var divElement = document.getElementById('div');
    // divElement.className = 'clas-three';
    divElement.style.backgroundColor = 'blue';
};

var defaulBtn = document.getElementById('defaulBtn');
defaulBtn.onmouseover = function () {
    var divElement = document.getElementById('div');
    divElement.style.backgroundColor = '#C100B5';
};

