# vj-auth-form

> To use Vanilla JavaScript Web Component for authentication (Login/Register) UI form.
> This web component uses `Ionic 5` built-in web components.

# Installation

> npm install vj-auth-form -S

# Usage

```html
<vj-auth-form name="auth-form"></vj-auth-form>
```

```javascript
<script>
    const element = document.getElementsByName('auth-form');
    console.log(element);
    if(element && element.length) {
        element[0].addEventListener('onLogin', (e) => console.log(`Logged In...`, e.detail));
        element[0].addEventListener('onRegister', (e) => console.log(`Registered In...`, e.detail));
    }
</script>
```

## Events

### onRegister
Type: `Custom Event`

To get user credentials on registering.

### onLogin
Type: `Custom Event`

To get user credentials on login.


## License
MIT &copy; [Srinivasan K K](https://srinivasankk.com)
