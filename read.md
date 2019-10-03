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

### 15 Heroku deploy
- First Time
  - Create Heroku account if you don't have it
  - commit our codebase to git
  - Install Heroku CLI if you don't have it
  - Create app `heroku create`
  - Deploy App with git `git remote add heroku https://git.heroku.com/heroku_app_name.git`
  - Heroku deploys project `git push heroku master`

- Subsequent Deploys
  - Commit codebase to git
  - Deploy App with Git `git push heroku master`

### Passport
- passport: General helpers for handling auth in Express apps
- passport strategy: Helpers for authenticating with one very specific method


clientID - public token - we can share this with the public
clientSecret - Private token - we don't want anyone to see this

cookie based authentication

### 33 mongodb
1 instance = 1 record

## 42 encoding users

OAuth's only purpose is to allow someone to sign in. After that, we use our own internal ID's

## 54 fixing heroku proxy issue
Error: redirect_uri_mismatch
=> proxy: true