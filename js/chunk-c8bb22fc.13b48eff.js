(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8bb22fc"],{"0a71":function(t,s,e){},"0d1c":function(t,s,e){"use strict";e("0a71")},"0dab":function(t,s,e){t.exports=e.p+"img/like.51bee4e3.svg"},1770:function(t,s,e){},"186a":function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"adminSidbar"},[s("div",{staticClass:"nav__brand"},[s("router-link",{attrs:{to:"/login"}},[s("img",{attrs:{src:e("1ae4"),alt:""}})])],1),s("div",{staticClass:"nav__list"},[s("div",{staticClass:"nav__row"},[s("div",{staticClass:"row__icon"},[t.isTweetsView?s("img",{attrs:{src:e("f340"),alt:""}}):s("img",{attrs:{src:e("e3e6"),alt:""}})]),s("div",{staticClass:"row__title"},[s("router-link",{attrs:{to:"/admin/post"}},[s("p",{class:{active:t.isTweetsView}},[t._v("推文清單")])])],1)]),s("div",{staticClass:"nav__row"},[s("div",{staticClass:"row__icon"},[t.isUsersView?s("img",{attrs:{src:e("f05f"),alt:""}}):s("img",{attrs:{src:e("2efd"),alt:""}})]),s("div",{staticClass:"row__title"},[s("router-link",{attrs:{to:"/admin/users"}},[s("p",{class:{active:t.isUsersView}},[t._v("使用者列表")])])],1)])]),s("div",{staticClass:"nav__row",attrs:{id:"signOut"}},[t._m(0),s("button",{staticClass:"row__title",attrs:{type:"button"},on:{click:t.logout}},[t._v("登出")])])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"row__icon out__icon"},[s("img",{attrs:{src:e("bb87"),alt:""}})])}],n={name:"AdminSidbar",data(){return{isTweetsView:!1,isUsersView:!1}},created(){const t=this.$route.path.split("/")[2];this.setCurrentLocation(t)},methods:{setCurrentLocation(t){"post"===t?(this.isTweetsView=!0,this.isUsersView=!1):(this.isTweetsView=!1,this.isUsersView=!0)},logout(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}}},r=n,o=(e("cbed"),e("2877")),c=Object(o["a"])(r,i,a,!1,null,"72921720",null);s["a"]=c.exports},2375:function(t,s,e){"use strict";var i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],n=(e("8f4f"),e("2877")),r={},o=Object(n["a"])(r,i,a,!1,null,"6d27b3b3",null);s["a"]=o.exports},"2efd":function(t,s,e){t.exports=e.p+"img/profile.859481f6.svg"},"3fbb":function(t,s,e){},"5f52":function(t,s,e){t.exports=e.p+"img/reply.317742d6.svg"},6135:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"adminUsers"},[s("AdminSidbar"),s("div",{staticClass:"main"},[t._m(0),t.isLoading?s("Spinner"):[s("div",{staticClass:"main__body"},t._l(t.users,(function(t){return s("AdminUserCard",{key:t.id,attrs:{"user-info":t}})})),1)]],2)],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"main__title"},[s("h1",[t._v("使用者列表")])])}],n=(e("d9e2"),e("186a")),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"user__background"},[s("img",{attrs:{src:t.user.front_cover,alt:""}})]),s("div",{staticClass:"card__avatar"},[s("img",{attrs:{src:t.user.avatar,alt:""}})]),s("div",{staticClass:"card__body"},[s("div",{staticClass:"card__title"},[t._v(t._s(t._f("nameLengthFilter")(t.user.name)))]),s("p",{staticClass:"card__text"},[t._v("@"+t._s(t.user.account))]),s("div",{staticClass:"click__panel"},[s("div",{staticClass:"click__icon"},[s("img",{attrs:{src:e("5f52"),alt:""}}),t._v(t._s(t._f("changeCount")(t.user.tweetsCount))+" ")]),s("div",{staticClass:"click__icon"},[s("img",{attrs:{src:e("0dab"),alt:""}}),t._v(t._s(t._f("changeCount")(t.user.likedTweetsCount))+" ")])]),s("div",{staticClass:"follow__panel"},[s("div",{staticClass:"follow__count"},[s("span",[t._v(t._s(t._f("changeFollow")(t.user.followingsCount))+" ")]),t._v("跟隨中 ")]),s("div",{staticClass:"follow__count"},[s("span",[t._v(t._s(t._f("changeFollow")(t.user.followersCount))+" ")]),t._v("跟隨者 ")])])])])])},o=[],c={name:"AdminUserCard",props:{userInfo:{type:Object,required:!0}},data(){return{user:{id:-1,name:"",avatar:"",account:"",front_cover:"",tweetsCount:1,likedTweetsCount:0,followingsCount:0,followersCount:0}}},methods:{fetchUser(){const{id:t,name:s,avatar:e,account:i,tweetsCount:a,likedTweetsCount:n,followingsCount:r,followersCount:o,front_cover:c}=this.userInfo;this.user={...this.user,id:t,name:s,front_cover:c||"https://imgur.com/GGeK2iP.png",avatar:e||"https://imgur.com/2ajTlIb.png",account:i,tweetsCount:a,likedTweetsCount:n,followingsCount:r,followersCount:o}}},created(){this.fetchUser()},filters:{changeCount(t){return t>=1e6?Math.round(t/1e5)/10+"M":t>=1e3?Math.round(t/100)/10+"K":t},changeFollow(t){return t>=1e5?Math.round(t/1e4).toLocaleString()+" W":t.toLocaleString()},nameLengthFilter(t){return t.length>16?t.slice(0,16)+"...":t}}},l=c,u=(e("0d1c"),e("2877")),d=Object(u["a"])(l,r,o,!1,null,"a569f70a",null),_=d.exports,f=e("be6c"),v=e("2fa3"),g=e("2375"),w={name:"AdminUsers",components:{AdminSidbar:n["a"],AdminUserCard:_,Spinner:g["a"]},data(){return{users:{},isLoading:!0}},methods:{async fetchUsers(){try{this.isLoading=!0;const{data:t}=await f["a"].getUsers();if("error"===t.statu)throw new Error(t.message);this.users=t,this.isLoading=!1}catch(t){this.isLoading=!1,v["c"].fire({icon:"warning",title:t.response.data.message})}}},created(){this.fetchUsers()}},m=w,h=(e("81f9"),Object(u["a"])(m,i,a,!1,null,"214c4a3a",null));s["default"]=h.exports},"81f9":function(t,s,e){"use strict";e("3fbb")},"8ba4":function(t,s,e){},"8f4f":function(t,s,e){"use strict";e("1770")},bb87:function(t,s,e){t.exports=e.p+"img/Vectoroutlog.989fb49b.svg"},be6c:function(t,s,e){"use strict";var i=e("2fa3");s["a"]={getTweets(){return i["d"].get("/tweets")},getUsers(){return i["d"].get("/admin/users")},deleteTweet({tweetId:t}){return i["d"].delete("/admin/tweets/"+t)}}},cbed:function(t,s,e){"use strict";e("8ba4")},e3e6:function(t,s,e){t.exports=e.p+"img/home.f6b62b09.svg"},f05f:function(t,s,e){t.exports=e.p+"img/profile@active.e49ffad4.svg"},f340:function(t,s,e){t.exports=e.p+"img/home@active.55c27aab.svg"}}]);
//# sourceMappingURL=chunk-c8bb22fc.13b48eff.js.map