## @Cooks/event

---

#### 1.useFormInput

Only Form Event

```c
const [form, onChange, setForm] = useFormInput();
const onReset = () => {
        setForm({});
    };

<form onChange={onChange}>
    <input type="text" name="email" placeholder="email" />
    <input
        type="password"
        name="password"
        placeholder="password" />
    <button type="button" onClick={onReset}>
            리셋
    </button>
</form>

console.log(form);
// {email : '입력값', password : '입력값'}
// setForm({}) = 초기화
```

#### 2.useInput()

Only Input Event

```c
const [text, onText, setText] = useInput();

<input
    type="number"
    onChange={onText}
    name="email"
    placeholder="email" />

console.log(text);
// '입력값'
// setText('') = 초기화
```

#### 3.useToggle()

Toggle handler

```c
const [toggle, onClick] = useToggle(false);

<button onClick={onClick} type="button">토글링</button>

console.log(toggle);
// !prev
// ex) false ? true : false
```

#### 4.useFindId()

Find data-id

```c
const [find, onFind] = useFindId();

 <div data-id="dwqd" onClick={onFind}></div>

 console.log(find);
 // 'dwqd'
```
