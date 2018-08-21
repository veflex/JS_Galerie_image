/* jshint esversion : 6 */
/* global document */
const app = (function () {
    "use strict";
    var dom = {},
        count = 0,
        imgTableau = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png", "http://getdrawings.com/cliparts/number-2-clipart-33.png", "http://msa-serrurier.fr/wp-content/uploads/2018/05/NYCS-bull-trans-3.svg.png", "https://www.brainz.org/wp-content/uploads/2017/06/4-1.png"];




    const getDOMRefs = function getDOMRefs() {
        return {
            div: document.getElementById("my_gallery"),
            next: document.getElementById('move_next'),
            previous: document.getElementById('move_previous'),
            image: document.getElementById("image")
        };
    };

    const moveToNextImg = function moveToNextImg() {

        if (count < imgTableau.length - 1) {
            count += 1;
            dom.image.src = imgTableau[count];
        } else {
            count = 0;
            dom.image.src = imgTableau[count];
        }
    };
    const moveToPreviousImg = function moveToPreviousImg() {
        if (count === 0) {
            count = imgTableau.length - 1;
            dom.image.src = imgTableau[count];

        } else {
            count--;
            dom.image.src = imgTableau[count];
        }
    };

    const eventsHandler = function handleEvents() {
        dom.next.onclick = moveToNextImg;
        dom.previous.onclick = moveToPreviousImg;

    };

    var start = function () {
        dom = getDOMRefs();
        eventsHandler();
        dom.image.src = imgTableau[0];
    };
    document.addEventListener("DOMContentLoaded", start);

}());
