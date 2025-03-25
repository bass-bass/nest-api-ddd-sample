## 概要

NestJS, TypeORM, SQLiteメモリデータベースをバックエンドにしたサンプルAPIです。DDDベースで構築しています。

## セットアップ

```bash
$ npm install
```

## コンパイルと実行

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## テスト

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIリクエストの確認

* ユーザー作成
```
$ curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
        "name": "John Doe",
        "email": "john.doe@example.com"
      }'
{"id":1,"name":"John Doe","email":"john.doe@example.com"}
```

* ユーザー取得
```
curl -X GET http://localhost:3000/users/1
```

* ユーザー一覧取得
```
curl -X GET http://localhost:3000/users
```

* ユーザー削除
```
curl -X DELETE http://localhost:3000/users/1
```
