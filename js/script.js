document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".section");
    const contentArea = document.querySelector(".content");  // 获取内容区域

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // 隐藏所有section内容
            sections.forEach(section => {
                section.style.display = "none";
            });

            contentArea.style.display = "block";  // 显示整个内容区域

            // 显示被点击的section内容
            const targetId = this.getAttribute("data-section");
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = "block";
        });
    });
});
