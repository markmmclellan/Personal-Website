const TRANSLATIONS = {
    ja: {
        'nav.home': 'ホーム',
        'nav.projects': 'プロジェクト',
        'nav.resume': '履歴書',
        'nav.contact': 'お問い合わせ',

        'hero.hi': 'こんにちは、',
        'hero.bio': 'ラトガース大学で情報技術・情報学の学士号(B.A.)を取得し、経済学を副専攻として修了しました。東京とニュージャージーで育った経験から、複雑なシステムの仕組みへの探究心が芽生えました。それはハードウェアやソフトウェアのトラブルシューティングでも、海の深みを探検することでも変わりません。実践的な技術課題に取り組むことと、新しい技術を学ぶことが好きです。',
        'pill.degree': '情報技術・情報学 学士 (B.A.)',
        'pill.padi': 'PADI オープン・ウォーター・ダイバー',
        'btn.viewresume': '履歴書を見る',

        'about.title': '自己紹介',
        'about.body': '仕事以外では、読書、ゲーム、水泳をしたり、時間があれば旅行に出かけたりして過ごしています。東京とニュージャージーの間で育ったことで、新しい場所を訪れること、異なる文化に触れること、新しい環境に適応することの大切さを学びました。ものごとの仕組みに対する好奇心が強く、複雑なゲームシステムを分解することでも、水の中で体を動かすことでも、新しい実践的なプロジェクトに取り組むことでも、それは変わりません。好奇心を持ち続け、その場で新しいスキルを身につけ、自分の興味をどこまで広げられるか試すことが好きです。',

        'proj.title': 'プロジェクト',

        'proj.site.title': '個人ウェブサイト',
        'proj.site.body': 'このサイトです。HTML、JavaScript、CSSで作成し、私の経歴、履歴書、プロジェクトを紹介しています。',

        'proj.vcalc.title': 'V-Calc: ポケモンチャンピオンズ ダメージ・素早さ計算ツール',
        'proj.vcalc.body': 'ポケモンチャンピオンズ向けの、Showdown風のダメージ・行動順計算ツールです。ReactとTypeScriptで開発し、@smogon/calcのチャンピオンズ用ルールセットを基盤にしています。独自のスクレイパーでop.ggから最新の使用率データを取得し、人気の技・持ち物・特性・性格・Stat Pointの配分をワンクリックで反映できます。ダブルバトルでの全体技の扱い、Showdown形式のチームのインポート／エクスポート、プリセット保存にも対応しています。GitHub Pagesにデプロイし、6時間ごとに自動で再ビルドされるワークフローでデータを最新に保っています。',
        'link.live': '計算ツールを開く →',
        'link.github': 'GitHubで見る →',

        'proj.llm.title': 'セルフホスト型ローカルLLMとインターフェース環境',
        'proj.llm.body': '自分のハードウェア上で動かす、エンドツーエンドのローカルAI環境です。KoboldcppがバックエンドとしてGemma 4 12B(QAT)モデルを提供し、SillyTavernがセッション管理とプロンプトのカスタマイズを行うフロントエンドを担います。外出先からでも、Tailscale経由でスマートフォンから利用できます。',
        'flow.aria': '図: スマートフォンがTailscale(WireGuard)のトンネルを通じて、SillyTavern、Koboldcpp、Gemma 4 12Bモデルが動く自宅のPCに接続します。',
        'flow.phone': 'スマートフォン',
        'flow.phone.sub': 'ブラウザ(外出先から)',
        'flow.ts': 'Tailscale',
        'flow.ts.sub': 'WireGuard暗号化メッシュ・ポート開放なし',
        'flow.pc': '自宅のPC',
        'flow.li.st': 'SillyTavern(フロントエンド)',
        'flow.li.kobold': 'Koboldcpp(APIバックエンド)',
        'sec.title': 'セキュリティ',
        'sec.body': 'ポートフォワーディングの代わりにTailscaleを使っているため、自宅ネットワークのポートがインターネットに公開されることはありません。モデルにアクセスできるのは、認証済みの自分のデバイスだけです。',
        'learn.title': '学んだこと',
        'learn.body': '当初はコーディング支援用に構築しましたが、このサイズのモデルではコーディング作業は苦手だとわかりました。そこで汎用アシスタントや娯楽用途に切り替えたところ、そちらの方がずっと実力を発揮してくれました。',

        'proj.dog.title': 'Dogeared: 個人向け読書ライブラリ(PWA)',
        'proj.dog.body': '長文テキストの取り込み・整理・閲覧のための、モバイルファーストでインストール可能なWebアプリです。Cloudflare WorkersとD1(SQLite)上で動くサーバーレスの単一ユーザー向けアプリで、Viteでビルドした素のJavaScriptのフロントエンドを備え、Cloudflareの無料枠だけで運用しています。',
        'dog.li1': '<strong>セキュリティ:</strong> HMAC署名付きHttpOnlyセッションCookieによるパスワードログイン、定数時間比較、そしてIPごとのブルートフォース対策(段階的に延びるロックアウトと、任意のメール通知)。',
        'dog.li2': '<strong>安全なインポート:</strong> EPUB、HTML、プレーンテキストの取り込みに対応し、内容はDOMPurifyでサニタイズします。サーバー側の取得プロキシはHTTPSのみ・許可リスト方式です。',
        'dog.li3': '<strong>オフライン閲覧:</strong> Service WorkerとIndexedDB・Cache APIにより、保存した内容を接続なしで読めます。',
        'dog.li4': '<strong>ライブラリ機能:</strong> 読書の進捗、メモ付きしおり、本棚、シリーズ順序、検索、JSONバックアップ／エクスポート。',
        'dog.li5': '<strong>データ層:</strong> 外部キーとカスケード削除を備えたリレーショナルスキーマを、バージョン管理されたSQLマイグレーションで発展させています。',

        'resume.title': '履歴書',
        'resume.intro': '英語版と日本語版の履歴書をダウンロードできます。',
        'resume.en.title': '英文履歴書',
        'resume.en.body': 'B.A.(IT)、CompTIA A+、Security+を取得したエントリーレベルのITプロフェッショナルで、ITサポートの実務経験があります。',
        'resume.jp.body': '日本の標準書式の履歴書です。',
        'btn.pdf': 'PDFを開く',

        'contact.title': 'お問い合わせ',
        'contact.intro': 'ぜひお気軽にご連絡ください。ご質問、協業のご提案、ちょっとしたご挨拶など、フォームまたは下記のリンクからお送りいただけます。',
        'contact.email': 'メール: ',
        'form.fname': '名',
        'form.lname': '姓',
        'form.email': 'メールアドレス',
        'form.message': 'メッセージ',
        'ph.fname': '太郎',
        'ph.lname': '山田',
        'ph.message': 'メッセージをご入力ください…',
        'btn.send': '送信'
    }
};

const TYPED_PHRASES = {
    en: [
        'Mark.',
        'an IT Professional.',
        'a Tech Enthusiast.',
        'an Explorer.',
        'a Scuba Diver.',
        'an Animal Lover.'
    ],
    ja: [
        '真亜久です。',
        'ITプロフェッショナルです。',
        'テクノロジー好きです。',
        '探検好きです。',
        'スキューバダイバーです。',
        '動物好きです。'
    ]
};
