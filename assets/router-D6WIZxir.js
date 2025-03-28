(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const d="user",h="/front_5th_chapter1-1";let c=null;const p=()=>{if(c)return c;const e={userInfo:JSON.parse(localStorage.getItem(d)),setUserInfo(t){const s=this.userInfo;if(!s)return this.userInfo=t,localStorage.setItem(d,JSON.stringify(t));const{username:n,email:o,bio:r}=t,l={...s,...s.username!==n&&{username:n},...s.email!==o&&{email:o},...s.bio!==r&&{bio:r}};this.userInfo=l,localStorage.setItem(d,JSON.stringify(l))},getUserInfo(){return this.userInfo},loggedIn(){return!!this.userInfo},logout(){this.userInfo=null,localStorage.removeItem(d)}};return c=e,e},a=p(),g=()=>{const e=a.loggedIn(),t=location.href.split("/").length,s=location.href.split("/")[t-1];return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a
            href="/"
            class="${s===""?"text-blue-600 font-bold":"text-gray-600"}"
            >홈</a
          >
        </li>
        ${e?`<li>
          <a
            href="/profile"
            class="${s==="profile"?"text-blue-600 font-bold":"text-gray-600"}"
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
</footer>`,x=({name:e,createdAt:t,message:s})=>`<div class="bg-white rounded-lg shadow p-4">
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
                <p>${s}</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>`,v=[{id:1,name:"김철수",createdAt:"15분 전",message:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:2,name:"이영희",createdAt:"30분 전",message:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:3,name:"박민수",createdAt:"1시간 전",message:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:4,name:"정수연",createdAt:"2시간 전",message:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],y=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
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
          ${v.map(e=>x(e)).join("")}
        </div>
      </main>
      ${b}
    </div>
  </div>
`,w=()=>{const{username:e="",email:t="",bio:s=""}=a.getUserInfo();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${g()}
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
${s}</textarea
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
  `},I=()=>`
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
`,$=()=>`
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
`,u=e=>e==="history"?h:"#",P=e=>{const t=u(e);return{[`${t}/`]:y,[`${t}/profile`]:w,[`${t}/login`]:I}},S=e=>{const t=location.hash===""?"#/":`${location.hash}`;return e==="history"?location.pathname:t},L=e=>{const t=e.username.value;if(!t||!t.trim())return window.alert("이름을 입력해주세요.");a.setUserInfo({username:t,email:"",bio:""})},E=e=>{const t=e.username.value,s=e.email.value,n=e.bio.value;a.setUserInfo({username:t,email:s,bio:n}),alert("프로필이 업데이트 되었어요!")},O=e=>{const t=document.getElementById("root");t.addEventListener("click",s=>{const n=s.target.closest("a");if(n){if(s.preventDefault(),s.target.id==="logout")return a.logout(),i(e,"/login");i(e,n.pathname)}}),t.addEventListener("submit",s=>{s.preventDefault(),s.target.id==="login-form"&&(L(s.target.elements),i(e,"/profile")),s.target.id==="profile-form"&&E(s.target.elements)})},i=(e="history",t)=>{switch(console.log("renderWithNavigation",e),e){case"hash":console.log("here2",t),window.location.hash=`#${t}`;break;case"history":{console.log("here");const s=u(e);history.pushState(null,null,`${s+t}`);break}}f(e)};let m=!1;const f=e=>{const t=document.getElementById("root"),s=P(e),n=S(e),o=u(e),r=a.loggedIn();if(!r&&n===`${o}/profile`)return i(e,"/login");if(r&&n===`${o}/login`)return i(e,"/");const l=s[n]||$;t.innerHTML=l(),m||(m=!0,O(e))};window.addEventListener("popstate",()=>f("history"));window.addEventListener("hashchange",()=>f("hash"));export{f as r};
