/*! gree-javascript-sdk - v0.0.3 - 2016-06-06 */(function() {
var MessageResource = MessageResource || {};
MessageResource.calendar = {
    header_title: 'アプリのイベント追加',
};

var MessageResource = MessageResource || {};
MessageResource.external_invite = {
    line: 'LINEから',
    sms: 'SMSから',
    mail: 'メールの連絡先から',
    twitter: 'Twitterから',
    facebook: 'Facebookから',
    qrcode: 'QRコードから',
    attention_msg: '注意事項(必読)',
    announce_title: '■ お知らせ',
    announce_msg: '2015年7月1日をもちまして、友だち招待1000Cキャンペーンを終了させていただくことになりました。詳しくは<a style="color:blue" href="http://gree.jp/r/78538/1">こちら</a>をご覧ください。'
};

var MessageResource = MessageResource || {};
MessageResource.footer = {
    gree_coin_msg:       'GREEコインをためる',
    invite_msg:          'GREEの友だちを誘う',
    half_invite_msg:     '友だちを招待',
    half_update_msg:     '300Cゲット！',
    link_settings:       'アプリ設定',
    link_help:           '規約・ヘルプ',
    link_contact:        'お問い合わせ',
    tabfooter_top:       'トップ',
    tabfooter_mygame:    'マイゲーム',
    tabfooter_search:    'ゲーム検索',
    tabfooter_chat:      'チャット',
    tabfooter_recommend: 'イチオシ',
    copyright_msg:       '&copy; GREE, Inc.',
    guest_play:          'ゲストプレイ中',
    upgrade_link:        '無料登録で継続！',
    remaining_lifetime_open: '(残',
    remaining_lifetime_close: 'H)'
};

var MessageResource = MessageResource || {};
MessageResource.invite = {
    header_title: '招待を送る',
    submit_button: '選択中の{count}人を招待する',
    default_submit_button: '送信する',
    noneselected_submit_button: '友だちを選ぼう',
    user_not_found: '招待できる友だちがいません',
    sending_submit_button: '送信中',
    searching_submit_button: '検索中',
    invite_hl: 'GREEの友だちを誘う',
    gree_invite_title: 'GREEの友だちを招待',
    external_invite_title: 'GREEの友だち以外を招待',
    app_setlector_opener: 'アプリで選択する',
    more: 'もっと見る',
    all_app: 'すべて',
    select_all: '一括選択する',
    select_clear: '選択解除する',
    max_select_user_error: '一度に招待できるのは最大{max_count}人です',
};

var MessageResource = MessageResource || {};
MessageResource.request = {
    header_title: 'リクエストを送る',
    submit_button: '{count}人に送信する',
    specified_submit_button: '送信する',
    noneselected_submit_button: '友だちを選ぼう',
    user_not_found: 'ユーザーが見つかりませんでした。',
    error: 'システムメンテナンス中です。しばらくしてからご利用ください。',
    menu_all: 'GREEの友だち',
    menu_joined: 'アプリ所有者',
    more: 'もっと見る...',
    submit_button_default: '0人に送信する',
    specified_submit_button: '送信する',
    sending_submit_button: '送信中'
};

var MessageResource = MessageResource || {};
MessageResource.rpc = {
    ios_3rd_party_cookie_error: 'ブラウザのCookieが無効なため、以下の手順でCookieを有効にしてブラウザを更新してください。\n設定>Safari>Cookieをブロック>「常に許可」または「訪問したWebサイトを許可」',
    android_3rd_party_cookie_error: 'このブラウザは非対応のためアプリが正しく動作しない場合があります。最新版のChromeアプリからアクセスをお試しください。'
};

var MessageResource = MessageResource || {};
MessageResource.share = {
    header_title: 'シェアする',
    submit_button: '送信する',
    twitter_description: 'Twitterに投稿してこのゲームをシェアしよう！',
    facebook_description: 'Facebookに投稿してこのゲームをシェアしよう！',
    facebook_invite_description: 'Facebookのタイムラインに投稿して友だちをゲームに誘おう！',
    sending_submit_button: '送信中',
};

var GREE = window.GREE;
if (GREE && GREE.extend && GREE.extend.config) {
    GREE.extend.config({ msg: MessageResource });
}
})();
