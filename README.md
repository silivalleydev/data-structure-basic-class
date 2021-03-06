# Data Structure(자료구조)
- 자료구조란 데이터를 표현하고 관리하고 처리하기 위한 구조를 의미한다.
- 그중 `스택`과 `큐`는 자료구조의 기초 개념으로 다음의 두 핵심적인 함수로 구성된다.
    - 삽입(push): 데이터를 삽입한다.
    - 삭제(pop): 데이터를 삭제한다.
- 외에도 스택과 큐를 사용할 때는 삽입과 삭제 외에도 `오버플로`와 `언더플로`를 고민해야한다.
    - 오버플로(overflow): 특정한 자료구조가 수용할 수 있는 데이터의 크기를 이미 가득찬 상태에서 삽입 연산을 수행할 때 발생한다. 즉, 저장공간을 벗어나 데이터가 넘쳐흐를 때 발생한다.
    - 언더플로(underflow): 특정한 자료구조에 데이터가 전혀 들어있지 않은 상태에서 삭제 연산을 수행할 때 발생

## 스택(Stack)
- 스택은 박스에 비유할 수 있는데, 박스를 아래부터 위로 쌓고 위에부터 한개씩 내리는 것 처럼, 후입선출(나중에 들어온 박스가 먼저나가는) 구조이다.
```js
const stack = [];

stack.push('a');
stack.push('b');
stack.push('c');

/**
 * 박스가 3개 쌓임
 * 
 * |c|
 * |b|
 * |a|
 */
console.log('stack push => ', stack);

/**
 * 나중에 들어온 c 가 먼저 나감(pop)
 *  => c
 * | |
 * |b|
 * |a|
 */
stack.pop();
console.log('stack pop => ', stack);
```

## 큐(Queue)
- 큐는 대기 줄 처럼 먼저 앞에선 사람이 먼저나가는 것 처럼, 선입선출(먼저 들어온게 먼저나가는) 구조이다.
- 멀티스레딩에서 스레드를 관리하거나 대기열 시스템에 활용한다.
```js
const queue = [];

queue.push('a');
queue.push('b');
queue.push('c');

/** 
 * 먼저 들어온 a b c 순으로 줄서있음
 * ----------------
 *  c  |  b  |  a
 * ----------------
 */
console.log('queue ==> ', queue);

/** 
 * 먼저 들어온 a 가 먼저 나감 shift
 * ----------------
 *  c  |  b  |    =>  a
 * ----------------
 */
queue.shift();
console.log('queue shift ==> ', queue);
```

## 재귀 함수
- 재귀 함수란 자기 자신을 다시 호출하는 함수를 의미한다.
```js
/**
 * 재귀함수
 * 
 * 자연수 N을 넣어 recursiveFunction을 실행하면 자기 자신을 N번 호출하는 재귀 함수이다.
 */
function recursiveFunction(n) {
    console.log('실행', n)
    // 재귀함수를 구현할 때는 항상 종료 조건을 명시해야한다.
    // 아래의 경우는 자연수 n이 1이되면 재귀 함수 호출을 종료한다.
    if (n === 1) return true;
    else return recursiveFunction(n - 1);
}

/**
 *  recursiveFunction에 자연수 10을 넣으면 10번 큼 recursiveFunction을 호출한다.
 * 실행 10
 * 실행 9
 * 실행 8
 * 실행 7
 * 실행 6
 * 실행 5
 * 실행 4
 * 실행 3
 * 실행 2
 * 실행 1
 */
console.log('recursiveFunction end ==> ', recursiveFunction(10))
```

