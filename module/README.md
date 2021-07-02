## Module의 종류

1. Built-in Core Module (ex. Node.js module) <br>
   실행 환경에서 바로 사용 가능한 모듈

2. Community-based Module (ex. NPM) <br>
   외부에서 가져와서 사용하는 모듈 (ex. `npm install <ModuleName>`)

3. Local Module <br>
   특정 프로젝트에 정의된 모듈

<br>
<br>

## Module을 사용한다면

1. 코드의 재상용성이 증가한다
2. 코드의 관리가 편해진다
3. 코드를 모듈화하는 기준이 명확해야 한다

<br>
<br>

## Bundle이란?

참조 관계가 있는 모듈들을 모아서 하나의 파일로 묶는 것

<br>
<br>

## Bundle이 중요한 이유

1. 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다
2. 사용하지 않는 코드를 제거해준다 <br>
   (웹팩을 통해 번들링을 하면 참조하는 코드들로만 이루어진 모듈로 바뀌게 된다)
3. 파일의 크기를 줄여준다

<br>
<br>

## Webpack 이해하기

Webpack: 웹 어플리케이션을 위해 사용하는 모듈 번들러 라는 도구

<br>
<br>

## Webpack 기본 구조

| 구조   | 설명                                           | 예시                                                                                                                                                     |
| ------ | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry  | 모듈의 의존 관계를 이해하기 위한 시작점을 설정 | 1. 모듈 B, 모듈 C가 모듈 A에서 참조될 경우 모듈 A를 Entry 요소로 설정<br>2. 웹팩이 모듈 A를 시작점으로 다른 모듈과의 의존 관계를 해석해서 번들 파일 생성 |
| Output | 웹팩이 생성하는 번들 파일에 대한 정보를 설정   |                                                                                                                                                          |

<br>
<br>

## Webpack 사용 방법 - 명령어

### 설치

```
npm install webpack webpack-cli --save-dev
```

`webpack-cli`: 웹팩을 실행할 수 있는 명령어를 지원해주는 패키지

<br>

### 구조 설정

1. **Entry**와 **Ouput** 설정<br>
   `src > index.js` 파일이 있을 경우 기본적으로 Entry로 인식<br>
   `dist` 폴더가 있을 경우 기본적으로 Output으로 인식

2. **target** 설정<br>
   `target`: 웹팩이 어떤 환경에서 실행되는지 웹팩에게 알려주는 역할<br>
   웹팩이 모듈의 의존 관계를 해석할 때 index.js의 readline 모듈이 Node 환경에서 제공해주는 내장 모듈임을 인식시켜줘야 하며,
   인식시켜주기 위해서는 `target`이라는 key를 설정해야 한다<br>
   > **target 설정 방법**
   >
   > ```
   > npx webpack --target=node
   > ```

<br>

### 웹팩 실행

```
npx webpack
```

<br>

### 코드 실행

```
node ./dist/main.js
```

<br>

### 웹팩 설정

```js
/* webpack.config.js */

// __dirname, path module

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 절대 경로
    filename: 'bundle.js',
  },
  target: 'node',
};
```

<br>
<br>

## Webpack 기본 구조

> Package.json
>
> - dependencies: 어플리케이션 내부에 직접 포함되는 모듈
> - devDependencies: 개발 과정에 필요한 모듈

<br>

### Mode

빌드 환경을 구분짓는 역할<br>
번들 과정에서 개발 모드인지 프로덕션 모드인지에 따라 번들 파일이 만들어지는 결과나 작업 환경이 달라지게끔 설정 가능

<br>

### Loader

다양한 모듈들을 입력받아 처리하는 역할<br>
자바스크립트 또는 json 파일을 기본 모듈로 인식<br>
(예시: webpack-practice)

```js
module.exports = {
  module: {
    rules: [loader1, loader2],
  },
};
```

<br>

### Plugin

웹팩이 동작하는 전반적인 과정에 개입하여 번들 파일에 변화를 주거나 개발 모드에서 개발 편의성을 제공해주거나 프로덕션 모드에서 코드의 최적화를 진행해주는 등 다양한 역할을 수행함

> 외부 plugin 설치 방법<br> > `npm install html-webpack-plugin --save-dev`

```js
module.exports = {
   plugins: [new Plugin({...option}), ...]
}
```

<br>
<br>

## Webpack 설정하기

#### Handlebars 설치

`npm install handlebars --save-dev`<br>
`npm install handlebars-loader --save-dev`<br><br>

템플릿을 표현하는 방식 중 하나인 Mustache를 활용한 템플릿 엔진<br>
Handlebars를 이용하면 템플릿 파일의 데이터가 어디에 어떻게 저장돼있는 지를 Mustache로 표현

> Handlebars 로더는 함수로 컴파일하여 자바스크립트에서 임포트할 수 있도록 만들어 줌 (자바스크립트 파일이 아닌 것도 임포트할 수 있게 되어 하나의 번들로 생성, 이미지 파일을 base64로 인코딩된 URL 문자열로 변환하여 자바스크립트 내에서 사용 가능)<br> > [Webpack 소개](https://medium.com/@OutOfBedlam/webpack-%EC%86%8C%EA%B0%9C-d595f93d5c28)

<br>

#### Caching

사용자가 서비스를 위해 기다리는 시간을 최소화하기 위해 이용 (필요한 리소스의 복사본과 같은 역할)<br>

`npm install clean-webpack-plugin --save-dev`<br>
: 빌드 시 불필요한 파일을 제거해주는 플러그인 (새로 생성된 파일만 남김)

```js
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [new CleanWebpackPlugin()],
};
```

<br>

`npm install mini-css-extract-plugin --save-dev`<br>
: 캐싱을 위해 css를 외부로 빼서 활용시키도록 해주는 플러그인

```js
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash].css', // 빌드 시 해시값이 적용된 파일명으로 저장
      filename: '[contenthash].css', // 빌드 시 콘텐츠가 바뀐 파일만 해시값을 다시 부여하여 저장
    }),
  ],
};
```
