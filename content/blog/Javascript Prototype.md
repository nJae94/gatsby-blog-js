---
title: 자바스크립트 Prototype 정리
date: "2021-03-24"
description: 자바스크립트 Prototype에 대해서.
category: "front"
tags: [Javascirpt]
draft: false
---

프론트 엔드 개발자로 프레임워크는 공부하면서 자바스크립트 그 자체에는 그다지 깊게 파고 들어가지 않아 본 것 같아 시작한 자바스크립트 개인 공부며 그 정리 글이 될 것 같다.

## ProtoType

자바스크립트 객체는 [[Prototype]]이라는 내부 프로퍼티가 존재하며 거의 모든 객체가 생성 시점에 값이 할당된다. 이는 또 다른 객체를 참조하는 레퍼런스로 활용된다.
객체 프로퍼티를 참조할 경우 [[Get]]이 호출 객체 내부에 프로퍼티를 탐색하고 객체 내부에서 해당 프로퍼티를 찾지 못하면 [[ProtoType]] 링크를 따라가 탐색을 계속하며 최상위 프로토타입에서도 찾지 못한다면 undefined를 반환한다.

```
   const buzz = {
    flying:true
    }

    const woody = Object.create(buzz);

    woody.flying; ==> true
```

위의 코드처럼 woody는 buzz와 링크되어 woody 내부에 flying이라는 프로퍼티가 직접적으로 없지만 연결된 buzz를 통해 해당 프로퍼티를 찾아 반환할 수 있다.
이러한 현상을 프로토타입 체인이라고 부르며 프로퍼티 체인은 메모리 관리의 관점에서 장점이 있다.

## 프로토타입 체인

```
funtion Num(number)
{
  this.num = num;
  this.getValue = function() {
    console.log(num);
  }
}

const n1 = new Num(1);
const n2 = new Num(2);
```

Num 함수는 number를 받고 getValue라는 함수를 통해 출력한다. new 키워드를 사용해 객체를 만들어 낼 때 공통적으로 사용되는 getValue라는 메소드 역시도 객체가 생성될 때마다 메모리에 생성된다.

```
 funtion Num(number)
{
  this.num = num;
}

Num.prototype.getValue = function() {
  console.log(num);
}
```

공통 메소드 getValue를 prototype에 정의하고 객체를 생성하자 각 객체 안에서는 getValue 프로퍼티가 존재하지 않고 프로토타입 체인을 통해 각 객체들이 같은 prototype의 메소드를 참조하게 되어 메모리에 효율적이다.
