/**
 * スライドコンテンツデータ
 * 
 * このファイルを編集することで、スライドの内容を簡単に変更できます。
 * HTMLを直接編集する必要はありません。
 */

const SLIDES_DATA = {
    // 設定
    config: {
        gameUrl: 'https://m-kubota-ad.github.io/bounenkai/game/',
        eventTitle: 'DX忘年会2025',
        gameTitle: 'クロスビンゴ'
    },

    // スライド1: タイトル
    title: {
        main: 'DX忘年会2025',
        subtitle: 'クロスビンゴ'
    },

    // スライド2: ゲームの目的
    purpose: {
        heading: '🎯 このゲームの目的',
        items: [
            {
                icon: '🤝',
                title: '異なる会社の方々と交流',
                description: 'ご自身の所属の会社以外の方と\n自然に会話が生まれます'
            },
            {
                icon: '🎲',
                title: '楽しく忘年会を盛り上げる',
                description: '3×3のビンゴカードで\n縦・横・斜めのいずれか1列を目指します'
            },
            {
                icon: '🎁',
                title: 'BINGO達成で景品獲得',
                description: '最初にBINGOを達成した方に\n素敵な景品をプレゼント！'
            }
        ]
    },

    // スライド3: ルール説明
    rules: {
        heading: '🎮 ルール説明',
        steps: [
            {
                title: 'お題を達成した人を探す',
                description: '各マスに表示されたお題を達成した人を見つけましょう',
                note: '※ご自身の所属の会社以外の方限定です'
            },
            {
                title: 'マスをタップして入力',
                description: '達成した人の会社名と名前を入力すると、\nマスがオレンジ色に変わります',
                note: ''
            },
            {
                title: 'BINGOを目指す',
                description: '縦・横・斜めのいずれか1列が揃ったら',
                note: '「BINGO！」と大きな声で叫んでください'
            }
        ],
        notice: {
            icon: '⚠️',
            title: 'ご注意',
            text: 'ビンゴ当選後に各マスの内容と書かれた人の名前を読み上げて景品をわたすので、名前を書かれることの承認を本人から得てください。'
        }
    },

    // スライド4: 参加方法
    join: {
        heading: '📱 ゲームに参加する',
        steps: [
            'スマートフォンで\nQRコードをスキャン',
            'パスワードを\n入力してログイン',
            '3×3のビンゴカードが\n表示されます'
        ],
        qrLabel: 'ゲームに参加する'
    },

    // スライド5: ゲーム進行中
    playing: {
        heading: '🎮 ゲーム進行中',
        message: '各マスに表示されたお題を達成した人を探して、\nマスをタップして入力してください！',
        qrLabel: 'まだ参加していない方はこちら'
    },

    // スライド6: 結果発表
    result: {
        heading: '結果発表',
        congrats: '🎉 BINGO達成おめでとうございます！ 🎉',
        message: '各マスの内容と書かれた人の名前を読み上げて、\n景品をお渡しします。'
    }
};

