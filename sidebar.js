// Sidebar Component - สร้าง HTML โดยตรงด้วย JavaScript

function createSidebar() {
    const sidebarHTML = `
        <!-- Header / Topbar -->
        <div class="header topbar">
            <div class="header-left">
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="page-title-header" id="pageTitle">Dashboard</div>
            </div>

            <div class="dropdown">
                <!-- User Profile แบบง่าย (เฉพาะอวาตาร์) -->
                <div class="user-profile" id="userProfile">SC</div>
                
                <!-- Profile Menu -->
                <div class="profile-menu dropdown-menu" id="dropdownMenu">
                    <div class="profile-menu-header dropdown-menu-header">
                        <div class="profile-menu-name dropdown-menu-name">สมชาย ใจดี</div>
                        <div class="profile-menu-email">admin@example.com</div>
                    </div>
                    <div class="profile-menu-item dropdown-item">
                        <i class="fa-solid fa-user"></i>
                        <span>โปรไฟล์</span>
                    </div>
                    <div class="profile-menu-item dropdown-item">
                        <i class="fa-solid fa-bell"></i>
                        <span>การแจ้งเตือน</span>
                    </div>
                    <div class="profile-menu-item dropdown-item">
                        <i class="fa-solid fa-gear"></i>
                        <span>ตั้งค่าบัญชี</span>
                    </div>
                    <div class="profile-menu-item dropdown-item logout" onclick="logOut()">
                        <i class="fa-solid fa-door-open"></i>
                        <span>ออกจากระบบ</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <i class="fa-solid fa-mobile-screen-button"></i> Application
            </div>
            <nav class="sidebar-menu">
                <!-- Rental Menu -->
                <div class="menu-item has-submenu active" id="rentalMenu">
                    <span class="icon"><i class="fa-solid fa-box-open"></i></span>
                    <span>Rental</span>
                    <span class="arrow">▼</span>
                </div>
                <div class="submenu active" id="rentalSubmenu">
                    <a class="submenu-item" href="item.html" data-page="item.html,item-add.html,item-edit.html">
                        <i class="fa-solid fa-dolly"></i>
                        <span>Item</span>
                    </a>
                    <a class="submenu-item" href="client.html" data-page="client.html,client-add.html,client-edit.html">
                        <i class="fa-solid fa-user-group"></i>
                        <span>Client</span>
                    </a>
                    <a class="submenu-item" href="order.html" data-page="order.html,order-add.html,order-edit.html">
                        <i class="fa-solid fa-boxes-packing"></i>
                        <span>Order</span>
                    </a>
                    <a class="submenu-item" href="invoice.html" data-page="invoice.html,invoice-add.html,invoice-edit.html,payment.html,payment-invoice.html,invoice-receipt.html">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span>Invoice</span>
                    </a>
                    <a class="submenu-item" href="receivement.html" data-page="receivement.html,receivement-add.html,receivement-edit.html">
                        <i class="fa-solid fa-receipt"></i>
                        <span>Receivement</span>
                    </a>
                    <a class="submenu-item" href="document.html" data-page="document.html">
                        <i class="fa-solid fa-file"></i>
                        <span>Document</span>
                    </a>
                </div>

                <!-- OPD Menu -->
                <div class="menu-item has-submenu" id="OPDMenu">
                    <span class="icon"><i class="fa-solid fa-hospital"></i></span>
                    <span>OPD</span>
                    <span class="arrow">▼</span>
                </div>
                <div class="submenu" id="OPDSubmenu">
                    <a class="submenu-item" href="patient.html" data-page="patient.html">
                        <i class="fa-solid fa-bed"></i>
                        <span>Patient</span>
                    </a>
                    <a class="submenu-item" href="service-record.html" data-page="service-record.html">
                        <i class="fa-solid fa-clipboard"></i>
                        <span>Service Record</span>
                    </a>
                    <a class="submenu-item" href="opd-payment.html" data-page="opd-payment.html">
                        <i class="fa-solid fa-file-lines"></i>
                        <span>Payment</span>
                    </a>
                    <a class="submenu-item" href="appointment-schedule.html" data-page="appointment-schedule.html">
                        <i class="fa-solid fa-calendar-week"></i>
                        <span>Appointment Schedule</span>
                    </a>
                    <a class="submenu-item" href="dns-item.html" data-page="dns-item.html">
                        <i class="fa-solid fa-capsules"></i>
                        <span>DNS (Drug&Service) Item</span>
                    </a>
                    <a class="submenu-item" href="supplier.html" data-page="supplier.html">
                        <i class="fa-solid fa-truck-field"></i>
                        <span>Supplier</span>
                    </a>
                    <a class="submenu-item" href="purchase.html" data-page="purchase.html">
                        <i class="fa-solid fa-shop"></i>
                        <span>Purchase</span>
                    </a>
                </div>
            </nav>
        </div>

        <!-- Overlay -->
        <div class="overlay" id="overlay"></div>
    `;

    // แทรก topbar และ sidebar ไว้ด้านบนสุดของ body
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
    const OPDMenu = document.getElementById('OPDMenu');
    const OPDSubmenu = document.getElementById('OPDSubmenu');
    const userProfile = document.getElementById('userProfile');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        });
    }

    // Submenu Toggle - Rental
    if (rentalMenu) {
        rentalMenu.addEventListener('click', () => {
            rentalMenu.classList.toggle('active');
            rentalSubmenu.classList.toggle('active');
        });
    }

    // Submenu Toggle - OPD
    if (OPDMenu) {
        OPDMenu.addEventListener('click', () => {
            OPDMenu.classList.toggle('active');
            OPDSubmenu.classList.toggle('active');
        });
    }

    // User Profile Dropdown
    if (userProfile) {
        userProfile.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (dropdownMenu && !e.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // ตั้งค่า active submenu item ตามหน้าปัจจุบัน
    setActiveMenuItem();
    
    // ตั้งค่า page title
    updatePageTitle();
}

// ฟังก์ชันตั้งค่า active menu ตามหน้าปัจจุบัน
function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'main.html';
    const currentPageClean = currentPage.split('?')[0];
    
    console.log('Current page:', currentPageClean);
    
    const submenuItems = document.querySelectorAll('.submenu-item');

    submenuItems.forEach(item => {
        const itemPages = item.getAttribute('data-page');
        if (itemPages) {
            const pageList = itemPages.split(',').map(p => p.trim());
            
            console.log('Checking:', pageList, 'vs', currentPageClean);
            
            if (pageList.includes(currentPageClean)) {
                item.classList.add('active');
                console.log('✓ Active:', itemPages, 'for page:', currentPageClean);
                
                // เปิด submenu parent ถ้าพบหน้าที่ active
                const parentSubmenu = item.closest('.submenu');
                if (parentSubmenu) {
                    parentSubmenu.classList.add('active');
                    const parentMenu = parentSubmenu.previousElementSibling;
                    if (parentMenu && parentMenu.classList.contains('menu-item')) {
                        parentMenu.classList.add('active');
                    }
                }
            } else {
                item.classList.remove('active');
            }
        }
    });
}

// ฟังก์ชันอัพเดต Page Title
function updatePageTitle() {
    const pageTitle = document.getElementById('pageTitle');
    const activeMenuItem = document.querySelector('.submenu-item.active');
    
    if (pageTitle && activeMenuItem) {
        const title = activeMenuItem.querySelector('span').textContent;
        pageTitle.textContent = title;
    }
}

// ฟังก์ชัน logout (global function)
function logOut() {
    if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
        window.location.href = 'index.html';
    }
}

// โหลด sidebar เมื่อ DOM พร้อม
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSidebar);
} else {
    createSidebar();
}