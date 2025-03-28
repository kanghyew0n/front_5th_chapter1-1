(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const c="user",x="/front_5th_chapter1-1";let u=null;const v=()=>{if(u)return u;const e={userInfo:JSON.parse(localStorage.getItem(c)),setUserInfo(t){const o=this.userInfo;if(!o)return this.userInfo=t,localStorage.setItem(c,JSON.stringify(t));const{username:n,email:s,bio:r}=t,a={...o,...o.username!==n&&{username:n},...o.email!==s&&{email:s},...o.bio!==r&&{bio:r}};this.userInfo=a,localStorage.setItem(c,JSON.stringify(a))},getUserInfo(){return this.userInfo},loggedIn(){return!!this.userInfo},logout(){this.userInfo=null,localStorage.removeItem(c)}};return u=e,e},i=v(),h=()=>{const e=i.loggedIn(),t=location.href.split("/").length,o=location.href.split("/")[t-1];return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a
            href="/"
            class="${o===""?"text-blue-600 font-bold":"text-gray-600"}"
            >홈</a
          >
        </li>
        ${e?`<li>
          <a
            href="/profile"
            class="${o==="profile"?"text-blue-600 font-bold":"text-gray-600"}"
            >프로필</a
          >
        </li>
        <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>`:`<li>
        <a href="/login" class="text-gray-600">로그인</a>
      </li>`}
      </ul>
    </nav>
  `},p=` <footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>`,y=({name:e,createdAt:t,message:o})=>`<div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">${e}</p>
                    <p class="text-sm text-gray-500">${t}</p>
                  </div>
                </div>
                <p>${o}</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>`,w=[{id:1,name:"김철수",createdAt:"15분 전",message:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:2,name:"이영희",createdAt:"30분 전",message:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:3,name:"박민수",createdAt:"1시간 전",message:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:4,name:"정수연",createdAt:"2시간 전",message:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],I=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${h()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea
            class="w-full p-2 border rounded"
            placeholder="무슨 생각을 하고 계신가요?"
          ></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            게시
          </button>
        </div>
        <div class="space-y-4">
          ${w.map(e=>y(e)).join("")}
        </div>
      </main>
      ${p}
    </div>
  </div>
`,$=()=>{const{username:e="",email:t="",bio:o=""}=i.getUserInfo();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${h()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${e}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${t}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >
${o}</textarea
                  >
                </div>
                <button
                  id="profile-submit"
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>

          ${p}
        </div>
      </div>
    </div>
  `},P=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
        항해플러스
      </h1>
      <form id="login-form">
        <div class="mb-4">
          <input
            id="username"
            type="text"
            placeholder="사용자 이름"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-6">
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            class="w-full p-2 border rounded"
          />
        </div>
        <button
          id="login-submit"
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          로그인
        </button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6" />
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
          새 계정 만들기
        </button>
      </div>
    </div>
  </main>
`,S=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div
      class="bg-white p-8 rounded-lg shadow-md w-full text-center"
      style="max-width: 480px"
    >
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,L=e=>{const t=e.username.value;if(!t||!t.trim())return window.alert("이름을 입력해주세요.");i.setUserInfo({username:t,email:"",bio:""})},O=e=>{const t=e.username.value,o=e.email.value,n=e.bio.value;i.setUserInfo({username:t,email:o,bio:n}),alert("프로필이 업데이트 되었어요!")},f=e=>e==="history"?x:"#",E=e=>{const t=f(e);return{[`${t}/`]:I,[`${t}/profile`]:$,[`${t}/login`]:P}},A=e=>{const t=location.hash===""?"#/":`${location.hash}`;return e==="history"?location.pathname:t},d=(e="history",t)=>{switch(e){case"history":{const o=f(e);history.pushState(null,null,`${o+t}`);break}case"hash":window.location.hash=`#${t}`;break}m(e)};let g=!1;const m=e=>{const t=document.getElementById("root"),o=E(e),n=A(e),s=f(e),r=i.loggedIn();if(!r&&n===`${s}/profile`)return d(e,"/login");if(r&&n===`${s}/login`)return d(e,"/");const a=o[n]||S;t.innerHTML=a(),g||(g=!0,t.addEventListener("click",l=>{const b=l.target.closest("a");b&&(l.preventDefault(),l.target.id==="logout"&&(i.logout(),d(e,"/login")),d(e,b.pathname))}),t.addEventListener("submit",l=>{l.preventDefault(),l.target.id==="login-form"&&(L(l.target.elements),d(e,"/profile")),l.target.id==="profile-form"&&O(l.target.elements)}))};window.addEventListener("popstate",()=>m("history"));window.addEventListener("hashchange",()=>m("hash"));export{m as r};
