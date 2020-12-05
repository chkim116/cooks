# @melonhook/event

---

<br />

## Install

```c
$npm i @melonhook/event
$yarn add @melonhook/event
```

<br />
<br />
## Using
```c
import { useFindId, useFormInput, useInput, useToggle } from "@melonhook/event";
````

<br />

#### 1.useFormInput

<p> <strong> Only Form Event </strong></p>
You can be set intialValue
<br />

```c
const [form, onChange, setForm] = useFormInput({email: "", password: ""});
const onReset = () => {
        setForm({});
    };

<form onChange={onChange}>
    <input type="text" name="email" placeholder="email" />
    <input
        type="password"
        name="password"
        placeholder="password" />
    <button type="reset" onClick={onReset}>
            reset
    </button>
</form>

console.log(form);
// {email : value, password : value}
setForm({})
// set value
```

<br />
<br />

#### 2.useInput()

<p> <strong> Only Input Event </strong></p>
You have to be set intialValue
<br />

```c
const [text, onText, setText] = useInput(0);

<input
    type="number"
    onChange={onText}
    name="email"
    placeholder="email" />

console.log(text);
// value
setText(0)
// 0
```

<br />
<br />

#### 3.useToggle()

<br />

Toggle handler
<br />

```c
const [toggle, onClick] = useToggle(false);

<button onClick={onClick} type="button">toggle</button>

console.log(toggle);
// !prev
// ex) false ? true : false
```

<br />
<br />

#### 4.useFindId()

<br />

Find data-id
<br />

```c
const [find, onFind] = useFindId();

 <div data-id="dwqd" onClick={onFind}></div>

 console.log(find);
 // 'dwqd'
```
