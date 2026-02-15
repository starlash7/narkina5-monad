import{d9 as i,d4 as e,ds as s}from"./index-Bm0KWzWf.js";import{c as n}from"./copy-Bx2Jwc5_-CWlO5Ssg.js";const p=({style:o,color:r,...t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:r||"currentColor",style:{height:"1.5rem",width:"1.5rem",...o},...t,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),x=o=>{let[r,t]=i.useState(!1);return e.jsxs(l,{color:o.color,onClick:()=>{t(!0),navigator.clipboard.writeText(o.text),setTimeout((()=>t(!1)),1500)},$justCopied:r,children:[r?e.jsx(p,{style:{height:"14px",width:"14px"},strokeWidth:"2"}):e.jsx(n,{style:{height:"14px",width:"14px"}}),r?"Copied":"Copy"," ",o.itemName?o.itemName:"to Clipboard"]})};let l=s.button`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${o=>o.$justCopied?"var(--privy-color-foreground)":o.color||"var(--privy-color-foreground-3)"};
    font-weight: ${o=>o.$justCopied?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${o=>o.$justCopied?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;export{x as p};
