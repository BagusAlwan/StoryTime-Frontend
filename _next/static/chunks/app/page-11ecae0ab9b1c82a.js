(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2518:(e,r,t)=>{"use strict";t.d(r,{J:()=>o});var s=t(4687),a=t(5924),n=t(9713),i=a.forwardRef((e,r)=>(0,s.jsx)(n.sG.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var l=t(5871);function o(e){let{className:r,...t}=e;return(0,s.jsx)(i,{"data-slot":"label",className:(0,l.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...t})}},3263:(e,r,t)=>{Promise.resolve().then(t.bind(t,8007))},3264:(e,r,t)=>{"use strict";t.d(r,{$:()=>o});var s=t(4687);t(5924);var a=t(7107),n=t(9700),i=t(5871);let l=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:r,variant:t,size:n,asChild:o=!1,...d}=e,c=o?a.DX:"button";return(0,s.jsx)(c,{"data-slot":"button",className:(0,i.cn)(l({variant:t,size:n,className:r})),...d})}},3436:(e,r,t)=>{"use strict";t.d(r,{p:()=>n});var s=t(4687);t(5924);var a=t(5871);function n(e){let{className:r,type:t,...n}=e;return(0,s.jsx)("input",{type:t,"data-slot":"input",className:(0,a.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...n})}},5871:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(4930),a=t(764);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},8007:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(4687),a=t(3264),n=t(5871),i=t(8594),l=t(3436),o=t(2518),d=t(8541);function c(e){let{className:r,...t}=e,c=(0,d.useRouter)(),u=e=>{e.preventDefault(),c.push("/homepage")};return(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col gap-6",r),...t,children:(0,s.jsxs)(i.Zp,{className:"p-8 w-full max-w-lg",children:[(0,s.jsxs)(i.aR,{children:[(0,s.jsx)(i.ZB,{className:"text-2xl",children:"Login"}),(0,s.jsx)(i.BT,{children:"Enter your email below to login to your account"})]}),(0,s.jsx)("div",{className:"mt-2"}),(0,s.jsx)(i.Wu,{children:(0,s.jsxs)("form",{className:"flex flex-col gap-6",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(o.J,{htmlFor:"email",children:"Email"}),(0,s.jsx)(l.p,{id:"email",type:"email",placeholder:"m@example.com",required:!0})]}),(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(o.J,{htmlFor:"password",children:"Password"}),(0,s.jsx)("a",{href:"#",className:"ml-auto text-sm underline-offset-4 hover:underline",children:"Forgot your password?"})]}),(0,s.jsx)(l.p,{id:"password",type:"password",required:!0})]}),(0,s.jsx)(a.$,{onClick:u,type:"button",className:"w-full",children:"Login"}),(0,s.jsx)(a.$,{onClick:u,type:"button",variant:"outline",className:"w-full",children:"Login with Google"})]})})]})})}function u(){let e=(0,d.useRouter)();return(0,s.jsxs)("main",{className:"min-h-screen bg-white",children:[(0,s.jsx)("nav",{className:"flex items-center justify-end border-b px-8 py-4",children:(0,s.jsx)(a.$,{onClick:()=>{e.push("/signup")},variant:"link",className:"text-sm hover:underline",children:"Sign up"})}),(0,s.jsxs)("div",{className:"flex mt-40",children:[(0,s.jsxs)("section",{className:"flex items-center justify-center p-8 pl-30",children:[(0,s.jsx)("div",{className:"mr-8 mb-6 h-90 w-90 border-2 border-dashed flex items-center justify-center ",children:(0,s.jsx)("span",{className:"text-gray-400",children:"Logo"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"mb-2 text-9xl font-bold",children:"Story"}),(0,s.jsx)("h1",{className:"mb-2 text-9xl font-bold",children:"Time"}),(0,s.jsx)("p",{className:"text-gray-600 text-2xl",children:"Time to make your own story"})]})]}),(0,s.jsx)("section",{className:"flex items-center justify-center p-8 pl-50",children:(0,s.jsx)(c,{})})]})]})}},8594:(e,r,t)=>{"use strict";t.d(r,{BT:()=>d,L8:()=>i,Wu:()=>c,ZB:()=>o,Zp:()=>n,aR:()=>l,wL:()=>u});var s=t(4687);t(5924);var a=t(5871);function n(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...t})}function i(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground rounded-xl border shadow-sm",r),...t})}function l(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("flex flex-col gap-1.5 px-6",r),...t})}function o(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",r),...t})}function d(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",r),...t})}function c(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",r),...t})}function u(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-footer",className:(0,a.cn)("flex items-center px-6",r),...t})}}},e=>{var r=r=>e(e.s=r);e.O(0,[279,238,908,358],()=>r(3263)),_N_E=e.O()}]);