### 9
Node: ブラウザの外で実行されるJavascript  
Express: Httpのトラフィックを容易にするライブラリー  

Incoming HTTP -> port5000 -> Express -> Route Handler -> response -> port -> browser

### 12 Heroku deployment checklist

- Dynamic Port Biding
    - Herokuはアプリに使われるportを見分けるので、私たちがlistenするportを確立する必要がある
- Specify Node Environment
    - 特定のnode & npmのバージョンをHerokuに伝える。enginesに定義
- Specify start script
    - サーバーを起動するためのコマンドをHerokuに伝える。
- Create .gitignore 