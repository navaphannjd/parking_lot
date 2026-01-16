// Sidebar Component - สร้าง HTML โดยตรงด้วย JavaScript

function createSidebar() {
    const sidebarHTML = `
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2>🚗 Parking</h2>
            </div>
            <nav class="sidebar-menu">
                <div class="menu-item has-submenu active" id="rentalMenu">
                    <span class="icon">🏢</span>
                    <span>Rental</span>
                    <span class="arrow">▼</span>
                </div>
                <div class="submenu active" id="rentalSubmenu">
                    <a class="submenu-item" href="main.html" data-page="main.html">
                        <span>🚗</span>
                        <span>Item</span>
                    </a>
                    <a class="submenu-item" href="billing.html" data-page="billing.html,payment.html">
                        <span>💳</span>
                        <span>Billing</span>
                    </a>
                    <a class="submenu-item" href="report.html" data-page="report.html">
                        <span>📊</span>
                        <span>Report</span>
                    </a>
                </div>
            </nav>
        </div>

        <div class="overlay" id="overlay"></div>
    `;

    // แทรก sidebar ไว้ด้านบนสุดของ body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // เริ่มต้น sidebar functionality
    initializeSidebar();
}

// ฟังก์ชันเริ่มต้น Sidebar
function initializeSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const rentalMenu = document.getElementById('rentalMenu');
    const rentalSubmenu = document.getElementById('rentalSubmenu');

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Submenu Toggle
    if (rentalMenu) {
        rentalMenu.addEventListener('click', () => {
            rentalMenu.classList.toggle('active');
            rentalSubmenu.classList.toggle('active');
        });
    }

    // ตั้งค่า active submenu item ตามหน้าปัจจุบัน
    setActiveMenuItem();
}

// ฟังก์ชันตั้งค่า active menu ตามหน้าปัจจุบัน
function setActiveMenuItem() {
    // หาชื่อไฟล์ปัจจุบัน
    const currentPage = window.location.pathname.split('/').pop() || 'main.html';
    
    // เอา .html ออกถ้ามี query string (เช่น payment.html?invoice=xxx)
    const currentPageClean = currentPage.split('?')[0];
    
    console.log('Current page:', currentPageClean); // Debug
    
    // หา submenu items ทั้งหมด
    const submenuItems = document.querySelectorAll('.submenu-item');

    submenuItems.forEach(item => {
        // เอา data-page ของแต่ละ item (อาจมีหลายหน้าคั่นด้วย comma)
        const itemPages = item.getAttribute('data-page');
        
        // แยกเป็น array (เช่น "billing.html,payment.html" → ["billing.html", "payment.html"])
        const pageList = itemPages.split(',').map(p => p.trim());
        
        console.log('Checking:', pageList, 'vs', currentPageClean); // Debug
        
        // ถ้าหน้าปัจจุบันอยู่ใน list นี้ ให้เพิ่ม active
        if (pageList.includes(currentPageClean)) {
            item.classList.add('active');
            console.log('✓ Active:', itemPages, 'for page:', currentPageClean); // Debug
        } else {
            item.classList.remove('active');
        }
    });
}

// โหลด sidebar เมื่อ DOM พร้อม
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSidebar);
} else {
    createSidebar();
}