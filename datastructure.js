/**
 * 스택
 */
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

//============================================================

/**
 * 큐
 */
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

//============================================================

/**
 * 재귀함수
 * 
 * 자연수 N을 넣어 recursiveFunction을 실행하면 자기 자신을 N번 호출하는 재귀 함수이다.
 */
function recursiveFunction(n) {
    console.log('실행', n)
    if (n === 1) return true;
    else return recursiveFunction(n - 1);
}

console.log('recursiveFunction end ==> ', recursiveFunction(10))