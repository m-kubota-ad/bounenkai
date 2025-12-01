// ============================================
// 認証モジュール
// ============================================
(function() {
    'use strict';

    // 認証関連の定数
    const AUTH_CONFIG = {
        AUTH_KEY: 'bingo_authenticated',
        SALT: 'bingo_salt_2024_adastria',
        PASSWORD_HASH: '374ab5b540c1f19273e06b6f828edf23cf6bae3b31184445cc518c22ea7478a5',
        ERROR_DISPLAY_TIME: 3000
    };

    // 認証モジュール
    window.AuthModule = {
        /**
         * SHA-256ハッシュを計算
         * @param {string} message - ハッシュ化する文字列
         * @returns {Promise<string>} ハッシュ値（16進数）
         */
        async sha256(message) {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        },

        /**
         * ソルト付きハッシュを計算
         * @param {string} password - パスワード
         * @returns {Promise<string>} ハッシュ値
         */
        async hashWithSalt(password) {
            return await this.sha256(AUTH_CONFIG.SALT + password);
        },

        /**
         * 認証状態を確認
         * @returns {boolean} 認証済みかどうか
         */
        checkAuth() {
            return localStorage.getItem(AUTH_CONFIG.AUTH_KEY) === 'true';
        },

        /**
         * 認証状態を保存
         * @param {boolean} authenticated - 認証状態
         */
        setAuth(authenticated) {
            if (authenticated) {
                localStorage.setItem(AUTH_CONFIG.AUTH_KEY, 'true');
            } else {
                localStorage.removeItem(AUTH_CONFIG.AUTH_KEY);
            }
        },

        /**
         * ログイン処理
         */
        async handleLogin() {
            const passwordInput = document.querySelector('#passwordInput');
            const loginError = document.querySelector('#loginError');
            const password = passwordInput.value.trim();

            if (!password) {
                if (loginError) {
                    loginError.classList.add('show');
                }
                return;
            }

            try {
                const passwordHash = await this.hashWithSalt(password);
                if (passwordHash === AUTH_CONFIG.PASSWORD_HASH) {
                    this.setAuth(true);
                    // 各モジュールの初期化は各ページで処理
                    if (window.BingoModule) {
                        window.BingoModule.createBingoContent();
                        await window.BingoModule.init();
                    }
                    if (window.PdfModule) {
                        window.PdfModule.createPdfContent();
                    }
                } else {
                    this.showLoginError(loginError, passwordInput);
                }
            } catch (error) {
                console.error('ログインエラー:', error);
                this.showLoginError(loginError, passwordInput);
            }
        },

        /**
         * ログインエラーを表示
         * @param {HTMLElement} loginError - エラー表示要素
         * @param {HTMLElement} passwordInput - パスワード入力要素
         */
        showLoginError(loginError, passwordInput) {
            loginError.classList.add('show');
            passwordInput.value = '';
            setTimeout(() => {
                loginError.classList.remove('show');
            }, AUTH_CONFIG.ERROR_DISPLAY_TIME);
        },

        /**
         * ログアウト処理
         */
        handleLogout() {
            this.setAuth(false);
            const loginScreen = document.querySelector('#loginScreen');
            if (loginScreen) {
                loginScreen.style.display = 'flex';
            }
            
            // BINGOコンテンツをクリア
            const bingoContent = document.querySelector('#bingoContent');
            if (bingoContent) {
                bingoContent.classList.remove('authenticated');
                bingoContent.innerHTML = '';
            }
            
            // PDFコンテンツをクリア
            const pdfContent = document.querySelector('#pdfContent');
            if (pdfContent) {
                pdfContent.classList.remove('authenticated');
                pdfContent.innerHTML = '';
            }
            
            const passwordInput = document.querySelector('#passwordInput');
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.focus();
            }
        }
    };

    // グローバル関数として公開
    window.handleLogin = () => window.AuthModule.handleLogin();
    window.handleLogout = () => window.AuthModule.handleLogout();
})();

