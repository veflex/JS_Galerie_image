/* jshint esversion : 6 */
/* global document */
const app = (function () {
    "use strict";
    var dom = {},
        count = 0,
        imgTableau = ["https://images.unsplash.com/photo-1534832796130-37cfe118e925?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83fca2459a46db84a04e807aadd0c38c&auto=format&fit=crop&w=749&q=80", "https://images.unsplash.com/photo-1534801022022-6e319a11f249?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7fc2e7b7e58cdfc7261fbb3968e633fc&auto=format&fit=crop&w=401&q=80", "https://images.unsplash.com/photo-1534824681605-7eb16e0d2315?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6e5f2fc4eb38f881029a7819ed1a0f7&auto=format&fit=crop&w=375&q=80", "https://images.unsplash.com/photo-1534819050283-3d231482d47e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9b0e72bba256e52cb871b34c06cba7d&auto=format&fit=crop&w=723&q=80"];




    const getDOMRefs = function getDOMRefs() {
        return {
            div: document.getElementById("my_gallery"),
            next: document.getElementById('move_next'),
            image: document.getElementById("image")
        };
    };

    const moveToNextImg = function moveToNextImg() {
        if (count < imgTableau.length - 1) {
            dom.image.src = imgTableau[count];
            count += 1;
        } else {
            dom.image.src = imgTableau[count];
            count = 0;
        }
    };

    const eventsHandler = function handleEvents() {
        dom.next.onclick = moveToNextImg;
    };

    var start = function () {
        dom = getDOMRefs();
        eventsHandler();
    };
    document.addEventListener("DOMContentLoaded", start);

}());
