import{r as o,P as g,f as O,L,E as T,u as F,a as H,b as B,Q as R,j as s,C as y,c as q,d as k,F as C,e as D,s as v,D as w,g as M,h as V}from"./index-gHgoKW0G.js";const $="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.12531%206.00001H8.45865V4.00001H10.4586V2.66667H8.45865V0.666672H7.12531V2.66667H5.12532V4.00001H7.12531V6.00001ZM4.45865%2012C3.72532%2012%203.13198%2012.6%203.13198%2013.3333C3.13198%2014.0667%203.72532%2014.6667%204.45865%2014.6667C5.19198%2014.6667%205.79198%2014.0667%205.79198%2013.3333C5.79198%2012.6%205.19198%2012%204.45865%2012ZM11.1253%2012C10.392%2012%209.79865%2012.6%209.79865%2013.3333C9.79865%2014.0667%2010.392%2014.6667%2011.1253%2014.6667C11.8586%2014.6667%2012.4586%2014.0667%2012.4586%2013.3333C12.4586%2012.6%2011.8586%2012%2011.1253%2012ZM4.57198%209.83334L4.59198%209.75334L5.19198%208.66667H10.1586C10.6586%208.66667%2011.0986%208.39334%2011.3253%207.98001L13.8986%203.30667L12.7386%202.66667H12.732L11.9986%204.00001L10.1586%207.33334H5.47865L5.39198%207.15334L3.89865%204.00001L3.26532%202.66667L2.63865%201.33334H0.458649V2.66667H1.79198L4.19198%207.72667L3.29198%209.36001C3.18532%209.54667%203.12532%209.76667%203.12532%2010C3.12532%2010.7333%203.72532%2011.3333%204.45865%2011.3333H12.4586V10H4.73865C4.65198%2010%204.57198%209.92667%204.57198%209.83334Z'%20fill='white'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23d1d1d1'%20d='M80%20160c0-35.3%2028.7-64%2064-64h32c35.3%200%2064%2028.7%2064%2064v3.6c0%2021.8-11.1%2042.1-29.4%2053.8l-42.2%2027.1c-25.2%2016.2-40.4%2044.1-40.4%2074V320c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32v-1.4c0-8.2%204.2-15.8%2011-20.2l42.2-27.1c36.6-23.6%2058.8-64.1%2058.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3%2032%2016%2089.3%2016%20160c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32zm80%20320a40%2040%200%201%200%200-80%2040%2040%200%201%200%200%2080z'/%3e%3c/svg%3e",Q=t=>{const[n,e]=o.useState(!1),[r,c]=o.useState(!1);return{fetch:async(...i)=>{try{return e(!0),c(!1),await t(...i)}catch{c(!0)}finally{e(!1)}},loading:n,error:r}},z=({targetRef:t,runOnObserverTargetAppear:n,options:e})=>{const r=a=>{a[0].isIntersecting&&n()},c=new IntersectionObserver(r,{...e,threshold:1});o.useEffect(()=>{if(t.current)return c.observe(t.current),()=>{t.current&&c.unobserve(t.current)}},[t,n])},W=({fetch:t})=>({getStackedProducts:async({products:e,filtering:r,isLastPage:c,page:a})=>{if(c||!e.length)return;const i=a?a+g.plus:g.second,u=await t({filtering:r,page:i});if(u!==void 0)return{isLast:u.isLast,newProducts:[...e,...u.products],newPage:i}}}),G=({fetch:t})=>({getFilteredProducts:async e=>{const r=await t({filtering:e});if(r!==void 0)return{isLast:r.isLast,newProducts:r.products,newPage:g.first}}}),Z=({filtering:t,page:n})=>{const e=new URLSearchParams;return t.category!==""&&e.append("category",t.category),e.append("sort",t.sort),e.append("page",String(n)),n!==0&&e.append("size",L.toString()),e};async function Y(t){const n="?"+Z({...t,page:t.page??0}).toString(),r=await(await O({url:T.products+n,method:"GET"})).json();return{products:r.content,isLast:r.last}}const K=()=>{const t=F();return H({mutationFn:B,onSuccess:()=>{t.invalidateQueries({queryKey:[R.cartList]})},onError:(n,e)=>{console.error(`${e.productId}에 대한 장바구니 담기 요청 실패: ${n.message}`)}})},J=({targetRef:t,runOnObserverTargetAppear:n,children:e})=>(z({targetRef:t,runOnObserverTargetAppear:n}),s.jsx("div",{children:e})),X="_cartAddButton_zn1nu_1",tt="_icon_zn1nu_17",st={cartAddButton:X,icon:tt},et=({productId:t})=>{const{mutateAsync:n,error:e,isPending:r}=K(),c=`cart-action-button ${st.cartAddButton} `,a=()=>{n({productId:t})};return s.jsxs(s.Fragment,{children:[s.jsxs("button",{onClick:a,className:c,disabled:r,children:[s.jsx("img",{src:$,alt:"상품 장바구니 담기"}),s.jsx("span",{className:"button__text",children:"담기"})]}),s.jsx(y,{error:e})]})},nt="_cartActionButton_iq246_1",rt="_add_iq246_9",ct="_quantity_iq246_15",p={cartActionButton:nt,add:rt,quantity:ct},at=({productId:t})=>{const{cartListMap:n,error:e}=q(),r=n==null?void 0:n.get(t),c=`${p.cartActionButton} ${r?p.quantity:p.add} `;return s.jsxs("div",{className:c,children:[r?s.jsx(k,{cartItemId:r.id,quantity:r.quantity}):s.jsx(et,{productId:t}),s.jsx(y,{error:e})]})},ot="_contents_i861m_1",it="_iconWrapper_i861m_13",dt="_icon_i861m_13",ut="_message_i861m_33",l={contents:ot,iconWrapper:it,icon:dt,message:ut},lt=()=>s.jsx("li",{className:"product-card",children:s.jsxs("div",{className:l.contents,children:[s.jsx("div",{className:`product-card__image ${l.iconWrapper}`,children:s.jsx("img",{className:l.icon,src:U,alt:"알 수 없는 상품"})}),s.jsx("p",{className:l.message,children:"상품 정보가 없어요."})]})}),gt=({product:t})=>t.imageUrl==="string"?s.jsx(lt,{}):s.jsxs("li",{className:"product-card",children:[s.jsx("img",{src:t.imageUrl,alt:"",className:"product-card__image"}),s.jsxs("div",{className:"product-card__contents",children:[s.jsx("p",{className:"product-name",children:t.name}),s.jsxs("p",{className:"text",children:[t.price.toLocaleString(),"원"]}),s.jsx(at,{productId:t.id})]})]});function mt({products:t,children:n,loading:e}){const r=o.useRef(null),c=()=>{var a;t.length<=C&&((a=r.current)==null||a.scrollTo({top:0}))};return o.useEffect(()=>{c()},[r,t]),s.jsxs("section",{ref:r,className:"product-list-wrapper",children:[s.jsxs("ul",{className:"product-list",children:[t.map(a=>s.jsx(gt,{product:a},a.id)),n]}),e&&t.length>=C&&s.jsx(D,{productsLength:L})]})}function pt(){const[t,n]=o.useState([]),[e,r]=o.useState(g.first),[c,a]=o.useState(!1),[i,u]=o.useState({category:"",sort:"price,asc"}),f=o.useRef(null),{fetch:_,loading:S,error:x}=Q(Y),{getStackedProducts:N}=W({fetch:_}),{getFilteredProducts:A}=G({fetch:_}),P=({isLast:d,newProducts:m,newPage:h})=>{a(d),n(m),r(h)},I=o.useCallback(async()=>{const d=await N({page:e,isLastPage:c,products:t,filtering:i});d&&P(d)},[e,t,c,i]),b=async()=>{const d=await A(i);d&&P(d)},j=d=>{const{name:m,value:h}=d.target;u(E=>({...E,[m]:h}))};return o.useEffect(()=>{b()},[i]),o.useEffect(()=>{if(x)throw new Error("예기치 못한 에러 발생")},[x]),s.jsxs("div",{children:[s.jsx("h1",{className:"page__title",children:"bpple 상품 목록"}),s.jsxs("div",{className:v.dropdownGroup,children:[s.jsx(w,{label:"카테고리",name:"category",options:M,onChange:j}),s.jsx(w,{label:"가격순",name:"sort",options:V,onChange:j})]}),s.jsx(mt,{products:t,loading:S,children:s.jsx(J,{targetRef:f,runOnObserverTargetAppear:I,children:s.jsx("div",{className:v.observerTarget,ref:f,children:s.jsx("span",{children:"observer target"})})})})]})}export{pt as default};
