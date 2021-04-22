# Learn Babel

### 초기화

`npm init -y`

<br>

### babel-cli 설치

`npm install --save-dev babel-cli`

<br>

### npm script로 자동화

```js
// package.json
"script": {
    "build": "babel ./public/src -d ./public/lib -w"
}
```

./public/src : 직접 개발한 코드가 들어있는 폴더
./public/lib : 자동으로 컴파일되어 생성되는 폴더

<br>

### 변환 옵션 설정

.babelrc 파일 생성

ECAM2015 preset을 사용하기 위해서는 해당 preset을 설치
`npm install --save-dev babel-preset-es2015`

<br>

### Babel 실행 방법

`npm run build`

<br>

### lib에 압축된 버전의 파일을 생성하기 위해서는 minify 패키지 사용

`npm install babel-preset-minify --save-dev`

설치 후 .babelrc 파일에도 추가

```js
{
    "presets: ["es2015", "minify"]
}
```

Babel 실행을 유지하면 src 안의 파일을 수정할 때마다 자동으로 컴파일됨
