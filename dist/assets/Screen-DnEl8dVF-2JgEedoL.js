import{d4 as r,ds as n,dY as t,dZ as b}from"./index-Bm0KWzWf.js";import{T as m,b as y}from"./ModalHeader-CvLNEZ0F-D88quIaP.js";import{t as w}from"./index-Dq_xe9dz-D-RB6vby.js";const j=n.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,k=n.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,E=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,F=n(m)`
  margin: 0 -8px;
`,S=n.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:e})=>e==="light"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":e==="dark"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`;let z=n.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,C=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=n.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,B=n.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,d=n.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,R=n.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,V=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;const o=({children:e,...i})=>r.jsx(j,{children:r.jsx(k,{...i,children:e})});let A=n.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,H=n(y)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,T=n.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,W=({step:e})=>e?r.jsx(A,{children:r.jsx(T,{pct:Math.min(100,e.current/e.total*100)})}):null;o.Header=({title:e,subtitle:i,icon:a,iconVariant:c,iconLoadingStatus:p,showBack:g,onBack:h,showInfo:v,onInfo:x,showClose:l,onClose:u,step:s,...f})=>r.jsxs(E,{...f,children:[r.jsx(F,{backFn:g?h:void 0,infoFn:v?x:void 0,onClose:l?u:void 0,closeable:l}),(a||c||e||i)&&r.jsxs(z,{children:[a||c?r.jsx(o.Icon,{icon:a,variant:c,loadingStatus:p}):null,!(!e&&!i)&&r.jsxs(C,{children:[e&&r.jsx(I,{children:e}),i&&r.jsx(B,{children:i})]})]}),s&&r.jsx(W,{step:s})]}),(o.Body=t.forwardRef((({children:e,...i},a)=>r.jsx(S,{ref:a,...i,children:e})))).displayName="Screen.Body",o.Footer=({children:e,...i})=>r.jsx($,{id:"privy-content-footer-container",...i,children:e}),o.Actions=({children:e,...i})=>r.jsx(G,{...i,children:e}),o.HelpText=({children:e,...i})=>r.jsx(L,{...i,children:e}),o.Watermark=()=>r.jsx(H,{}),o.Icon=({icon:e,variant:i="subtle",loadingStatus:a})=>i==="logo"&&e?r.jsx(R,typeof e=="string"?{children:r.jsx("img",{src:e,alt:""})}:t.isValidElement(e)?{children:e}:{children:t.createElement(e)}):i==="loading"?e?r.jsx(V,{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(b,{success:a?.success,fail:a?.fail}),typeof e=="string"?r.jsx("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):t.isValidElement(e)?t.cloneElement(e,{style:{width:"38px",height:"38px"}}):t.createElement(e,{style:{width:"38px",height:"38px"}})]})}):r.jsx(d,{$variant:i,children:r.jsx(w,{size:"64px"})}):r.jsx(d,{$variant:i,children:e&&(typeof e=="string"?r.jsx("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):t.isValidElement(e)?e:t.createElement(e,{width:32,height:32,stroke:(()=>{switch(i){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let G=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,L=n.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    line-height: 22px;

    & a {
      color: var(--privy-color-accent);
    }
  }
`;export{o as w};
