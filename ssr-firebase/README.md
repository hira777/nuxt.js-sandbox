# `firebase.json`

```json
{
  "hosting": {
    "public": "prod/client",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "function": "nuxtssr"
      }
    ]
  },
  "functions": {
    "source": "prod/server"
  }
}
```

## `public`

Firebase Hosting へのアップロードに使用するディレクトリ。

```json
"public": "prod/client",
```

## `ignore`

デプロイ時に無視するファイル

```json
"ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
```

## `rewrites`

特定のパターンに一致するリクエストを単一の宛先に送れる。

```json
"rewrites": [
  {
    "source": "**",
    "function": "nuxtssr"
  }
]
```

今回の場合、全てのリクエストに対し、`Cloud Functions`である`nuxtssr`関数を実行し、動的コンテンツを生成をする。

## `functions`

実行する`Cloud Functions`の関数。

```json
"functions": {
  "source": "prod/server"
}
```
