# ModularJS

[ModularJS](https://github.com/modularorg/modularjs) is a minimal JavaScript framework for ES modules that simplifies component creation with DOM elements. It facilitates module-to-module communication, event delegation, and scoped DOM element selection.

As Locomotive utilizes ModularJS in its stack, Locomotive Scroll has already incorporated support for ModularJS integration. This integration ensures seamless compatibility between Locomotive Scroll and ModularJS, enhancing the scrolling functionality and providing a smooth experience for developers using both frameworks.

## Options

### modularInstance

-   **Type:** `object`

_(Optional)_ The `modularInstance` refers to the Modular.js instance of the current module that is used to declare the Locomotive Scroll instance. This attribute is needed when using the `data-scroll-call="function, module"`, `data-scroll-call-self` and `data-scroll-module-progress` functionalities.

By providing the `modularInstance` object, you can access and utilize the functionalities of [Modularjs](https://github.com/modularorg/modularjs) within Locomotive Scroll. This allows for enhanced integration and coordination between the two libraries.

```js
// modules/Scroll.js
import { module as Module } from 'modujs';

export default class extends Module {
    constructor(m) {
        super(m);
    }

    init() {
        this.locomotiveScrollInstance = new LocomotiveScroll({
            modularInstance: this
        });
    }
}
```

## Attributes

### data-scroll-call

-   **Type:** `string`

The `data-scroll-call` attribute allows you to trigger a custom event when an element comes into view. This attribute expects a string value that specifies the parameters to be passed to the `call()` method of the [Modular.js](https://github.com/modularorg/modularjs#app-methods) library.

By using the `data-scroll-call` attribute, you can define and trigger custom events with specific parameters within your Modular.js application. This provides a way to synchronize the scrolling behavior with other functionalities or actions in your application.

Here's an example of how to use the `data-scroll-call` attribute:

```html
<div data-scroll data-scroll-call="onScrollCall, MyModule">Trigger</div>
```

```js
// modules/Scroll.js
import { module as Module } from 'modujs';

export default class extends Module {
    constructor(m) {
        super(m);
    }

    init() {
        this.locomotiveScrollInstance = new LocomotiveScroll({
            modularInstance: this,
        });
    }
}
```

```js
// modules/MyModule.js
import { module as Module } from 'modujs';

export default class extends Module {
    constructor(m) {
        super(m);
    }

    onScrollCall(params) {
        const { target, way, from } = params;
        console.log(`target: ${target}`, `way: ${way}`, `from: ${from}`);
    }
}
```

### data-scroll-call-self

By declaring the `data-scroll-call-self` attribute, you can specify a modular module on a scroll element and trigger a function within that module using the data-scroll-call attribute.

In scenarios where you have multiple instances of the same module on a page, triggering an event will be fired on all modules by default because Modular.js spreads an event listened by all modules created from the same class. However, there might be cases where you want to target a specific module that has been declared on the same element as the `data-scroll-call` attribute.

The following example triggers the module that has been declared on the same element as the `data-scroll-call` attribute:

```html
<div
    data-module-my-module
    data-scroll
    data-scroll-call="onScrollCall, MyModule"
    data-scroll-call-self
>
    Trigger
</div>
```

```js
// modules/MyModule.js
import { module as Module } from 'modujs';

export default class extends Module {
    constructor(m) {
        super(m);
    }

    onScrollCall(params) {
        console.log(`target: ${target}`, `way: ${way}`, `from: ${from}`);
    }
}
```

In the JavaScript code, the `onScrollCall` function will be triggered within the specified module when the scroll event is detected on the element. You can access and utilize the provided `params` object within the function to perform actions or retrieve information based on the scroll event.

### data-scroll-module-progress

The `data-scroll-module-progress` attribute allows you to call the `onScrollProgress` method of all Modular.js modules (`data-module-*`) specified on the current element. This method exposes the current element's progress, which ranges between `0` and `1`.

Here's an example of how to use the `data-scroll-module-progress` attribute:

```html
<div data-scroll data-scroll-module-progress data-module-my-module>
    Module progress
</div>
```

In the JavaScript code, the `onScrollProgress` method will be called on all modules that are declared using the `data-module-*` attribute on the element. The progress parameter represents the current progress of the element and can be used to perform actions or retrieve information based on the scrolling progress.

```js
// modules/Scroll.js
import { module as Module } from 'modujs';

export default class extends Module {
    constructor(m) {
        super(m);
    }

    init() {
        this.locomotiveScrollInstance = new LocomotiveScroll({
            modularInstance: this
        });
    }
}
```

```js
// modules/MyModule.js
import { module as Module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }

    onScrollProgress(progress) {
        console.log(`${Math.round((progress + Number.EPSILON) * 100)}%`);
    }
}
```
