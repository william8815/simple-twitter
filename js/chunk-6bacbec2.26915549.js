(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bacbec2"],{"4d4e":function(s,t,i){"use strict";i("d5a6")},"768e":function(s,t,i){"use strict";i.r(t);var o=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container row"},[t("section",{staticClass:"col-2",staticStyle:{"min-width":"176px"}},[t("Navbar")],1),t("section",{staticClass:"col-7 following-section"},[t("div",{staticClass:"follow"},[t("div",{staticClass:"follow-head"},[t("div",{staticClass:"title"},[t("i",{staticClass:"back fa-solid fa-arrow-left",on:{click:function(t){return s.$router.back()}}}),t("div",{staticClass:"head"},[t("h5",[s._v(s._s(s.user.name))]),t("span",[s._v(s._s(s.user.tweetsCount)+" 貼文")])])]),t("div",{staticClass:"follow-tabs"},[t("ul",{staticClass:"tabs-list"},[t("li",[t("router-link",{staticClass:"tab followers",attrs:{to:{name:"followers"}}},[s._v(" 追隨者 ")])],1),t("li",[t("router-link",{staticClass:"tab following",attrs:{to:{name:"following"}}},[s._v(" 正在追隨 ")])],1)])])]),s.isLoading?t("Spinner"):t("div",{staticClass:"follow-list"},[t("ul",s._l(s.followings,(function(i){return t("li",{key:i.followingId,staticClass:"list-item"},[t("router-link",{staticClass:"avator",attrs:{to:{name:"user-post",params:{id:i.followingId}}}},[t("img",{attrs:{src:s._f("emptyImage")(i.followingAvatar),alt:"userImg"}})]),t("div",{staticClass:"user"},[t("div",{staticClass:"user__info"},[t("router-link",{attrs:{to:{name:"user-post",params:{id:i.followingId}}}},[t("span",{staticClass:"user__name"},[s._v(s._s(i.followingName))])]),i.isFollowing?t("button",{staticClass:"btn followed-btn",attrs:{disabled:s.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),s.deleteFollow(i.followingId)}}},[s._v(" 正在跟隨 ")]):t("button",{staticClass:"btn follow-btn",attrs:{disabled:s.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),s.addFollow(i.followingId)}}},[s._v(" 跟隨 ")])],1),t("div",{staticClass:"user__post"},[s._v(" "+s._s(i.followingIntroduction)+" ")])])],1)})),0)])],1)]),t("section",{staticClass:"col-3",staticStyle:{"min-width":"274px"}},[t("RecommendUsers")],1)])},a=[],e=(i("d9e2"),i("d178")),l=i("88fd"),n=i("2375"),c=i("4cce"),r=i("2fa3"),d=i("2708"),f=i("2f62"),w={name:"followings",mixins:[d["b"]],components:{Navbar:e["a"],RecommendUsers:l["a"],Spinner:n["a"]},data(){return{followings:[],user:{},isProcessing:!1,isLoading:!1}},computed:{...Object(f["b"])(["currentUser"])},beforeRouteUpdate(s,t,i){const{id:o}=s.params;this.fetchUser(o),this.fetchfollowing(o),i()},created(){const{id:s}=this.$route.params;this.fetchUser(s),this.fetchfollowing(s)},methods:{async fetchUser(s){const{data:t}=await c["a"].getOtherUser(s),{name:i,tweetsCount:o}=t;this.user={name:i,tweetsCount:o}},async fetchfollowing(s){try{this.isLoading=!0;const{data:t}=await c["a"].getUserFollowing(s);this.followings=t,this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),r["c"].fire({icon:"error",title:"請求追蹤用戶失敗"})}},async addFollow(s){try{this.isProcessing=!0;const{data:t}=await c["a"].addFollowing(s);if("success"!==t.status)throw new Error(t.message);this.followings=this.followings.map(t=>t.followingId===s?{...t,isFollowing:!0}:t),r["c"].fire({icon:"success",title:"成功追蹤用戶"}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),r["c"].fire({icon:"error",title:"追蹤用戶失敗"})}},async deleteFollow(s){try{this.isProcessing=!0;const{data:t}=await c["a"].deleteFollowing(s);if("success"!==t.status)throw new Error(t.message);this.followings=this.followings.map(t=>t.followingId===s?{...t,isFollowing:!1}:t),r["c"].fire({icon:"success",title:"取消追蹤用戶"}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),r["c"].fire({icon:"error",title:"取消追蹤用戶失敗"})}}}},u=w,g=(i("4d4e"),i("2877")),h=Object(g["a"])(u,o,a,!1,null,"d9bbd124",null);t["default"]=h.exports},d5a6:function(s,t,i){}}]);
//# sourceMappingURL=chunk-6bacbec2.26915549.js.map