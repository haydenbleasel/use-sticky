# useSticky

`useSticky` is a tiny, SSR-friendly hook for tracking element sticky state. It implements a hack of `margin-top: -1px` to detect when an element is stuck to the top of the viewport and returns a boolean value.

![Example](/example.gif)

## Installation

```bash
yarn add @haydenbleasel/use-sticky
```

## Usage

```jsx
import useSticky from '@haydenbleasel/use-sticky';

const App = () => {
  const ref = useRef(null);
  const isSticky = useSticky(ref);

  return (
    <div ref={ref}>
      <p>Is sticky? {isSticky ? 'Yes' : 'No'}</p>
    </div>
  );
};
```
