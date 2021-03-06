---
title: TextBoxGroup
componentid: component-input
variantid: group
guid: 'input-textboxgroup-guid-default-component-react'
---

## Element name
```javascript
Name: TextBoxGroup Component
Component: "TextBoxGroup"
Selector: "<TextBoxGroup/>"
Import: "@sebgroup/react-components/dist/TextBoxGroup"
Type: Form Component
```

## Element information 
This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is `TextBoxGroup` and the selector is `<TextBoxGroup/>`. This component support custom svg icon, which can be fully style via css classes. We use SVG code directly as we can change its color or size at any moment, like when you are hover over. Rememer to change the color of SVG, you should target svg and use `fill` property instead of `color`.

## Basic use
```html
<TextBoxGroup
    name="textInput"
    placeholder="Text Box placeholder"
    value={this.state.textBox}
    onChange={(event) => { this.setState({ textBoxGroupValue: event.target.value }); }}
/>
```

## Properties
These are the current available properties:

| Property      | Type                                                     | Descrition                                      |
| ------------- | -------------------------------------------------------- | ----------------------------------------------- |
| value         | `string`                                                 | Value string                                    |
| name          | `string`                                                 | Name string                                     |
| onChange      | `(event: React.ChangeEvent<HTMLInputElement>) => void`   | On `'change'` event                             |
| onKeyDown?    | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | On `'keydown'` event                            |
| onKeyUp?      | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | On `'keyup'` event                              |
| onKeyPress?   | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | On `'keypress'` event                           |
| onFocus?      | `(event: React.FocusEvent<HTMLInputElement>) => void`    | On `'focus'` event                              |
| onBlur?       | `(event: React.FocusEvent<HTMLInputElement>) => void`    | On `'blur'` event                               |
| type?         | `string`                                                 | Input type. (default: `'text'`)                 |
| className?    | `string`                                                 | Custom class                                    |
| placeHolder?  | `string`                                                 | Placeholder text                                |
| label?        | `string`                                                 | The small label on top of the textbox           |
| error?        | `string`                                                 | Error text                                      |
| disabled?     | `boolean`                                                | Disable input element. (default: `false`)       |
| focus?        | `boolean`                                                | Enable autofocus. (default: `false`)            |
| readonly?     | `boolean`                                                | Make input element readonly. (default: `false`) |
| autoComplete? | `boolean`                                                | Enable autocomplete. (default: `false`)         |
| max?          | `number`                                                 | Input max length                                |
| leftText?     | `string`                                                 | Left side text                                  |
| rightText?    | `string`                                                 | Right side text                                 |
| leftIcon?     | `any`                                                 | Left, You can pass a component or a `SVG` directly here                  |
| rightIcon?    | `any`                                                 | Right, You can pass a component or a `SVG` directly here                |
| leftTitle?    | `string`                                                 | Left side HTML title                            |
| rightTitle?   | `string`                                                 | Right side HTML title                           |
| onLeftClick?  | `(event: React.MouseEvent<HTMLDivElement>) => void`      | Click event on Left icon                              |
| onRightClick? | `(event: React.MouseEvent<HTMLDivElement>) => void`      | Click event on Right icon                             |
| reference?    | `React.RefObject<HTMLInputElement>`                      | React Ref obj                                   |

:::iframe(https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/textboxgroup?mode=DL, 300)