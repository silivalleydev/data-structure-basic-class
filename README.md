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

## 그래프
그래프는 단순히 노드(node)와 그 노드를 연결하는 간선(edge)을 하나로 모아 놓은 자료 구조이다.
    - 그래프는 연결되어있는 객체간의 관계를 표현할 수 있는 자료구조이다.
    - 예를들어, 지도, 지하철 노선도의 최단 경로 등이 있다.

#### 그래프와 트리의 차이

| |**그래프**|**트리**|
|------|--------|--------|
|**정의**|노드(node)와 그 노드를 연결하는 간선(edge)을 하나로 모아놓은 자료구조|그래프의 한 종류로 DAG(Directed Acyclic Graph, 즉, 방향성이 있는 순환 그래프)의 한 종류|
|**방향성**|방향 그래프(Directed) <br/> 무방향 그래프(Undirected) 모두존재 |방향 그래프(Directed)|
|**사이클**|사이클(Cycle) 가능 <br/> 자체 간선(self-loop) 가능 <br/> 순환 그래프(Cyclic), 비순환 그래프(Acyclic) 모두 존재 |사이클(Cycle) 불가능 <br/> 자체 간선(self-loop) 불가능 <br/> 비순환 그래프(Acyclic)|
|**루트노드**|루트노드의 개념이 없음|한개의 루트 노드만이 존재 <br/> 모든 자식 노드는 한개의 부모 노드만을 가짐|
|**부모-자식**|부모-자식의 개념이 없음|부모-자식 관계 <br/> 모든 자식노드는 한개의 부모 노드만을 가짐|
|**모델**|네트워크 모델|계층 모델(Layer)|
|**순회**|DFS, BFS|DFS, BFS 안의 Pre-, In, Post-order|
|**간선의 수**|그래프에 따라 간선의 수가 다름 <br/> 간선이 없을 수도 있음|노드가 N인 트리는 항상 N-1의 간선을 가짐|
|**경로**|-|임의의 두 노드 간의 경로는 유일|
|**예시**|지도, 지하철 노선도의 최단경로|이진트리, 이진 탐색트리, 균형트리(AVL트리, red-black 트리), 이진 힙(최대힙, 최소힙)|

### 그래프 용어

<img src="./img/node.png" width="330" height="244" />  

- 노드(Node)/정점(Vertax): 위의 그림을 보면 동그라미 하나 하나가 있는데 그것을 특정위치인 노드(Node)/정점(Vertex)라고 한다.
- 간선(Edge): 노드와 노드 사이를 연결한 선을 간선이라고한다.
  
<hr/>  

<img src="./img/adjacent.png" width="330" height="244" />  

<hr/>  

- 인접(adjacent): 인접하다의 의미는 위 이미지를 보면 0과 1 노드가 간선으로 연결되어있는데, 이를 인접하다고 설명한다.

<img src="./img/degree.png" width="330" height="244" /> 

- 차수(Degree): `무방향 그래프`에서 하나의 정점에 인접한 정점의 수인데,  
위의 그림에서 예를들면, 0번 노드에 인접한 노드는 1번 2번이 있으니까 차수가 2가 된다.
    - 무방향 그래프의 차수의 합: 그래프 간선 수 * 2
- 진입 차수(in-degree): `방향 그래프`에서 외부에서 오는 간선의 수(내차수)이다.  
위의 그림에서 보면 0번 노드 방향으로 오는 간선이 없기 때문에 진입차수가 0이지만 1번 노드의 경우 1번 노드로 오는 간선이 0번, 2번 노드에서 오는 간선이 있기 때문에 진입차수가 2가된다.
- 진출 차수(out-degree): `방향 그래프`에서 외부로 향하는 간선의 수(외차수)이다.  
위의 그림에서 보면 0번 노드에서 1번, 2번 노드 방향으로 간선이 있기 때문에 진출차수는 2가 된다. 

<hr/>  

<img src="./img/selfloop.png" width="330" height="244" />   

- Self-loop: 출발지와 목적지가 동일한 정점을 Self-loop라고 하는데, 위의 그림을 보면 4번 정점은 자기 자신한테만 이동이 가능하다.

<hr/>  

<img src="./img/path.png" width="330" height="244" />   

- 경로: 정점과 간선이 교대로 구성된 시퀀스이다.  
위의 그림에서보면 A에서 B로 갈때 즉, Path(A, B) 로가는 [A, e1, B] 순서로 가거나 OR [A, e3, C, e2, B] 순으로 가는 경로 두가지가 있다.
- 단순 경로(Simple Path): 정점과 간선이 중복되지 않는 경로를 단순 경로라고한다.
- 경로 길이(Path length): 경로를 구성하는데 사용된 간선의 수를 의미한다.

<hr/>  

<img src="./img/cycle.png" width="330" height="244" />   

- 회로(Cycle): 시작 정점과 끝 정점이 같은 경로이다.  
위의 그림에서보면 B에서 B로갈때 즉, Cycle(B, B)는 [B, e1, A, e3, C, e2, B] 순으로 순환하는 구조이다.

### 그래프 종류

<img src="./img/direct.png" width="330" height="244" />   

- 무방향 그래프(Undirected Graph): 무방향 간선으로 이루어진 그래프이다.  
    - 간선은 간선을 통해 양방향으로 갈 수 있다.
    - 정점 0, 1을 연결하는 간선은 (0,1) or (1,0)으로 동일하다
- 방향 그래프(Directed Graph): 방향이 있는 간선으로 이루어진 그래프이다.
    - 0 -> 1로 가는 간선은 (0,1)로 표현한다.**(1, 0)과는 다른 것이다.**

<hr/>  

<img src="./img/weight.png" width="330" height="244" />   

- 가중치 그래프(Weighted Graph): 가중치 또는 비용을 갖는 그래프이다.  
    - Network 라고도 한다.
    - 도시 - 도시의 연결, 도로의 길이, 톨게이트 비용 등을 예로 들 수 있다.

<hr/>  

<img src="./img/complete.png" width="330" height="244" />   

- 완전 그래프(Complete Graph): 

 

## 트리