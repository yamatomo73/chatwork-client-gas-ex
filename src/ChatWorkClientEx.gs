/** 
 * @fileoverview 
 * ChatWork Client for Google Apps Script(https://github.com/cw-shibuya/chatwork-client-gas) の
 * 非公式拡張ライブラリです。
 * 
 * 依存ライブラリ
 *   - ChatWork Client for Google Apps Script （拡張版） 
 *     https://github.com/yamatomo73/chatwork-client-gas
 */

/**
* ChatWorkClientExの作成
*
* <h3>利用例</h3>
* <pre>
* var cw = ChatWorkClientEx.factory({token: xxx, email: exsample@exsample.com, password: password});
* cw.sendMessage({room_id: xx, body: xx});
* </pre>
* @param {object} config
* @return {ChatWorkClientEx} ChatWorkClientのインスタンス
*/
function factory(config) {
  return new ChatWorkClientEx(config);
};

/**
* 自分自身の情報を取得
* @see http://developer.chatwork.com/ja/endpoint_me.html#GET-me
*/
function getMe() {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* 自分のステータスを取得
* @see http://developer.chatwork.com/ja/endpoint_my.html#GET-my-status
*/
function getMyStatus() {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* 自分のコンタクトになっているユーザーの一覧
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_contacts.html#GET-contacts
*/
function getContacts() {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* 自分のルーム一覧を取得
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms
*/
function getRooms() {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルーム情報を取得
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id
*/
function getRoom(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルーム新規作成
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms
*/
function createRoom(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルーム情報の更新
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id
*/
function updateRoom(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルーム退出
* @returns {boolean} 成功した場合true
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#DELETE-rooms-room_id
*/
function leaveRoomn(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルーム削除
* @returns {boolean} 成功した場合true
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#DELETE-rooms-room_id
*/
function deleteRoom(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルームのメンバー一覧取得
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id-members
*/
function getRoomMembers(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* ルームのメンバー一括更新
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-members
*/
function updateRoomMembers(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* 未取得ルームメッセージ取得
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-messages
*/
function getRoomMessages(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* メッセージ送信
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-messages
*/
function sendMessage(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* メッセージ更新
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-messages-message_id
*/
function updateMessage(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* メッセージ削除
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#DELETE-rooms-room_id-messages-message_id
*/
function deleteMessage(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* メッセージを既読にする
* @returns {(object|boolean)} APIのレスポンス。APIに失敗した場合は false
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-messages-read
*/
function readRoomMessages(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* メッセージを未読にする
* @returns {(object|boolean)} APIのレスポンス。APIに失敗した場合は false
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-messages-unread
*/
function unreadRoomMessages(params) { 
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* マイチャットへのメッセージを送信
*/
function sendMessageToMyChat(message) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* タスク追加
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-tasks
*/
function sendTask(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* タスク情報取得
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-tasks
*/
function sendTask(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");
};

/**
* 指定したチャットのタスク一覧を取得
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id-tasks
*/
function getRoomTasks(room_id, params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");  
};

/**
* チャットのファイル一覧を取得
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id-files
*/
function getRoomFiles(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");  
};

/**
* 新しいファイルをアップロード
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-files
*/
function uploadRoomFile(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");   
};

/**
* ファイル情報を取得
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id-files-file_id
*/
function getRoomFile(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");  
  
};

/**
* 招待リンクを取得する
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#GET-rooms-room_id-link
*/
function getRoomLink(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");   
};

/**
* 招待リンクを作成する
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-link
*/
function createRoomLink(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
  
};

/**
* 招待リンクを変更する
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#PUT-rooms-room_id-link
*/
function updateRoomLink(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
};

/**
* 招待リンクを削除する
* @returns {object} APIのレスポンス
* @see http://developer.chatwork.com/ja/endpoint_rooms.html#DELETE-rooms-room_id-link
*/
function deleteRoomLink(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
};

/**
* 自分のタスク一覧を取得
* @see http://developer.chatwork.com/ja/endpoint_my.html#GET-my-tasks
*/
function getMyTasks(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
  
};

/**
* 自分に対するコンタクト承認依頼一覧を取得する
* @see http://developer.chatwork.com/ja/endpoint_incoming_requests.html#GET-incoming_requests
*/
function getIncomingRequests() {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
};

/**
* 自分に対するコンタクト承認依頼を承認する
* @see http://developer.chatwork.com/ja/endpoint_incoming_requests.html#PUT-incoming_requests-request_id
*/
function acceptIncomingRequest(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");   
};

/**
* 自分に対するコンタクト承認依頼をキャンセルする
* @see http://developer.chatwork.com/ja/endpoint_incoming_requests.html#DELETE-incoming_requests-request_id
*/
function cancelIncomingRequest(params) {
  throw new Error("このメソッドは直接呼び出せません。factoryメソッドをコールし取得したインスタンスより呼び出してください。");    
};

(function(global){
  var ChatWorkClientEx = (function() {
    
    function ChatWorkClientEx(config)
    {
      // 公式APIクライアント
      this.client = ChatWorkClient.factory(config);
      
      this.base_url = 'https://www.chatwork.com/gateway';
      this.cookies = [];
      this.common_api_param = {};
      
      // email, password でログイン
      this._login(config.email, config.password);
    };
    
    //////////////////////////////
    // 独自拡張非公式公式API
    //////////////////////////////
    
    /**
    * chatwork動作設定を取得する
    * @returns {object} APIのレスポンス
    */
    ChatWorkClientEx.prototype.getSetting = function() {
      return this.httpPost('/get_setting.php', this.common_api_param);
    };
    
    /**
    * chatwork動作設定を設定する
    * @param {object} param
    * @returns {object} APIのレスポンス
    */
    ChatWorkClientEx.prototype.sendSetting = function(param) {
      return this.httpPost('/send_setting.php', 
                           this._objectMerge({'data': param}, this.common_api_param) 
                          );
    };
    
    /**
    * プロフィールを設定
    * @param {object} param
    * @returns {object} APIのレスポンス
    */
    ChatWorkClientEx.prototype.sendProfileSetting = function(param) {
      return this.httpPost('/send_profile_setting.php', this._objectMerge(param, this.common_api_param));
    };
    

    //////////////////////////////
    // private 
    //////////////////////////////
    
    /*
    * boolean に変換する
    * @returns {boolean}
    */
    ChatWorkClientEx.prototype._toBoolean = function(value) {
      return ('1' === value || 1 === value || true === value);
    }
    
    /*
    * API パラメータで指定する boolean 値に変換する
    * @returns {string}
    */
    ChatWorkClientEx.prototype._toApiBoolean = function(value) {
      return (this._toBoolean(value)) ? '1' : '0';
    }
    
    /*
    * オブジェクトから指定したキーだけを抽出する
    * オブジェクトにキーがない場合は、無視される
    */
    ChatWorkClientEx.prototype._objectFilter = function(obj, keys, converter_func) {
      var filter_obj = {};
      for(var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key in obj) {
          filter_obj[key] = this._getValue(obj, key);
          if (typeof converter_func === 'function') {
            filter_obj[key] = converter_func(filter_obj[key]);
          }
        }
      }
      return filter_obj;
    };
    
    /*
    * unix timeに変換する
    * @returns {(number|null)} unix time。無効な値は null
    */
    ChatWorkClientEx.prototype._toUnixTime = function(value) {
      switch (typeof value) {
        case 'string':
        case 'number':
          return (new Number(optional_post_data['value'])).toFixed();
      }
      if (value instanceof Date) {
        return (new Number(Math.floor(value.getTime() / 1000))).toFixed();
      }
      
      // 未対応
      return null;
    };
    
    ChatWorkClientEx.prototype._login = function(email, password) {
      var url = this.base_url + '/api_login.php';
      var options = {
        'method': 'post',
        'headers': {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        },
        'payload': {
          'email': email,
          'password': password,
        },
      };
      var response = UrlFetchApp.fetch(url, options);
      
      if (response.getResponseCode() != 200) {
        // API 失敗
        throw new Error('APIコールに失敗しました');
      }
      
      // リクエストに成功していたらクッキー保存
      var headers = response.getAllHeaders();
      var cookies = [];
      if ( typeof headers['Set-Cookie'] !== 'undefined' ) {
        // Set-Cookieヘッダーが2つ以上の場合はheaders['Set-Cookie']の中身は配列
        var cookies = typeof headers['Set-Cookie'] == 'string' ? [ headers['Set-Cookie'] ] : headers['Set-Cookie'];
        for (var i = 0; i < cookies.length; i++) {
          // Set-Cookieヘッダーからname=valueだけ取り出し、セミコロン以降の属性は除外する
          cookies[i] = cookies[i].split( ';' )[0];
        };
        this.cookies = cookies;
      }
      var result = JSON.parse(response.getContentText())
      if (result && 'status' in result && result.status) {
        this.common_api_param = {
          'myid': result.result.myid,
          '_t': result.result.token,
        }
      } else {
        // ログイン失敗
        throw new Error('ログインに失敗しました');
      }
    };
    
    /*
    * unix timeに変換する
    * @returns {(number|null)} unix time。無効な値は null
    */
    ChatWorkClientEx.prototype._objectMerge = function(value) {
      var result = {};
      for(var i = 0; i < arguments.length; ++i) {
        for(var key in arguments[i]) {
          result[key] = arguments[i][key];
        }
      }
      return result;
    };
    
    /*
    * オブジェクトから値を取り出す
    * キーが存在しない場合は default_value を返却する
    */
    ChatWorkClientEx.prototype._getValue = function(params, key, default_value) {
      params = params || {};
      default_value = default_value === undefined ? null : default_value;
      return key in params ? params[key] : default_value;
    };
    
    /*
    * オブジェクトから値を文字列として取り出す
    * キーが存在しない場合は default_value を返却する
    */
    ChatWorkClientEx.prototype._getStringValue = function(params, key, default_value) {
      var value = this._getValue(params, key, default_value);
      return String(value);
    };
    
    ChatWorkClientEx.prototype._sendRequest = function(params)
    {
      var url = this.base_url + params.path;
      var pdata = this._getValue(params, 'pdata', {});
      var options = {
        'method': params.method,
        'headers': {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Cookie' : this.cookies.join(','),
        },
        'payload': {
          'pdata': JSON.stringify(pdata),
        },
      };
      Logger.log(options);
      result = UrlFetchApp.fetch(url, options);
      
      // リクエストに成功していたら結果を解析して返す
      if (result.getResponseCode() == 200) {
        return JSON.parse(result.getContentText())
      }
     
      return false;
    };
    
    ChatWorkClientEx.prototype.httpPost = function(endpoint, post_data) {
      return this._sendRequest({
        'method': 'post',
        'path': endpoint,
        'pdata': post_data
      });
    };
    
    ChatWorkClientEx.prototype.httpPut = function(endpoint, put_data) {
      return this._sendRequest({
        'method': 'put',
        'path': endpoint,
        'pdata': put_data
      });
    };
    
    ChatWorkClientEx.prototype.httpDelete = function(endpoint, put_data) {
      return this._sendRequest({
        'method': 'delete',
        'path': endpoint,
        'pdata': put_data
      });
    };
    
    ChatWorkClientEx.prototype.httpGet = function(endpoint, get_data) { 
      get_data = get_data || {};
      
      var path = endpoint
      
      // get_dataがあればクエリーを生成する
      // かなり簡易的なので必要に応じて拡張する
      var query_string_list = [];
      for (var key in get_data) {
        query_string_list.push(encodeURIComponent(key) + '=' + encodeURIComponent(get_data[key]));
      }
      
      if (query_string_list.length > 0) {
        path += '?' + query_string_list.join('&'); 
      }
      
      return this._sendRequest({
        'method': 'get',
        'path': path
      });
    };
    
    ///////////////////////////////////////////////////////////////////////////////////////
    // 公式API の Proxy
    ///////////////////////////////////////////////////////////////////////////////////////
    
    ChatWorkClientEx.prototype.getMe = function() {
      return this.client.getMe();
    };
    ChatWorkClientEx.prototype.getMyStatus = function() {
      return this.client.getMyStatus();
    };
    ChatWorkClientEx.prototype.getContacts = function() {
      return this.client.cancelIncomingRequest(params);
    };
    ChatWorkClientEx.prototype.getRooms = function() {
      return this.client.getRooms();
    };
    ChatWorkClientEx.prototype.getRoom = function(params) {
      return this.client.getRoom(params);
    };
    ChatWorkClientEx.prototype.createRoom = function(params) {
      return this.client.createRoom(params);
    };
    ChatWorkClientEx.prototype.updateRoom = function(params) {
      return this.client.updateRoom(params);
    };
    ChatWorkClientEx.prototype.leaveRoomn = function(params) {
      return this.client.leaveRoomn(params);
    };
    ChatWorkClientEx.prototype.deleteRoom = function(params) {
      return this.client.deleteRoom(params);
    };
    ChatWorkClientEx.prototype.getRoomMembers = function(params) {
      return this.client.getRoomMembers(params);
    };
    ChatWorkClientEx.prototype.updateRoomMembers = function(params) {
      return this.client.updateRoomMembers(params);
    };
    ChatWorkClientEx.prototype.getRoomMessages = function(params) { 
      return this.client.getRoomMessages(params);
    };
    ChatWorkClientEx.prototype.sendMessage = function(params) { 
      return this.client.sendMessage(params);
    };
    ChatWorkClientEx.prototype.updateMessage = function(params) { 
      return this.client.updateMessage(params);
    };
    ChatWorkClientEx.prototype.deleteMessage = function(params) { 
      return this.client.deleteMessage(params);
    };
    ChatWorkClientEx.prototype.readRoomMessages = function(params) { 
      return this.client.readRoomMessages(params);
    };
    ChatWorkClientEx.prototype.unreadRoomMessages = function(params) { 
      return this.client.unreadRoomMessages(params);
    };
    ChatWorkClientEx.prototype.sendMessageToMyChat = function(message) {
      return this.client.sendMessageToMyChat(params);
    };
    ChatWorkClientEx.prototype.sendTask = function(params) {
      return this.client.sendTask(params);
    };
    ChatWorkClientEx.prototype.sendTask = function(params) {
      return this.client.sendTask(params);
    };
    ChatWorkClientEx.prototype.getRoomTasks = function(room_id, params) {
      return this.client.getRoomTasks(room_id, params);
    };
    ChatWorkClientEx.prototype.getRoomFiles = function(params) {
      return this.client.getRoomFiles(params);
    };
    ChatWorkClientEx.prototype.uploadRoomFile = function(params) {
      return this.client.uploadRoomFile(params);
    };
    ChatWorkClientEx.prototype.getRoomFile = function(params) {
      return this.client.getRoomFile(params);
    };
    ChatWorkClientEx.prototype.getRoomLink = function(params) {
      return this.client.getRoomLink(params);
    };
    ChatWorkClientEx.prototype.createRoomLink = function(params) {
      return this.client.createRoomLink(params);
    };
    ChatWorkClientEx.prototype.updateRoomLink = function(params) {
      return this.client.updateRoomLink(params);
    };
    ChatWorkClientEx.prototype.deleteRoomLink = function(params) {
      return this.client.deleteRoomLink(params);
    };
    ChatWorkClientEx.prototype.getMyTasks = function(params) {
      return this.client.getMyTasks(params);
    };
    ChatWorkClientEx.prototype.getIncomingRequests = function() {
      return this.client.getIncomingRequests(params);
    };
    ChatWorkClientEx.prototype.acceptIncomingRequest = function(params) {
      return this.client.acceptIncomingRequest(params);
    };
    ChatWorkClientEx.prototype.cancelIncomingRequest = function(params) {
      return this.client.cancelIncomingRequest(params);
    };
    
    return ChatWorkClientEx;
  })();
  
  global.ChatWorkClientEx = ChatWorkClientEx;
  
})(this);