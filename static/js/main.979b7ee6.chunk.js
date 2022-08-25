(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__3Nkn7",control:"ProfileForm_control__20_k6",action:"ProfileForm_action__2Dn3V"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__2H3Lv",logo:"MainNavigation_logo__3Pppl"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__1cY0f"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2d1Vi"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),a=(n(26),n(2)),s=n(1),l=n.n(s),j=n(11),u=n(0),d=l.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),b=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},h=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=b(t);return n<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(s.useState)(t),r=Object(j.a)(c,2),i=r[0],a=r[1],l=!!i,h=Object(s.useCallback)((function(){a(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(s.useEffect)((function(){n&&(o=setTimeout(h,n.duration))}),[n,h]);var O={token:i,isLoggedIn:l,login:function(e,t){a(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=b(t);o=setTimeout(h,n)},logout:h};return Object(u.jsx)(d.Provider,{value:O,children:e.children})},O=n(15),g=n.n(O),m=function(){var e=Object(s.useContext)(d),t=e.isLoggedIn;return Object(u.jsxs)("header",{className:g.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:g.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.logout,children:"Logout"})})]})})]})},x=function(e){return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)("main",{children:e.children})]})},f=n(12),p=n.n(f),v=function(){var e=Object(a.g)(),t=Object(s.useRef)(),n=Object(s.useContext)(d);return Object(u.jsxs)("form",{className:p.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAj9TFAmUSs3qxZVi7U6aTZdKPqMR5t8rI",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))},children:[Object(u.jsxs)("div",{className:p.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",ref:t})]}),Object(u.jsx)("div",{className:p.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},_=n(20),S=n.n(_),k=function(){return Object(u.jsxs)("section",{className:S.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(v,{})]})},w=n(9),T=n.n(w),I=function(){var e=Object(a.g)(),t=Object(s.useRef)(),n=Object(s.useRef)(),o=Object(s.useState)(!0),c=Object(j.a)(o,2),r=c[0],i=c[1],l=Object(s.useState)(!1),b=Object(j.a)(l,2),h=b[0],O=b[1],g="AIzaSyAj9TFAmUSs3qxZVi7U6aTZdKPqMR5t8rI",m=Object(s.useContext)(d);return Object(u.jsxs)("section",{className:T.a.auth,children:[Object(u.jsx)("h1",{children:r?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(o){o.preventDefault();var c,i=t.current.value,a=n.current.value;O(!0),c=r?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+g:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+g,fetch(c,{method:"POST",body:JSON.stringify({email:i,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return O(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication failed!";throw e.error.message&&(t=e.error.message),alert(t),new Error(t)}))})).then((function(t){var n=new Date((new Date).getTime()+1e3*+t.expiresIn);m.login(t.idToken,n.toISOString()),e.replace("/")})).catch((function(e){return alert(e.message)}))},children:[Object(u.jsxs)("div",{className:T.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:T.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(u.jsxs)("div",{className:T.a.actions,children:[!h&&Object(u.jsx)("button",{children:r?"Login":"Create Account"}),h&&Object(u.jsx)("p",{children:"Signing up..."}),Object(u.jsx)("button",{type:"button",className:T.a.toggle,onClick:function(){i((function(e){return!e}))},children:r?"Create new account":"Login with existing account"})]})]})]})},y=function(){return Object(u.jsx)(I,{})},N=n(21),P=n.n(N),C=function(){return Object(u.jsx)("section",{className:P.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},A=function(){return Object(u.jsx)(C,{})};var F=function(){var e=Object(s.useContext)(d);return Object(u.jsx)(x,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.b,{path:"/",exact:!0,children:Object(u.jsx)(A,{})}),!e.isLoggedIn&&Object(u.jsx)(a.b,{path:"/auth",children:Object(u.jsx)(y,{})}),e.isLoggedIn&&Object(u.jsx)(a.b,{path:"/profile",children:Object(u.jsx)(k,{})}),Object(u.jsx)(a.b,{path:"*",children:Object(u.jsx)(a.a,{to:"/"})})]})})};r.a.render(Object(u.jsx)(h,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__robhz",control:"AuthForm_control__1bT6a",actions:"AuthForm_actions__3jLyq",toggle:"AuthForm_toggle__25cQs"}}},[[36,1,2]]]);
//# sourceMappingURL=main.979b7ee6.chunk.js.map