(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c="user",n="/front_5th_chapter1-1";let u=null;const g=()=>{if(u)return u;const t={userInfo:JSON.parse(localStorage.getItem(c)),setUserInfo(s){const o=this.userInfo;if(!o)return this.userInfo=s,localStorage.setItem(c,JSON.stringify(s));const{username:l,email:e,bio:r}=s,a={...o,...o.username!==l&&{username:l},...o.email!==e&&{email:e},...o.bio!==r&&{bio:r}};this.userInfo=a,localStorage.setItem(c,JSON.stringify(a))},getUserInfo(){return this.userInfo},loggedIn(){return!!this.userInfo},logout(){this.userInfo=null,localStorage.removeItem(c)}};return u=t,t},i=g(),f=()=>{const t=i.loggedIn(),s=location.href.split("/").length,o=location.href.split("/")[s-1];return`
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
        ${t?`<li>
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
  `},b=` <footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>`,p=({name:t,createdAt:s,message:o})=>`<div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">${t}</p>
                    <p class="text-sm text-gray-500">${s}</p>
                  </div>
                </div>
                <p>${o}</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>`,h=[{id:1,name:"김철수",createdAt:"15분 전",message:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:2,name:"이영희",createdAt:"30분 전",message:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:3,name:"박민수",createdAt:"1시간 전",message:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:4,name:"정수연",createdAt:"2시간 전",message:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],x=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}
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
          ${h.map(t=>p(t)).join("")}
        </div>
      </main>
      ${b}
    </div>
  </div>
`,v=()=>{const{username:t="",email:s="",bio:o=""}=i.getUserInfo();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${f()}
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
                    value="${t}"
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
                    value="${s}"
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

          ${b}
        </div>
      </div>
    </div>
  `},y=()=>`
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
`,w=()=>`
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
`,I={[`${n}/`]:x,[`${n}/profile`]:v,[`${n}/login`]:y},d=t=>{history.pushState(null,null,t),m()},$=t=>{const s=t.username.value;if(!s||!s.trim())return window.alert("이름을 입력해주세요.");i.setUserInfo({username:s,email:"",bio:""}),d(`${n}/profile`)},S=t=>{const s=t.username.value,o=t.email.value,l=t.bio.value;i.setUserInfo({username:s,email:o,bio:l}),alert("프로필이 업데이트 되었어요!")},m=()=>{const t=document.getElementById("root"),s=location.pathname,o=i.loggedIn();if(!o&&s===`${n}/profile`)return d(`${n}/login`);if(o&&s===`${n}/login`)return d(`${n}/`);const l=I[s]||w;t.innerHTML=l(),t.addEventListener("click",e=>{const r=e.target.closest("a");r&&(e.preventDefault(),e.target.id==="logout"&&(i.logout(),d("/login")),d(`${n+r.pathname}`))},{once:!0}),t.addEventListener("submit",e=>{e.preventDefault(),e.target.id==="login-form"&&$(e.target.elements),e.target.id==="profile-form"&&S(e.target.elements)},{once:!0})};window.addEventListener("popstate",()=>m());const P=()=>{m()};P();
