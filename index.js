const $ = document.querySelector.bind(document);

const profileBtn = $('.profile-btn');
const profileGroupBtn = $('.profile-btn-group');

profileBtn.addEventListener("click", function () {
    event.stopPropagation();// ngăn chặn sự kiện click của language__hide lan ra ngoài
    profileGroupBtn.style.display = "flex";
});

document.addEventListener('click', function (event) {
    if (!profileBtn.contains(event.target)) {  // kiểm tra xem sự kiện click có xảy ra trong language__hide
        profileGroupBtn.style.display = 'none';
    }
});
