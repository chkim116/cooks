# @cooksmelon/event

<br />

## Install

```c

$npm i @cooksmelon/event
$yarn add @cooksmelon/event

```

<br />
<br />

## Using

```c
import { useFindId, useFind, useFormInput, useInput, useToggle } from "@cooksmelon/event";
import { useMore, useScroll } from "@cooksmelon/event";
```

<br />

## useFormInput

<p> <strong> Only Form or Input Event </strong></p>
You can be set intialValue
<br />
<br />

```c
const [form, onChange, setForm] = useFormInput({email: "", password: ""});

// if wanna reset
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
// reset value
```

<br />
<br />

## useInput()

<p> <strong> Only Input Change Event </strong></p>
You <strong>have to be set </strong> intialValue
<br />
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

## useToggle()

<p> <strong>Toggle handler</strong></p>
It's the best simple way to change state
<br />
<br />

```c
const [toggle, onClick] = useToggle(false);

<button onClick={onClick} type="button">toggle</button>

console.log(toggle);
// ex) false ? true : false
```

<br />
<br />

## useFind()

<p> <strong>Find dataset</strong></p>
If you set up a dataset(HTML) will be useful

<br />
<br />

```c
const [find, onFind] = useFind();

 <div data-value="value" data-id="id" data-day="mon" onClick={onFind}></div>

 console.log(find);
 // DOMStringMap {value: "value", id: "id", day: "mon", constructor: Object}
```

<p>You can access the DOMStringMap and extract and use the data if necessary.</p>

<p><strong>If you set up a dataset-id, you can use useFindId.</strong></p>

```c
const [findId, onFindId] = useFindId();

 <div data-id="dwqd" onClick={onFind}></div>

 console.log(find);
 // 'dwqd'
```

<br />

[Total Example](https://codesandbox.io/s/loving-napier-hrqdi?file=/src/App.js)

<br />

---

**1.0.6v**

## useScroll

<p> <strong>Infinite Scroll with Intersection Observer API</strong></p>
It's simple way to implement Infinite Scroll

[Example](https://codesandbox.io/s/cold-sunset-m5tzb?file=/src/App.js)
<br />
<br />

```c
import { useScroll } from "@cooksmelon/event";
import faker from "faker";

const createBoard = () => {
    return {
      title: faker.lorem.word(),
      content: faker.lorem.sentences()
    };
};
const [boards, setBoards] = useState([]);

const viewPort = useRef(null);
const data = {
    viewPort: viewPort.current,
    length: boards.length,
    initial: 10,
    count: 20,
    limit: 110
  };

const [lastElement, display] = useScroll(data);

useEffect(() => {
    setBoards(Array(display).fill(undefined).map(createBoard));
}, [display]);

<div ref={viewPort}>
    {boards.map((b, index) => (
        <div ref={boards.length === index + 1 ? lastElement : null}>
        <h1>{b.title}</h1>
        <p>{b.content}</p>
        </div>
    ))}
</div>
```

#### Props

**\*viewPort** : ViewPort is wrapper
<br />
**\*length** : Current length of data.
<br />
**\*initial** : InitialNumber
<br />
**\*count** : InitialNumber + count
<br />
**\*limit**: It is limit
<br />
query : Reset when query changes
<br />
isLoading : Will not scroll when loading

<br />
<br />

## useMore

<p> <strong>More Click Button</strong></p>
View More

[Example](https://codesandbox.io/s/practical-chaplygin-qywqt?file=/src/App.js)
<br />
<br />

```c
import { useFind, useMore } from "@cooksmelon/event";
import faker from "faker";
;

const createBoard = () => {
    return {
        title: faker.random.word(),
        content: faker.lorem.sentences(),
        id: faker.random.uuid()
    };
};

const [onMore, display] = useMore({
    length: 20,
    initial: 5,
    count: 5,
    limit: 20
});

const boards = Array(display).fill(undefined).map(createBoard);

console.log(find);

<div className="App">
    {boards.map((b) => (
        <div>
          <h2>{b.title}</h2>
          <p>{b.content}</p>
        </div>
      ))}
      <div onClick={onMore}> more</div>
</div>
```

#### Props

**\*length** : Current length of data.
<br />
**\*initial** : InitialNumber
<br />
**\*count** : InitialNumber + count
<br />
**\*limit**: It is limit
<br />
query : Reset when query changes
<br />
isLoading : Will not scroll when loading
