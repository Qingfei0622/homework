/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
         navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
function startFakeSubmit() {

    document.getElementById("contactForm").reset();

    const modal = new bootstrap.Modal(
        document.getElementById("fakeModal")
    );

    modal.show();

    const bar = document.getElementById("progressBar");
    const text = document.getElementById("statusText");
    const result = document.getElementById("resultArea");
    const closeBtn = document.getElementById("closeBtn");
    const progressBox = document.querySelector(".progress");

    // 初始化
    progressBox.style.display = "block";
    text.style.display = "block";

    result.style.display = "none";

    closeBtn.style.display = "none";

    bar.style.width = "0%";
    bar.innerHTML = "0%";

    let progress = 0;

    const timer = setInterval(function () {

        // 故意卡99%
        if (progress < 99) {

            progress += Math.floor(Math.random() * 8) + 4;

            if (progress > 99)
                progress = 99;

        }

        if (progress < 35) {

            text.innerHTML = "🔍 正在驗證資料...";

        } else if (progress < 70) {

            text.innerHTML = "🧠 正在分析回答...";

        } else {

            text.innerHTML = "📦 正在整理結果...";
        }

        bar.style.width = progress + "%";
        bar.innerHTML = progress + "%";

        if (progress === 99) {

            clearInterval(timer);

            // 故意停兩秒
            setTimeout(function () {

                bar.style.width = "100%";
                bar.innerHTML = "100%";

                text.innerHTML = "✅ 分析完成";

                setTimeout(function () {

                    progressBox.style.display = "none";
                    text.style.display = "none";

                    result.style.display = "block";

                    // 按鈕最後才出現
                    setTimeout(function () {

                        closeBtn.style.display = "inline-block";

                    }, 800);

                }, 700);

            }, 2000);

        }

    }, 150);

}
