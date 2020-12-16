# @cooksmelon/utils

<br />

## Install

```c

$npm i @cooksmelon/utils
$yarn add @cooksmelon/utils

```

<br />
<br />

## Using

---

**1.0.0v**
<br />

```c
import { useReplace, useKtime } from "@cooksmelon/utils";
```

<br />
<br />

## useReplace

<br />
<p>정규표현식을 제거합니다.</p>

```c
import { useReplace } from "@cooksmelon/utils"

const filterString = useReplace("<p>please filter</p>");

console.log(filterString);
// "please filter"
```

<br />

## useKtime

<br />
<p>한국시간을 항상 가지고 옵니다.</p>
<br />

```c
import { useKtime } from "@cooksmelon/utils"

const date = useKtime()

console.log(date.toLocaleString())
// 현재 한국 시간 출력
```
