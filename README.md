# 디자인 패턴 in Typescript

> https://refactoring.guru 를 참고하여 학습하고 있습니다.

이 레포지토리는 디자인 패턴들을 예제를 통해 학습한 내용이 정리되었습니다.

CLI를 통해 빠르게 결과를 볼 수 있도록 작성되었습니다.

# 실행
종속성 설치:

```bash
bun install
```

프로젝트 실행 (CLI):

```bash
bun start
```

# 프로젝트 구조
아래와 같은 규칙에 따라 폴더를 구성합니다:
1. `src/design-patterns/` 
    - 디자인 패턴 예제들의 최상위 루트 디렉토리입니다.
2. 하위 분류 (패턴 카테고리)
   다음 세 가지 디자인 패턴 분류에 따라 서브 폴더를 나눕니다:
   - creational-patterns/ – 생성(Creational) 패턴
   - structural-patterns/ – 구조(Structural) 패턴
   - behavioral-patterns/ – 행위(Behavioral) 패턴
3. 각 분류 폴더 내부에는 구체적인 디자인 패턴 이름으로 된 폴더가 존재합니다.
    - singleton-pattern/
4. 구체적인 디자인 패턴 폴더 내부에는 예제 폴더가 존재합니다.
   - `[분류]-example` 형식으로 명시합니다.
5. 예제 폴더 index.ts에는 DesignPatternRunner를 상속받은 Runner 클래스를 default로 내보내야합니다.

# 현재 정리한 디자인 패턴
## 생성 패턴 (Creational)
- 미작성
## 구조 패턴 (Structural)
- 미작성
## 행위 패턴 (Behavioral)
### 전략 패턴
- [Concept-Example](/src/design-patterns/behavioral-patterns/strategy-pattern/concept-example) 가장 기본적인 패턴의 형태를 보여줍니다.
- [Route-Example](/src/design-patterns/behavioral-patterns/strategy-pattern/route-example) 네비게이션의 경로 생성 알고리즘을 전략 패턴으로 관리합니다.
- [Auth-Example](/src/design-patterns/behavioral-patterns/strategy-pattern/auth-example) Passport의 Strategy와 Nestjs의 Guard Decorator에서 영감을 얻어 직접 만든 예제입니다.