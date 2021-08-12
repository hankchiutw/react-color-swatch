# react-color-swatch
> Simple color swatch React component.

**Demo site** https://react-color-swatch.vercel.app

### Features
- Can fetch colors from remote.
- Can provide colors manually.
- Show selected color in RGB.

### Usage example
```js
<ColorSwatch sourceUrl={sourceUrl} />
```

```js
<ColorSwatch
  sourceUrl={sourceUrl}
  defaultColors={[
    'rgb(255, 0, 0)',
    'rgb(200, 0, 0)',
    'rgb(150, 0, 0)',
    'hsl(100, 100%, 70%)',
    'hsl(100, 100%, 50%)',
  ]}
/>
```
See [App.tsx]('./src/App.tsx') for details.


### Development
Clone the repo and do:
```js
yarn install
yarn dev
```
Then use the browser to open `http://localhost:3000`

##### To add a new color space
- Define the color space in `src/color-swatch/dao/interfaces.ts`.
  - e.g. `XxxColor`
- Define the corresponding color item class under `src/color-swatch/entities`.
  - Make your class `implements ColorItem`.
  - e.g. `XxxColorItem` in `xxx-color-item.ts`.
- Implement the transform function in `src/color-swatch/dao/color-item-factory.ts` to convert `XxxColor` to `XxxColorItem`.

### Architecture
- `src/color-swatch` is the main implementation and only the UI component `ColorSwatch` is exposed.
- `dao` stands for data access object.
  - It aims to communicate backend API and returns suitable data structure for frontend, instead of passing the data structure from backend directly.
- `entities`, defines models for frontend features.
- `hooks`, handle the frontend use cases by React Hooks. UI components will call these hooks.


## Author

👤 **hankchiutw**

* Website: https://hankchiu.tw/
* Twitter: [@hankchiu\_tw](https://twitter.com/hankchiu\_tw)
* Github: [@hankchiutw](https://github.com/hankchiutw)
* LinkedIn: [@hankchiutw](https://linkedin.com/in/hankchiutw)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [hankchiutw](https://github.com/hankchiutw).<br />
This project is [MIT](LICENSE) licensed.

