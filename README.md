<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#6366f1">
  <title>WebPOS - Pengaturan</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>
  
  <link rel="stylesheet" href="../css/style.css">
  
  <style>
    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .setting-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .setting-item:last-child {
      border-bottom: none;
    }

    .setting-info {
      flex: 1;
    }

    .setting-label {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .setting-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .toggle-switch {
      position: relative;
      width: 50px;
      height: 26px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 50px;
      transition: 0.3s;
    }

    .toggle-slider:before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
      box-shadow: var(--shadow-sm);
    }

    input:checked + .toggle-slider {
      background: var(--primary);
      border-color: var(--primary);
    }

    input:checked + .toggle-slider:before {
      transform: translateX(24px);
    }

    .theme-options {
      display: flex;
      gap: 0.75rem;
    }

    .theme-option {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-lg);
      cursor: pointer;
      border: 2px solid transparent;
      transition: all var(--transition-fast);
    }

    .theme-option:hover {
      transform: scale(1.1);
    }

    .theme-option.active {
      border-color: var(--primary);
    }

    .theme-option.light {
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    }

    .theme-option.dark {
      background: linear-gradient(135deg, #1e293b, #0f172a);
    }

    .theme-option.auto {
      background: linear-gradient(135deg, #f8fafc 50%, #1e293b 50%);
    }

    .danger-zone {
      border: 1px solid var(--danger);
      border-radius: var(--radius-lg);
      padding: 1rem;
      margin-top: 1rem;
    }

    .danger-zone-title {
      color: var(--danger);
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  </style>
</head>
<body>
  <div class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="logo-container">
          <div class="logo-icon"><i class="fas fa-cash-register"></i></div>
          <span class="logo-text">WebPOS</span>
        </div>
      </div>
      <button class="menu-toggle" id="menuToggle"><i class="fas fa-chevron-left"></i></button>
      <div class="sidebar-search">
        <div class="search-input-wrapper">
          <i class="fas fa-search"></i>
          <input type="text" class="search-input" placeholder="Cari menu...">
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-title">Utama</div>
          <ul class="nav-menu">
            <li class="nav-item"><a href="../index.html" class="nav-link"><i class="fas fa-home"></i><span>Dashboard</span></a></li>
            <li class="nav-item"><a href="kasir.html" class="nav-link"><i class="fas fa-cash-register"></i><span>Kasir</span></a></li>
            <li class="nav-item nav-dropdown" data-dropdown>
              <div class="nav-link nav-dropdown-toggle"><div style="display:flex;align-items:center;gap:0.75rem;"><i class="fas fa-box"></i><span>Produk</span></div><i class="fas fa-chevron-down dropdown-arrow"></i></div>
              <ul class="nav-submenu">
                <li><a href="produk.html" class="nav-link"><span>Daftar Produk</span></a></li>
                <li><a href="kategori.html" class="nav-link"><span>Kategori</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="user-profile" id="userProfile">
          <div class="user-avatar" id="userAvatar"><i class="fas fa-user"></i></div>
          <div class="user-info">
            <div class="user-name" id="userName">Loading...</div>
            <div class="user-role" id="userRole">-</div>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="main-header">
        <div class="header-left">
          <button class="btn-icon d-md-none" id="mobileMenuToggle"><i class="fas fa-bars"></i></button>
          <h1 class="header-title">Pengaturan</h1>
        </div>
        <div class="header-actions">
          <button class="btn-icon" id="btnLogout"><i class="fas fa-sign-out-alt"></i></button>
        </div>
      </header>

      <div class="page-content">
        <div class="settings-grid">
          <!-- Appearance -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-palette"></i> Tampilan</h3>
            </div>
            <div class="card-body">
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-label">Mode Gelap</div>
                  <div class="setting-desc">Aktifkan tema gelap untuk mengurangi kelelahan mata</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="darkModeToggle">
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-bell"></i> Notifikasi</h3>
            </div>
            <div class="card-body">
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-label">Notifikasi Stok Rendah</div>
                  <div class="setting-desc">Dapatkan notifikasi saat stok produk menipis</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="stockNotif" checked>
                  <span class="toggle-slider"></span>
                </label>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <div class="setting-label">Suara Transaksi</div>
                  <div class="setting-desc">Putar suara saat transaksi berhasil</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="soundToggle" checked>
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- Store Settings -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-store"></i> Toko</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="form-label">Nama Toko</label>
                <input type="text" class="form-input" id="storeName" placeholder="Nama Toko">
              </div>
              <div class="form-group">
                <label class="form-label">Alamat</label>
                <textarea class="form-textarea" id="storeAddress" rows="2" placeholder="Alamat Toko"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Telepon</label>
                <input type="tel" class="form-input" id="storePhone" placeholder="Nomor Telepon">
              </div>
              <button class="btn btn-primary btn-block" id="btnSaveStore">
                <i class="fas fa-save"></i> Simpan Perubahan
              </button>
            </div>
          </div>

          <!-- Account -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-user-circle"></i> Akun</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="form-label">Nama Lengkap</label>
                <input type="text" class="form-input" id="userFullName" placeholder="Nama Lengkap">
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" id="userEmail" disabled>
              </div>
              <button class="btn btn-secondary btn-block" id="btnChangePassword">
                <i class="fas fa-key"></i> Ganti Password
              </button>
            </div>
          </div>

          <!-- Danger Zone -->
          <div class="card" style="grid-column: 1/-1;">
            <div class="card-body">
              <div class="danger-zone">
                <div class="danger-zone-title"><i class="fas fa-exclamation-triangle"></i> Zona Berbahaya</div>
                <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem;">
                  Tindakan berikut tidak dapat dibatalkan. Harap berhati-hati.
                </p>
                <button class="btn btn-danger" id="btnClearData">
                  <i class="fas fa-trash"></i> Hapus Semua Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <nav class="mobile-nav">
      <a href="../index.html" class="mobile-nav-item"><i class="fas fa-home"></i><span>Dashboard</span></a>
      <a href="kasir.html" class="mobile-nav-item"><i class="fas fa-cash-register"></i><span>Kasir</span></a>
      <a href="produk.html" class="mobile-nav-item"><i class="fas fa-box"></i><span>Produk</span></a>
      <a href="riwayat.html" class="mobile-nav-item"><i class="fas fa-history"></i><span>Riwayat</span></a>
      <a href="setting.html" class="mobile-nav-item active"><i class="fas fa-cog"></i><span>Setting</span></a>
    </nav>
  </div>

  <div class="loading-overlay" id="loadingOverlay">
    <div class="spinner"></div>
    <p style="margin-top: 1rem; color: var(--text-secondary);">Loading...</p>
  </div>

  <script src="../js/firebase-config.js"></script>
  <script src="../js/utils.js"></script>
  <script src="../js/auth.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Wait for Firebase auth to be ready
      auth.onAuthStateChanged((user) => {
        if (!user && !Utils.getStorage('webpos_session')) {
          window.location.href = '../login.html';
          return;
        }
        
        // Load user data if available
        if (user) {
          Auth.loadUserData(user.uid);
        }
        
        // Initialize settings
        initSettings();
      });

      function initSettings() {
      const user = Auth.getCurrentUser();
      document.getElementById('userName').textContent = user?.name || user?.email || 'User';
      document.getElementById('userRole').textContent = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Kasir';
      document.getElementById('userFullName').value = user?.name || '';
      document.getElementById('userEmail').value = user?.email || '';

      // Sidebar toggle
      document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('collapsed');
      });

      document.getElementById('mobileMenuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('mobile-open');
      });

      document.getElementById('btnLogout').addEventListener('click', () => {
        Utils.confirm('Yakin ingin logout?', () => Auth.logout());
      });

      // Dark mode toggle
      const darkModeToggle = document.getElementById('darkModeToggle');
      darkModeToggle.checked = localStorage.getItem('dark_mode') === 'true';
      
      darkModeToggle.addEventListener('change', () => {
        const isDark = darkModeToggle.checked;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('dark_mode', isDark);
      });

      // Load store settings
      async function loadStoreSettings() {
        try {
          const snapshot = await database.ref('settings/store').once('value');
          const settings = snapshot.val();
          
          if (settings) {
            document.getElementById('storeName').value = settings.name || '';
            document.getElementById('storeAddress').value = settings.address || '';
            document.getElementById('storePhone').value = settings.phone || '';
          }
        } catch (error) {
          console.error('Error loading settings:', error);
        }
      }

      // Save store settings
      document.getElementById('btnSaveStore').addEventListener('click', async () => {
        try {
          Utils.showLoading('Menyimpan...');
          
          await database.ref('settings/store').set({
            name: document.getElementById('storeName').value,
            address: document.getElementById('storeAddress').value,
            phone: document.getElementById('storePhone').value,
            updatedAt: firebase.database.ServerValue.TIMESTAMP
          });
          
          Utils.hideLoading();
          Utils.showToast('Pengaturan toko berhasil disimpan', 'success');
        } catch (error) {
          Utils.hideLoading();
          Utils.showToast('Gagal menyimpan pengaturan', 'error');
        }
      });

      // Change password
      document.getElementById('btnChangePassword').addEventListener('click', async () => {
        try {
          await auth.sendPasswordResetEmail(user.email);
          Utils.showToast('Email reset password telah dikirim', 'success');
        } catch (error) {
          Utils.showToast('Gagal mengirim email reset', 'error');
        }
      });

      // Clear data
      document.getElementById('btnClearData').addEventListener('click', () => {
        Utils.confirm('PERINGATAN: Semua data akan dihapus permanen! Lanjutkan?', async () => {
          Utils.showToast('Fitur ini memerlukan konfirmasi admin', 'warning');
        });
      });

      loadStoreSettings();
      }
    });
  </script>
</body>
</html>
