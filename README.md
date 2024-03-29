# 아파트너 과제

### 1. 사용한 기술
* React.js
* Next.js
* Typescript
* React-query
* Recoil
* emotion
</br>
</br>


### 2. 과제 설명
* github에서 제공해주는 [user search api](https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users/) 를 사용하였습니다.
* <div>page 단위로는 user와 bookmark가 있고 각각 유저를 검색해서 리스트를 보여주었고, 북마크된 유저를 모아서 볼 수 있도록 구성하였습니다.</div>
* <div>components 단위로는 다른 곳에서 사용할 수 있도록 공통 컴포넌트를 만들어서 재사용을 할 수 있게 하였고, emotion을 사용하므로써 동적 스타일링을 사용하여 유연하고 직관적이게 마크업을 진행하였습니다. </div>
* <div>첫번째 요구사항에서 주어진 검색 기능에서는 onKeyDown 이벤트를 발생 시켜 해당 input value인 keyword값을 onSearch를 통해 부모 컴포넌트에게 전달해서 keyword값이 있을 때 userList가 나오도록 하였고, 무한 스크롤은 intersectionObserver api 와 useInfiniteQuery를 사용하여 스크롤 시 20개씩 userList가 나오도록 기능을 구현하였습니다.</div>
* <div>두번째 요구사항에서 주어진 북마크 기능에서는 각 userList의 북마크를 클릭했을 때 user의 정보를 전역상태관리자인 Recoil에 저장하여 북마크된 user를 bookmarkList 화면에서 보여주었고, 동시에 로컬스토리지에도 저장하여 새로고침 해도 데이터가 계속 저장되도록 하였습니다. </div>

</br>



### 3. 디렉토리 구조
```
├── src
│   ├── apis
│   │   └── getUser.ts
│   ├── components
│   │   ├── Toast
│   │   │   └── Toast.tsx
│   │   ├── bookmark
│   │   │   └── List.tsx
│   │   ├── icons
│   │   │   ├── Bookmark.tsx
│   │   │   └── home.tsx
│   │   ├── navbar
│   │   │   └── Navbar.tsx
│   │   ├── search
│   │   │   └── SearchBar.tsx
│   │   ├── shared
│   │   │   ├── Flex.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── Spacing.tsx
│   │   │   ├── Text.tsx
│   │   │   └── TextField.tsx
│   │   └── user
│   │       ├── Item.tsx
│   │       └── List.tsx
│   ├── hooks
│   │   ├── useClient.ts
│   │   └── useInfiniteScroll.ts
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── bookmark
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   └── user
│   │       └── index.tsx
│   ├── recoil
│   │   └── user.ts
│   ├── styles
│   │   ├── colors.ts
│   │   └── globalStyles.ts
│   ├── types
│   │   └── user.ts
│   └── utils
│       └── axios.ts
├── tsconfig.json
└── yarn.lock
```

### 4. 배포
[배포링크](https://apart-assignment.vercel.app/)
