(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{1468:(e,t,r)=>{Promise.resolve().then(r.bind(r,7440))},3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var s=r(2596),a=r(9688);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},7168:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r(5155);r(2115);var a=r(9708),i=r(2085),n=r(3999);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:t,variant:r,size:i,asChild:o=!1,...d}=e,c=o?a.DX:"button";return(0,s.jsx)(c,{"data-slot":"button",className:(0,n.cn)(l({variant:r,size:i,className:t})),...d})}},7440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var s=r(5155),a=r(7168),i=r(2115),n=r(9852),l=r(8482),o=r(8975),d=r(3999);let c=(0,r(2085).F)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.createContext({size:"default",variant:"default"});function x(e){let{className:t,variant:r,size:a,children:i,...n}=e;return(0,s.jsx)(o.bL,{"data-slot":"toggle-group","data-variant":r,"data-size":a,className:(0,d.cn)("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",t),...n,children:(0,s.jsx)(u.Provider,{value:{variant:r,size:a},children:i})})}function h(e){let{className:t,children:r,variant:a,size:n,...l}=e,x=i.useContext(u);return(0,s.jsx)(o.q7,{"data-slot":"toggle-group-item","data-variant":x.variant||a,"data-size":x.size||n,className:(0,d.cn)(c({variant:x.variant||a,size:x.size||n}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",t),...l,children:r})}var m=r(8130);let v=[{id:1,title:"The Dragon Story",genre:"Fantasy",wordCount:123e3,chapters:3,author:"John Doe",coverImage:"/placeholder-story.jpg"},{id:2,title:"The Lost Kingdom",genre:"Adventure",wordCount:98e3,chapters:5,author:"Jane Smith",coverImage:"/placeholder-story2.jpg"},{id:3,title:"Cybernetic Dawn",genre:"Sci-Fi",wordCount:15e4,chapters:7,author:"Mark Lee",coverImage:"/placeholder-story3.jpg"}],g=[{id:1,name:"John Doe",bio:"Fantasy writer and world-builder, creating epic tales.",profileImage:"/placeholder-author.jpg"},{id:2,name:"Jane Smith",bio:"Adventure enthusiast, weaving thrilling narratives.",profileImage:"/placeholder-author2.jpg"},{id:3,name:"Mark Lee",bio:"Sci-fi expert, crafting futuristic and cyberpunk worlds.",profileImage:"/placeholder-author3.jpg"}];function f(){let[e,t]=(0,i.useState)("stories");return(0,s.jsxs)("main",{className:"min-h-screen px-6 py-4",children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between pb-4",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mr-5",children:"Explore •"}),(0,s.jsxs)(x,{type:"single",value:e,onValueChange:e=>t(e),children:[(0,s.jsx)(h,{value:"stories",children:"Stories"}),(0,s.jsx)(h,{value:"authors",children:"Authors"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(n.p,{placeholder:"Search",className:"w-64"}),(0,s.jsx)(a.$,{variant:"outline",size:"icon",children:(0,s.jsx)(m.A,{size:20})})]})]}),(0,s.jsx)("section",{className:"mt-6",children:"stories"===e?(0,s.jsx)(p,{}):(0,s.jsx)(b,{})})]})}function p(){return(0,s.jsx)("div",{className:"grid gap-6",children:v.map(e=>(0,s.jsxs)(l.L8,{className:"p-6 flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex-1 pr-4",children:[(0,s.jsx)("p",{className:"text-m text-gray-500",children:e.genre}),(0,s.jsx)("h2",{className:"text-xl font-semibold",children:e.title}),(0,s.jsxs)("p",{className:"text-m text-gray-500",children:[e.wordCount.toLocaleString()," words - ",e.chapters," Chapters"]}),(0,s.jsxs)("p",{className:"text-m text-gray-700",children:["by ",e.author]}),(0,s.jsx)(a.$,{className:"mt-2",children:"Read Now"})]}),(0,s.jsx)("div",{className:"w-128 h-58 flex-shrink-0 bg-gray-300 rounded-lg overflow-hidden",children:(0,s.jsx)("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover"})})]},e.id))})}function b(){return(0,s.jsx)("div",{className:"grid gap-6",children:g.map(e=>(0,s.jsxs)(l.L8,{className:"p-4 flex items-center justify-between gap-4",children:[(0,s.jsx)("div",{className:"w-40 h-40 bg-gray-300 rounded-full overflow-hidden",children:(0,s.jsx)("img",{src:e.profileImage,alt:e.name,className:"w-full h-full object-cover"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-m text-gray-500",children:e.bio})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(a.$,{size:"lg",className:"w-40",children:"Follow"}),(0,s.jsx)(a.$,{variant:"outline",size:"lg",className:"w-40",children:"Search"})]})]},e.id))})}var j=r(7969);function w(){return(0,s.jsxs)("main",{className:"min-h-screen bg-white",children:[(0,s.jsx)(j.F,{}),(0,s.jsxs)("div",{className:"flex-col p-10 mt-5 ml-5 mr-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-10",children:[(0,s.jsxs)("div",{className:"flex-col",children:[(0,s.jsx)("div",{className:"text-9xl font-bold",children:"Welcome"}),(0,s.jsx)("div",{className:"text-xl font-bold p-4 ml-3",children:"would you like to start your story?"})]}),(0,s.jsx)(a.$,{className:"text-xl",children:"Start a Book"})]}),(0,s.jsx)("div",{className:"h-px bg-gray-300 w-full my-4"}),(0,s.jsx)("div",{className:"text-black",children:(0,s.jsx)(f,{})})]})]})}},7969:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});var s=r(5155),a=r(5695),i=r(7168);function n(){let e=(0,a.useRouter)();return(0,s.jsxs)("nav",{className:"flex items-center justify-between border-b px-8 py-4 bg-white",children:[(0,s.jsx)("div",{className:"text-xl font-bold",children:"StoryTime"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.$,{onClick:()=>e.push("/homepage"),variant:"link",className:"text-sm hover:underline",children:"Home"}),(0,s.jsx)(i.$,{onClick:()=>e.push("/profile"),variant:"link",className:"text-sm hover:underline",children:"Profile"})]})]})}},8482:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,L8:()=>n,Wu:()=>c,ZB:()=>o,Zp:()=>i,aR:()=>l,wL:()=>u});var s=r(5155);r(2115);var a=r(3999);function i(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...r})}function n(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground rounded-xl border shadow-sm",t),...r})}function l(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("flex flex-col gap-1.5 px-6",t),...r})}function o(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",t),...r})}function d(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",t),...r})}function c(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",t),...r})}function u(e){let{className:t,...r}=e;return(0,s.jsx)("div",{"data-slot":"card-footer",className:(0,a.cn)("flex items-center px-6",t),...r})}},9852:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(5155);r(2115);var a=r(3999);function i(e){let{className:t,type:r,...i}=e;return(0,s.jsx)("input",{type:r,"data-slot":"input",className:(0,a.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...i})}}},e=>{var t=t=>e(e.s=t);e.O(0,[955,828,441,684,358],()=>t(1468)),_N_E=e.O()}]);