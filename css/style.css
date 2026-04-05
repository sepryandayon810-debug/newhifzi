/* ============================================
   WEBPOS MODERN - GLASSMORPHISM DESIGN SYSTEM
   ============================================ */

/* CSS Variables */
:root {
  /* Primary Colors */
  --primary: #6366f1;
  --primary-light: #818cf8;
  --primary-dark: #4f46e5;
  --secondary: #ec4899;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --info: #3b82f6;
  
  /* Background Colors */
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-card: rgba(255, 255, 255, 0.95);
  --bg-glass: rgba(255, 255, 255, 0.8);
  
  /* Text Colors */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  
  /* Border & Shadow */
  --border-color: rgba(226, 232, 240, 0.8);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Sidebar */
  --sidebar-width: 280px;
  --sidebar-collapsed: 70px;
  --header-height: 70px;
  --bottom-nav-height: 70px;
}

/* Dark Mode Variables */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-card: rgba(30, 41, 59, 0.95);
  --bg-glass: rgba(30, 41, 59, 0.8);
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border-color: rgba(51, 65, 85, 0.8);
  --shadow-glass: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

/* Reset & Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--text-muted);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

/* ============================================
   LAYOUT STRUCTURE
   ============================================ */

.app-container {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid var(--border-color);
  z-index: 1000;
  transition: transform var(--transition-base), width var(--transition-base);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar.collapsed {
  width: var(--sidebar-collapsed);
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.sidebar-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  min-height: var(--header-height);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  overflow: hidden;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  opacity: 1;
  transition: opacity var(--transition-fast);
}

.sidebar.collapsed .logo-text {
  opacity: 0;
  width: 0;
}

/* Menu Toggle */
.menu-toggle {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: var(--primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  z-index: 1001;
}

.menu-toggle:hover {
  background: var(--primary-dark);
  transform: translateY(-50%) scale(1.1);
}

/* Search Menu */
.sidebar-search {
  padding: var(--space-md);
  border-bottom: 1px solid var(--border-color);
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-wrapper i {
  position: absolute;
  left: var(--space-md);
  color: var(--text-muted);
  font-size: 0.875rem;
}

.search-input {
  width: 100%;
  padding: var(--space-sm) var(--space-md) var(--space-sm) 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-md);
}

.nav-section {
  margin-bottom: var(--space-lg);
}

.nav-section-title {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-xs);
  white-space: nowrap;
  opacity: 1;
  transition: opacity var(--transition-fast);
}

.sidebar.collapsed .nav-section-title {
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav-menu {
  list-style: none;
}

.nav-item {
  margin-bottom: var(--space-xs);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--primary);
  transform: scaleY(0);
  transition: transform var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
}

.nav-link.active::before {
  transform: scaleY(1);
}

.nav-link i {
  width: 20px;
  text-align: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.nav-link span {
  white-space: nowrap;
  opacity: 1;
  transition: opacity var(--transition-fast);
}

.sidebar.collapsed .nav-link span {
  opacity: 0;
  width: 0;
}

/* Dropdown Menu */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-toggle {
  justify-content: space-between;
}

.nav-dropdown-toggle .dropdown-arrow {
  transition: transform var(--transition-fast);
  font-size: 0.75rem;
}

.nav-dropdown.open .nav-dropdown-toggle .dropdown-arrow {
  transform: rotate(180deg);
}

.nav-submenu {
  list-style: none;
  padding-left: 2.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-base);
}

.nav-dropdown.open .nav-submenu {
  max-height: 500px;
}

.nav-submenu .nav-link {
  padding: var(--space-xs) var(--space-md);
  font-size: 0.8rem;
}

/* User Profile in Sidebar */
.sidebar-footer {
  padding: var(--space-md);
  border-top: 1px solid var(--border-color);
  background: var(--bg-glass);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.user-profile:hover {
  background: var(--bg-secondary);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  overflow: hidden;
  opacity: 1;
  transition: opacity var(--transition-fast);
}

.sidebar.collapsed .user-info {
  opacity: 0;
  width: 0;
}

.user-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ============================================
   MAIN CONTENT
   ============================================ */

.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  transition: margin-left var(--transition-base);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.sidebar.collapsed ~ .main-content {
  margin-left: var(--sidebar-collapsed);
}

.sidebar.hidden ~ .main-content {
  margin-left: 0;
}

/* Header */
.main-header {
  position: sticky;
  top: 0;
  z-index: 900;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-md) var(--space-lg);
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

/* Header Stats (Kasir Header) */
.header-stats {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  min-width: 120px;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.stat-value {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-value.positive {
  color: var(--success);
}

.stat-value.negative {
  color: var(--danger);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.btn-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.btn-icon:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-2px);
}

.btn-icon.active {
  background: var(--success);
  color: white;
  border-color: var(--success);
}

.btn-icon .badge {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: var(--danger);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Status Indicator */
.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
}

.status-indicator.open {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.status-indicator.closed {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-indicator.open .status-dot {
  background: var(--success);
}

.status-indicator.closed .status-dot {
  background: var(--danger);
  animation: none;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Page Content */
.page-content {
  flex: 1;
  padding: var(--space-lg);
  overflow-y: auto;
}

/* ============================================
   COMPONENTS
   ============================================ */

/* Cards */
.card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-glass);
  overflow: hidden;
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.card-body {
  padding: var(--space-lg);
}

.card-footer {
  padding: var(--space-lg);
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

/* Glass Card */
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

[data-theme="dark"] .glass-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: none;
  outline: none;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(99, 102, 241, 0.23);
}

.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--border-color);
}

.btn-success {
  background: linear-gradient(135deg, var(--success), #059669);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39);
}

.btn-danger {
  background: linear-gradient(135deg, var(--danger), #dc2626);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(239, 68, 68, 0.39);
}

.btn-warning {
  background: linear-gradient(135deg, var(--warning), #d97706);
  color: white;
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
}

.btn-ghost:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.btn-sm {
  padding: var(--space-xs) var(--space-md);
  font-size: 0.75rem;
}

.btn-lg {
  padding: var(--space-md) var(--space-xl);
  font-size: 1rem;
}

.btn-block {
  width: 100%;
}

/* Forms */
.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.form-label-required::after {
  content: '*';
  color: var(--danger);
  margin-left: var(--space-xs);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.input-group {
  display: flex;
  align-items: stretch;
}

.input-group .form-input {
  border-radius: 0;
  flex: 1;
}

.input-group .input-group-text {
  display: flex;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.input-group .form-input:first-child,
.input-group .input-group-text:first-child {
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}

.input-group .form-input:last-child,
.input-group .input-group-text:last-child {
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

/* Checkboxes & Radios */
.form-check {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
}

.form-check-input {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-sm);
  background: var(--bg-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  appearance: none;
  position: relative;
}

.form-check-input:checked {
  background: var(--primary);
  border-color: var(--primary);
}

.form-check-input:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.form-check-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Tables */
.table-container {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table th,
.table td {
  padding: var(--space-md);
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.table th {
  background: var(--bg-secondary);
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.table tbody tr:hover {
  background: var(--bg-secondary);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-primary {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
}

.badge-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

.badge-danger {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.badge-info {
  background: rgba(59, 130, 246, 0.1);
  color: var(--info);
}

/* Alerts */
.alert {
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--success);
}

.alert-warning {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: var(--warning);
}

.alert-danger {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--danger);
}

.alert-info {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: var(--info);
}

/* Modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  padding: var(--space-md);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  transform: scale(0.95);
  transition: transform var(--transition-base);
}

.modal-overlay.active .modal {
  transform: scale(1);
}

.modal-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  border: none;
  background: var(--bg-secondary);
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--danger);
  color: white;
}

.modal-body {
  padding: var(--space-lg);
  overflow-y: auto;
  max-height: 60vh;
}

.modal-footer {
  padding: var(--space-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
}

/* Toast Notifications */
.toast-container {
  position: fixed;
  top: var(--space-lg);
  right: var(--space-lg);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.toast {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  min-width: 300px;
  animation: slideInRight 0.3s ease;
  border-left: 4px solid;
}

.toast.success {
  border-color: var(--success);
}

.toast.error {
  border-color: var(--danger);
}

.toast.warning {
  border-color: var(--warning);
}

.toast.info {
  border-color: var(--info);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4000;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.loading-overlay.active {
  opacity: 1;
  visibility: visible;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Empty States */
.empty-state {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-muted);
}

.empty-state-icon {
  width: 80px;
  height: 80px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  font-size: 2rem;
}

.empty-state-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.empty-state-text {
  font-size: 0.875rem;
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--space-lg);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Utility Classes */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-sm); }
.gap-4 { gap: var(--space-md); }

.text-center { text-align: center; }
.text-right { text-align: right; }
.text-muted { color: var(--text-muted); }

.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

.hidden { display: none !important; }

/* Mobile Bottom Navigation */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--bottom-nav-height);
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-color);
  display: none;
  z-index: 1000;
}

.mobile-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  transition: all var(--transition-fast);
}

.mobile-nav-item i {
  font-size: 1.25rem;
}

.mobile-nav-item.active,
.mobile-nav-item:hover {
  color: var(--primary);
}

/* ============================================
   RESPONSIVE STYLES
   ============================================ */

@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.mobile-open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .header-stats {
    display: none;
  }
}

@media (max-width: 768px) {
  .mobile-nav {
    display: flex;
  }
  
  .page-content {
    padding-bottom: calc(var(--bottom-nav-height) + var(--space-lg));
  }
  
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal {
    max-width: 100%;
    margin: var(--space-sm);
  }
  
  .toast-container {
    left: var(--space-md);
    right: var(--space-md);
  }
  
  .toast {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 1rem;
  }
  
  .card-header,
  .card-body,
  .card-footer {
    padding: var(--space-md);
  }
  
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}

/* Print Styles */
@media print {
  .sidebar,
  .mobile-nav,
  .main-header,
  .no-print {
    display: none !important;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .page-content {
    padding: 0;
  }
}
