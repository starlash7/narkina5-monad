import{d4 as t,dA as A,d7 as M,d5 as N,d9 as o,fg as k,dG as b,er as E,es as C,dw as I,ds as u,bX as O,cb as z,fh as P}from"./index-Bm0KWzWf.js";import{p as $}from"./CopyToClipboard-BGTSFnT3-LSkCA343.js";import{a as q}from"./Layouts-BlFm53ED-BJ55eBum.js";import{a as F,i as V}from"./JsonTree-aPaJmPx7-D-I-5w8f.js";import{n as H}from"./ScreenLayout-kyRBwF5n-B_SQDi_n.js";import{c as J}from"./createLucideIcon-BKt5Q_gI.js";import"./copy-Bx2Jwc5_-CWlO5Ssg.js";import"./ModalHeader-CvLNEZ0F-D88quIaP.js";import"./Screen-DnEl8dVF-2JgEedoL.js";import"./index-Dq_xe9dz-D-RB6vby.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],K=J("square-pen",G),Q=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let W=e=>{if(!O(e))return e;try{let a=z(e);return a.includes("�")?e:a}catch{return e}},X=e=>{try{let a=P.decode(e),s=new TextDecoder().decode(a);return s.includes("�")?e:s}catch{return e}},B=e=>{let{types:a,primaryType:s,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx($,{text:(i=e.typedData,JSON.stringify(i,null,2)),itemName:"full payload to clipboard"})," "]});var i};const Y=({method:e,messageData:a,copy:s,iconUrl:l,isLoading:i,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(H,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:K,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:i||g||m,loading:i},secondaryCta:d?{label:"Not now",onClick:y,disabled:i||g||m}:void 0,watermark:!0,children:t.jsxs(q,{children:[l?t.jsx(Q,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(w,{children:W(a)}),e==="eth_signTypedData_v4"&&t.jsx(B,{typedData:a}),e==="solana_signMessage"&&t.jsx(w,{children:X(a)})]})]})}),ue={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:a,closePrivyModal:s}=M(),{navigate:l,data:i,onUserCloseViaDialogOrKeybindRef:g}=N(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,T]=o.useState(null),[R,S]=o.useState(!1);o.useEffect((()=>{e||l("LandingScreen")}),[e]),o.useEffect((()=>{a(k).then((n=>{x(!1),n||(c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:_,data:v,confirmAndSign:j,onSuccess:D,onFailure:L,uiOptions:r}=i.signMessage,U={title:r?.title||"Sign message",description:r?.description||"Signing this message will not cost you any fees.",buttonText:r?.buttonText||"Sign and continue"},h=n=>{n?D(n):L(y||new b(new E("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{T(null),c(""),p(void 0)}),200)};return g.current=()=>{h(f)},t.jsx(Y,{method:_,messageData:v,copy:U,iconUrl:r?.iconUrl&&typeof r.iconUrl=="string"?r.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:r?.isCancellable,onSign:async()=>{S(!0),c("");try{let n=await j();T(n),S(!1),setTimeout((()=>{h(n)}),I)}catch(n){console.error(n),c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=u(F)`
  margin-top: 0;
`,w=u(V)`
  margin-top: 0;
`;export{ue as SignRequestScreen,Y as SignRequestView,ue as default};
