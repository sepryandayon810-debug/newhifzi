/**
 * WebPOS Authentication Module
 */

const Auth = {
  currentUser: null,

  // Initialize authentication
  init: () => {
    // Check for existing session
    const session = Utils.getStorage('webpos_session');
    if (session) {
      Auth.currentUser = session.user;
    }

    // Listen for auth state changes
    auth.onAuthStateChanged((user) => {
      if (user) {
        Auth.loadUserData(user.uid);
      } else {
        Auth.currentUser = null;
        Utils.removeStorage('webpos_session');
      }
    });
  },

  // Load user data from database
  loadUserData: async (uid) => {
    try {
      const snapshot = await database.ref(`users/${uid}`).once('value');
      const userData = snapshot.val();
      
      if (userData) {
        Auth.currentUser = {
          uid,
          email: userData.email,
          name: userData.name,
          role: userData.role,
          avatar: userData.avatar || null
        };

        // Save session
        Utils.setStorage('webpos_session', {
          user: Auth.currentUser,
          loginTime: Date.now()
        });

        // Update last login
        await database.ref(`users/${uid}`).update({
          lastLogin: firebase.database.ServerValue.TIMESTAMP,
          isOnline: true
        });

        return Auth.currentUser;
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
    return null;
  },

  // Login with email and password
  login: async (email, password) => {
    try {
      Utils.showLoading('Logging in...');
      
      const result = await auth.signInWithEmailAndPassword(email, password);
      const user = await Auth.loadUserData(result.user.uid);
      
      Utils.hideLoading();
      
      if (user) {
        Utils.showToast(`Selamat datang, ${user.name}!`, 'success');
        return { success: true, user };
      }
      
      return { success: false, error: 'User data not found' };
    } catch (error) {
      Utils.hideLoading();
      console.error('Login error:', error);
      
      let message = 'Login gagal';
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'Email tidak terdaftar';
          break;
        case 'auth/wrong-password':
          message = 'Password salah';
          break;
        case 'auth/invalid-email':
          message = 'Format email tidak valid';
          break;
        case 'auth/user-disabled':
          message = 'Akun telah dinonaktifkan';
          break;
        case 'auth/too-many-requests':
          message = 'Terlalu banyak percobaan. Silakan coba lagi nanti';
          break;
      }
      
      Utils.showToast(message, 'error');
      return { success: false, error: message };
    }
  },

  // Register new user
  register: async (email, password, name, role = 'kasir') => {
    try {
      Utils.showLoading('Creating account...');
      
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const uid = result.user.uid;
      
      // Create user data in database
      await database.ref(`users/${uid}`).set({
        email,
        name,
        role,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        lastLogin: firebase.database.ServerValue.TIMESTAMP,
        status: 'active'
      });

      Utils.hideLoading();
      Utils.showToast('Akun berhasil dibuat!', 'success');
      
      return { success: true, uid };
    } catch (error) {
      Utils.hideLoading();
      console.error('Registration error:', error);
      
      let message = 'Pendaftaran gagal';
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'Email sudah terdaftar';
          break;
        case 'auth/invalid-email':
          message = 'Email tidak valid';
          break;
        case 'auth/weak-password':
          message = 'Password terlalu lemah (min 6 karakter)';
          break;
      }
      
      Utils.showToast(message, 'error');
      return { success: false, error: message };
    }
  },

  // Logout user
  logout: async () => {
    try {
      if (Auth.currentUser) {
        await database.ref(`users/${Auth.currentUser.uid}`).update({
          isOnline: false,
          lastLogout: firebase.database.ServerValue.TIMESTAMP
        });
      }

      await auth.signOut();
      Auth.currentUser = null;
      Utils.removeStorage('webpos_session');
      
      Utils.showToast('Logout berhasil', 'info');
      window.location.href = 'login.html';
    } catch (error) {
      console.error('Logout error:', error);
      Utils.showToast('Error saat logout', 'error');
    }
  },

  // Check if user has required role
  hasRole: (requiredRoles) => {
    if (!Auth.currentUser) return false;
    if (typeof requiredRoles === 'string') {
      return Auth.currentUser.role === requiredRoles;
    }
    return requiredRoles.includes(Auth.currentUser.role);
  },

  // Check if user can access menu
  canAccess: (menuName) => {
    if (!Auth.currentUser) return false;
    
    const permissions = {
      owner: ['kasir', 'produk', 'riwayat', 'modal', 'kas', 'hutang', 
              'laporan', 'pelanggan', 'user', 'setting'],
      admin: ['kasir', 'produk', 'riwayat', 'modal', 'kas', 'hutang', 
              'laporan', 'pelanggan', 'user', 'setting'],
      kasir: ['kasir', 'produk', 'riwayat', 'modal', 'hutang', 'pelanggan']
    };

    const userPermissions = permissions[Auth.currentUser.role] || [];
    return userPermissions.includes(menuName);
  },

  // Get current user
  getCurrentUser: () => {
    return Auth.currentUser;
  },

  // Check if authenticated
  isAuthenticated: () => {
    // Check from localStorage session OR Firebase auth state
    const session = Utils.getStorage('webpos_session');
    return !!Auth.currentUser || !!session || !!auth.currentUser;
  },

  // Require authentication (redirect if not logged in)
  requireAuth: () => {
    if (!Auth.isAuthenticated()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', Auth.init);
