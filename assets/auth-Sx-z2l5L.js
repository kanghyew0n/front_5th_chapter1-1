(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const n="user",p="/front_5th_chapter1-1";let d=null;const m=()=>{if(d)return d;const s={userInfo:JSON.parse(localStorage.getItem(n)),setUserInfo(e){const r=this.userInfo;if(!r)return this.userInfo=e,localStorage.setItem(n,JSON.stringify(e));const{username:l,email:t,bio:o}=e,a={...r,...r.username!==l&&{username:l},...r.email!==t&&{email:t},...r.bio!==o&&{bio:o}};this.userInfo=a,localStorage.setItem(n,JSON.stringify(a))},getUserInfo(){return this.userInfo},loggedIn(){return!!this.userInfo},logout(){this.userInfo=null,localStorage.removeItem(n)}};return d=s,s},i=m(),c=()=>{const s=i.loggedIn(),e=location.href.split("/").length,r=location.href.split("/")[e-1];return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a
            href="/"
            class="${r===""?"text-blue-600 font-bold":"text-gray-600"}"
            >홈</a
          >
        </li>
        ${s?`<li>
          <a
            href="/profile"
            class="${r==="profile"?"text-blue-600 font-bold":"text-gray-600"}"
            >프로필</a
          >
        </li>
        <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>`:`<li>
        <a href="/login" class="text-gray-600">로그인</a>
      </li>`}
      </ul>
    </nav>
  `},u=` <footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>`,f=({name:s,createdAt:e,message:r})=>`<div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">${s}</p>
                    <p class="text-sm text-gray-500">${e}</p>
                  </div>
                </div>
                <p>${r}</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>`,b=[{id:1,name:"김철수",createdAt:"15분 전",message:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:2,name:"이영희",createdAt:"30분 전",message:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:3,name:"박민수",createdAt:"1시간 전",message:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:4,name:"정수연",createdAt:"2시간 전",message:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],g=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${c()}
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
          ${b.map(s=>f(s)).join("")}
        </div>
      </main>
      ${u}
    </div>
  </div>
`,x=()=>{const{username:s="",email:e="",bio:r=""}=i.getUserInfo();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${c()}
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
                    value="${s}"
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
                    value="${e}"
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
${r}</textarea
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

          ${u}
        </div>
      </div>
    </div>
  `},h=()=>`
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
`,v=()=>`
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
`,y=s=>{const e=s.username.value;if(!e||!e.trim())return window.alert("이름을 입력해주세요.");i.setUserInfo({username:e,email:"",bio:""})},w=s=>{const e=s.username.value,r=s.email.value,l=s.bio.value;i.setUserInfo({username:e,email:r,bio:l})};export{p as B,v as E,h as L,g as M,x as P,w as a,y as h,i as u};
