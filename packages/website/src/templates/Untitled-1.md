---
title: Dialog
component: Dialog
description: An accessible dialog component, useful for helping users make decisions and to display critical information.
---

```js
const [isOpen, setIsOpen] = React.useState(false);
return (
  <>
    <RC.Button onClick={() => setIsOpen(true)}>Open dialog</RC.Button>
    <RC.Dialog {...props} isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <RC.Box p={6}>
        {props.children}
        <RC.Button mt={4} onClick={() => setIsOpen(false)}>
          Close
        </RC.Button>
      </RC.Box>
    </RC.Dialog>
  </>
);
```

### Props

<PropsTable
data={{
    children: 'ReactNode',
    isOpen: 'Boolean',
    canDismiss: 'Boolean',
    onDismiss: 'Function',
    refToFocusOnOpen: 'Ref',
    refToFocusOnClose: 'Ref',
    css: 'any',
    contentCss: 'any',
    overlayCss: 'any',
  }}
/>

#### children

The content to render inside the `Dialog`.

#### isOpen

Controls whether the Dialog is open or not.

#### canDismiss

Whether the dialog can be dismissed via click outside or escape key.

#### onDismiss

A function that gets called when the Dialog is dismissed via click outside or escape key.

#### refToFocusOnOpen

A reference to an element to focus on inside the dialog after it opens. If not provided, it will focus on the first focusable element.

#### refToFocusOnClose

A reference to an element to focus on outside the dialog after it closes. If not provided, it will focus on the last focused element before the dialog was opened.

#### css

The styles to apply to the root element.

#### contentCss

The styles to apply to the content element.

#### overlayCss

The styles to apply to the overlay element.
