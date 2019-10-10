## 66 client setup

index.js - Data layer control(Redux)
App.js - Rendering layer control(React Router)
 
## 69 redux

Provider is a component that makes the store accessible to every component in the app

# 76 Router configuration
BrowserRouterは、一つの子コンポーネントしか持てない。

## 78 Always visible components
単純にRouteではなくコンポーネントを指定する。
React components calls a `action creartor`.
Action creator returns a `action`
Action sent to `reducers`
Reducers updates state in `store`
Store sent back state to components, causing them to rerender

## 84 basic of redux thunk
An action creator always expects us to return in action

`Dispatch function`: Dispatch sends the action to all the different reducers in the store, causing them to instantly recalculate the app state

## 94 Link Tags vs a tag

`Link`: Navigate to a different route rendered by React Router
`a`: Navigate to a completely different HTML document

## 118 Deployment options

1. Build client project -> Commit build project -> Push to Heroku
2. Push to Heroku -> Tell Heroku to install all dependencies for client project -> Heroku builds project
3. Push to CL -> Run tests and stuff -> CL builds commits client -> CL Pushes build to Heroku

## 119

obj.nameとobj['name']の違いを調べる

## 179

localTunnelで、自分のlocalhostを外部サーバーから識別できるようにする