document.onmousedown = function (e) {

    var dragElement = e.target;

    if (!dragElement.classList.contains('draggable')) return;

    var coords, shiftX, shiftY;

    startDrag(e.clientX, e.clientY);

    document.onmousemove = function (e) {
        moveAt(e.clientX, e.clientY);
    };

    dragElement.onmouseup = function () {
        finishDrag();
    };

    function startDrag(clientX, clientY) {

        shiftX = clientX - dragElement.getBoundingClientRect().left;
        shiftY = clientY - dragElement.getBoundingClientRect().top;

        dragElement.style.position = 'fixed';

        document.body.appendChild(dragElement);

        moveAt(clientX, clientY);
    };

    function finishDrag() {
        // конец переноса, перейти от fixed к absolute-координатам
        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';

        document.onmousemove = null;
        dragElement.onmouseup = null;
    }

    function moveAt(clientX, clientY) {
        // новые координаты
        var newX = clientX - shiftX;
        var newY = clientY - shiftY;

        // ------- обработаем вынос за нижнюю границу окна ------
        // новая нижняя граница элемента
        var newBottom = newY + dragElement.offsetHeight;

        // зажать в границах экрана по горизонтали
        // здесь прокрутки нет, всё просто
        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
            newX = document.documentElement.clientWidth - dragElement.offsetHeight;
        }

        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
    }

    // отменим действие по умолчанию на mousedown (выделение текста, оно лишнее)
    return false;
}



