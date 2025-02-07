// 漢堡選單
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 平滑捲動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal 功能
function openModal(title, go) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = title;
    modalContent.innerHTML = `
    <p>這是 ${title} 的詳細介紹。</p>
    <ul>
    <li>使用技術：HTML, CSS, JavaScript</li>
    <li>開發時間：3個月</li>
    <li>專案規模：中型</li>
    </ul>
    <div style="margin-top: 1rem;">
    <a href="https://sb.koding.school/projects/${go}/" target="_blank">查看專案</a>
    </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// 點擊 Modal 外關閉
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// 表單提交
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 這裡可以加入表單處理邏輯
    console.log('表單提交:', {
        name, email, message
    });
    alert('感謝您的訊息！我們會盡快回覆。');
    event.target.reset();
}

// 捲動時改變導航欄樣式
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--bg-color)';
        navbar.style.backdropFilter = 'none';
    }
});