import{d9 as p,d4 as e,dg as d,ds as t}from"./index-Bm0KWzWf.js";import{$ as m}from"./ModalHeader-CvLNEZ0F-D88quIaP.js";import{C as x}from"./check-Cvp3OMOM.js";import{C as f}from"./copy-w9RN3N9V.js";const v=({address:r,showCopyIcon:i,url:n,className:a})=>{let[o,l]=p.useState(!1);function c(s){s.stopPropagation(),navigator.clipboard.writeText(r).then((()=>l(!0))).catch(console.error)}return p.useEffect((()=>{if(o){let s=setTimeout((()=>l(!1)),3e3);return()=>clearTimeout(s)}}),[o]),e.jsxs(h,n?{children:[e.jsx(j,{title:r,className:a,href:`${n}/address/${r}`,target:"_blank",children:d(r)}),i&&e.jsx(m,{onClick:c,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(g,{title:r,className:a,children:d(r)}),i&&e.jsx(m,{onClick:c,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,g=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,j=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{v as d};
