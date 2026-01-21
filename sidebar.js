// Sidebar Component - สร้าง HTML โดยตรงด้วย JavaScript

function createSidebar() {
    const sidebarHTML = `
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2><i class="fa-solid fa-mobile-screen-button"></i> Application</h2>
            </div>
            <nav class="sidebar-menu">
                <div class="menu-item has-submenu active" id="rentalMenu">
                    <span class="icon"><i class="fa-solid fa-box-open"></i></span>
                    <span>Rental</span>
                    <span class="arrow">▼</span>
                </div>
                <div class="submenu active" id="rentalSubmenu">
                    <a class="submenu-item" href="item.html" data-page="item.html,item-add.html,item-edit.html">
                        <span><i class="fa-solid fa-dolly"></i></span>
                        <span>Item</span>
                    </a>
                    <a class="submenu-item" href="client.html" data-page="client.html">
                        <span><i class="fa-solid fa-user-group"></i></span>
                        <span>Client</span>
                    </a>
                    <a class="submenu-item" href="order.html" data-page="order.html,order-add.html,order-edit.html">
                        <span><i class="fa-solid fa-boxes-packing"></i></span>
                        <span>Order</span>
                    </a>
                    <a class="submenu-item" href="invoice.html" data-page="invoice.html,invoice-edit.html,payment.html">
                        <span><i class="fa-solid fa-file-invoice"></i></span>
                        <span>Invoice</span>
                    </a>
                    <a class="submenu-item" href="receivement.html" data-page="receivement.html,receivement-add,receivement-edit">
                        <span><i class="fa-solid fa-receipt"></i></span>
                        <span>Receivement</span>
                    </a>
                    <a class="submenu-item" href="document.html" data-page="document.html">
                        <span><i class="fa-solid fa-file"></i></span>
                        <span>Document</span>
                    </a>
                </div>
                <div class="menu-item has-submenu" id="OPDMenu">
                    <span class="icon"><i class="fa-solid fa-hospital"></i></span>
                    <span>OPD</span>
                    <span class="arrow">▼</span>
                </div>
                <div class="submenu" id="OPDSubmenu">
                    <a class="submenu-item" href="patient.html" data-page="patient.html">
                        <span><i class="fa-solid fa-bed"></i></span>
                        <span>Patient</span>
                    </a>
                    <a class="submenu-item" href="service-record.html" data-page="service-record.html">
                        <span><i class="fa-solid fa-clipboard"></i></span>
                        <span>Service Record</span>
                    </a>
                    <a class="submenu-item" href="payment.html" data-page="payment.html">
                        <span><i class="fa-solid fa-file-lines"></i></span>
                        <span>Payment</span>
                    </a>
                    <a class="submenu-item" href="appointment-schedule.html" data-page="appointment-schedule.html">
                        <span><i class="fa-solid fa-calendar-week"></i></span>
                        <span>Appointment Schedule</span>
                    </a>
                    <a class="submenu-item" href="dns-item.html" data-page="dns-item.html">
                        <span><i class="fa-solid fa-capsules"></i></span>
                        <span>DNS (Drug&Service) Item</span>
                    </a>
                    <a class="submenu-item" href="supplier.html" data-page="supplier.html">
                        <span><i class="fa-solid fa-truck-field"></i></span>
                        <span>Supplier</span>
                    </a>
                    <a class="submenu-item" href="purchase.html" data-page="purchase.html">
                        <span><i class="fa-solid fa-shop"></i></span>
                        <span>Purchase</span>
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
    const OPDMenu = document.getElementById('OPDMenu'); // เพิ่มบรรทัดนี้
    const OPDSubmenu = document.getElementById('OPDSubmenu'); // เพิ่มบรรทัดนี้

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('sidebar-open'); // เพิ่มบรรทัดนี้ - ล็อคการเลื่อนหน้าหลัก
        });
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('sidebar-open'); // เพิ่มบรรทัดนี้ - ปลดล็อคการเลื่อนหน้าหลัก
        });
    }

    // Submenu Toggle
    if (rentalMenu) {
        rentalMenu.addEventListener('click', () => {
            rentalMenu.classList.toggle('active');
            rentalSubmenu.classList.toggle('active');
        });
    }

    if (OPDMenu) {
        OPDMenu.addEventListener('click', () => {
            OPDMenu.classList.toggle('active');
            OPDSubmenu.classList.toggle('active');
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