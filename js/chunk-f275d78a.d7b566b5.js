(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f275d78a"],{"11c1":function(t,e,s){var a=s("c437"),i=s("c64e"),r=i;r.v1=a,r.v4=i,t.exports=r},"1cbc":function(t,e,s){},2366:function(t,e){for(var s=[],a=0;a<256;++a)s[a]=(a+256).toString(16).substr(1);function i(t,e){var a=e||0,i=s;return[i[t[a++]],i[t[a++]],i[t[a++]],i[t[a++]],"-",i[t[a++]],i[t[a++]],"-",i[t[a++]],i[t[a++]],"-",i[t[a++]],i[t[a++]],"-",i[t[a++]],i[t[a++]],i[t[a++]],i[t[a++]],i[t[a++]],i[t[a++]]].join("")}t.exports=i},2797:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"black",on:{click:t.cancelModal}}),e("div",{staticClass:"reply-modal"},[e("div",{staticClass:"modal"},[e("div",{staticClass:"cancel"},[e("i",{staticClass:"fa-solid fa-xmark",on:{click:function(e){return e.stopPropagation(),t.cancelModal.apply(null,arguments)}}})]),e("div",{staticClass:"sent-user"},[e("router-link",{staticClass:"avator",attrs:{to:{name:"main"}}},[e("img",{attrs:{src:t._f("emptyImage")(t.tweetContent.User.avatar),alt:"userImg"}})]),e("div",{staticClass:"user"},[e("div",{staticClass:"user__info"},[e("router-link",{attrs:{to:{name:"main"}}},[e("span",{staticClass:"user__name"},[t._v(t._s(t.tweetContent.User.name))]),e("span",{staticClass:"user__account"},[t._v("@"+t._s(t.tweetContent.User.account)+" ・")])]),e("router-link",{attrs:{to:{name:"main"}}},[e("span",{staticClass:"user__posttime"},[t._v(t._s(t._f("fromNow")(t.tweetContent.createdAt)))])])],1),e("div",{staticClass:"user__post"},[t._v(" "+t._s(t.tweetContent.description)+" ")]),e("div",{staticClass:"user__sent"},[e("span",[t._v("回覆  ")]),e("span",{staticClass:"sent-account"},[t._v("@"+t._s(t.tweetContent.User.account))])])])],1),e("div",{staticClass:"tweet"},[e("img",{attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:"userImg"}}),e("form",{attrs:{action:""},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{attrs:{id:"parent"}},[e("div",{attrs:{id:"dummy"}},[t._v(t._s(t.text))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"tweet-content",attrs:{name:"tweet",id:"",cols:"30",rows:"6",placeholder:"推你的回覆"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("button",{staticClass:"tweet-btn",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" 推文 ")])])])])])])},i=[],r=(s("d9e2"),s("7482")),n=s("2708"),c=s("2f62"),o=s("2fa3"),l={name:"ReplyModel",mixins:[n["b"],n["c"]],props:{initial_tweet:{type:Object,required:!0}},data(){return{count:6,tweetContent:{id:-1,UserId:-1,description:"",createdAt:"",User:{},replyCount:0,replyState:0},text:"",isProcessing:!1}},computed:{...Object(c["b"])(["currentUser"])},created(){this.fetchReplyModal()},methods:{fetchReplyModal(){const{id:t,UserId:e,description:s,createdAt:a,User:i,replyCount:r,replyState:n}=this.initial_tweet;this.tweetContent={id:t,UserId:e,description:s,createdAt:a,User:i,replyCount:r,replyState:n}},cancelModal(){this.$emit("handleReplyState",this.initial_tweet.id)},async handleSubmit(){if(this.text)if(!this.text.length>140)o["c"].fire({icon:"warning",title:"留言字數已超過140"});else try{this.isProcessing=!0;const{data:t}=await r["a"].addNewComment({tweetId:this.tweetContent.id,comment:this.text});if("success"!==t.status)throw new Error(t.message);this.$emit("after-submit",{tweetId:this.tweetContent.id,comment:this.text}),o["c"].fire({icon:"success",title:"成功新增一則留言"}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),o["c"].fire({icon:"error",title:"新增留言失敗，請稍後再試"})}else o["c"].fire({icon:"warning",title:"請勿提交空白留言"})}}},d=l,u=(s("27c8"),s("2877")),p=Object(u["a"])(d,a,i,!1,null,"0bb62833",null);e["a"]=p.exports},"27c8":function(t,e,s){"use strict";s("1cbc")},"56c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container row"},[e("section",{staticClass:"col-2",staticStyle:{"min-width":"176px"}},[e("Navbar")],1),e("section",{staticClass:"col-7 reply-section"},[e("div",{staticClass:"reply"},[e("div",{staticClass:"title"},[e("i",{staticClass:"back fa-solid fa-arrow-left",on:{click:function(e){return t.$router.back()}}}),e("h4",[t._v("推文")])]),t.isLoading?e("Spinner"):[e("div",{staticClass:"tweet"},[e("router-link",{staticClass:"tweet__user",attrs:{to:{name:"user-post",params:{id:t.tweet.UserId}}}},[e("img",{attrs:{src:t._f("emptyImage")(t.tweet.User.avatar),alt:"userImg"}}),e("div",{staticClass:"user"},[e("div",{staticClass:"name"},[t._v(t._s(t.tweet.User.name))]),e("div",{staticClass:"account"},[t._v("@"+t._s(t.tweet.User.account))])])]),e("div",{staticClass:"tweet__post"},[e("div",{staticClass:"post"},[e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.tweet.description))])]),e("div",{staticClass:"post-time"},[t._v(t._s(t.changeTime))])]),e("div",{staticClass:"tweet__info"},[e("div",{staticClass:"comments"},[e("span",{staticClass:"num"},[t._v(t._s(t.tweet.replyCount))]),e("span",{staticClass:"text"},[t._v(" 回覆")])]),e("div",{staticClass:"liked"},[e("span",{staticClass:"num"},[t._v(t._s(t.tweet.likeCount))]),e("span",{staticClass:"text"},[t._v(" 喜歡次數")])])]),e("div",{staticClass:"tweet__icon"},[e("div",{staticClass:"comment"},[e("svg",{staticClass:"icon comment__icon",attrs:{viewBox:"0 0 30 30",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return e.stopPropagation(),t.makeReply.apply(null,arguments)}}},[e("path",{attrs:{d:"M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z"}})])]),e("div",{staticClass:"like"},[t.tweet.isLiked?e("button",{staticClass:"btn",attrs:{disabled:t.tweet.isProcessing},on:{click:function(e){return e.stopPropagation(),t.deleteLike(t.tweet.id)}}},[e("svg",{staticClass:"icon like__icon",attrs:{viewBox:"0 0 30 30",fill:"#f91880",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15 27.0478H14.9825C11.7538 26.9878 2.4375 18.5703 2.4375 10.5978C2.4375 6.76777 5.59375 3.40527 9.19125 3.40527C12.0537 3.40527 13.9787 5.38027 14.9987 6.81777C16.0162 5.38277 17.9412 3.40527 20.805 3.40527C24.405 3.40527 27.56 6.76777 27.56 10.599C27.56 18.569 18.2425 26.9865 15.0137 27.0453H15V27.0478Z",fill:"#f91880"}})])]):e("button",{staticClass:"btn",attrs:{disabled:t.tweet.isProcessing},on:{click:function(e){return e.stopPropagation(),t.addLike(t.tweet.id)}}},[e("svg",{staticClass:"icon like__icon",attrs:{viewBox:"0 0 30 30",fill:"#fff",stroke:"#657786","stroke-width":"2px",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15 27.0478H14.9825C11.7538 26.9878 2.4375 18.5703 2.4375 10.5978C2.4375 6.76777 5.59375 3.40527 9.19125 3.40527C12.0537 3.40527 13.9787 5.38027 14.9987 6.81777C16.0162 5.38277 17.9412 3.40527 20.805 3.40527C24.405 3.40527 27.56 6.76777 27.56 10.599C27.56 18.569 18.2425 26.9865 15.0137 27.0453H15V27.0478Z",fill:"white"}})])])])])],1),e("div",{staticClass:"reply-board"},[e("ul",t._l(t.replyList,(function(s){return e("li",{key:s.id,staticClass:"list-item"},[e("router-link",{staticClass:"avator",attrs:{to:{name:"user-post",params:{id:s.User.id}}}},[e("img",{attrs:{src:t._f("emptyImage")(s.User.avatar),alt:"userImg"}})]),e("div",{staticClass:"user"},[e("div",{staticClass:"user__info"},[e("router-link",{attrs:{to:{name:"user-post",params:{id:s.User.id}}}},[e("span",{staticClass:"user__name"},[t._v(t._s(s.User.name))]),e("span",{staticClass:"user__account"},[t._v("@"+t._s(s.User.account)+" ・")])]),e("router-link",{attrs:{to:{name:"user-post",params:{id:s.User.id}}}},[e("span",{staticClass:"user__posttime"},[t._v(t._s(t._f("fromNow")(s.createdAt)))])])],1),e("div",{staticClass:"user__sent"},[e("span",[t._v("回覆  ")]),e("span",{staticClass:"sent-account"},[t._v("@"+t._s(t.tweet.User.account))])]),e("div",{staticClass:"user__post"},[e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(s.comment))])])])],1)})),0)]),t.tweet.replyState?e("ReplyModal",{attrs:{initial_tweet:t.tweet},on:{handleReplyState:t.afterReplyState,"after-submit":t.afterHandleSubmit}}):t._e()]],2)]),e("section",{staticClass:"col-3",staticStyle:{"min-width":"274px"}},[e("RecommendUsers")],1)])},i=[],r=(s("d9e2"),s("d178")),n=s("88fd"),c=s("2797"),o=s("2375"),l=s("7482"),d=s("2fa3"),u=s("2708"),p=s("2f62"),m=s("11c1"),w={name:"ReplyList",mixins:[u["b"],u["c"]],components:{Navbar:r["a"],RecommendUsers:n["a"],ReplyModal:c["a"],Spinner:o["a"]},date(){return{isLoading:!1,replyList:[],tweet:{id:-1,UserId:-1,description:"",createdAt:"",replyCount:0,likeCount:0,isLiked:!1,User:{account:"",name:"",avatar:""},replyState:!1}}},computed:{...Object(p["b"])(["currentUser"]),changeTime(){let t=new Date(this.tweet.createdAt),e=t.getFullYear(),s=t.getMonth(),a=t.getDate(),i=t.getHours(),r=t.getMinutes(),n="";r<10&&(r="0"+r),i<10&&(i="0"+i),i>=0&&i<=11?n="上午":i>=12&&i<=23&&(n="下午");let c=`${n} ${i}:${r}・${e}年${s}月${a}日`;return c}},beforeRouteUpdate(t,e,s){const{id:a}=t.params;this.fetchReply(a),s()},created(){const{id:t}=this.$route.params;this.fetchReply(t)},methods:{async fetchReply(t){try{this.isLoading=!0;const{data:e}=await l["a"].getUserTweet(t),s=await l["a"].getUserComments(t);this.tweet={id:e.id,UserId:e.UserId,description:e.description,createdAt:e.createdAt,replyCount:e.replyCount,likeCount:e.likeCount,isLiked:e.isLiked,replyState:!1,User:{account:e.User.account,name:e.User.name,avatar:e.User.avatar}},this.$set(this.tweet,"isProcessing",!1),this.replyList=s.data,this.isLoading=!1}catch(e){this.isLoading=!1,d["c"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}this.$forceUpdate()},makeReply(){this.tweet={...this.tweet,replyState:!0},this.$forceUpdate()},afterReplyState(){this.tweet={...this.tweet,replyState:!1},this.$forceUpdate()},afterHandleSubmit({comment:t}){this.replyList.unshift({id:Object(m["v4"])(),comment:t,createdAt:new Date,User:{id:this.currentUser.id,account:this.currentUser.account,name:this.currentUser.name,avatar:this.currentUser.avatar}}),this.$forceUpdate(),this.tweet={...this.tweet,replyCount:this.tweet.replyCount+1,replyState:!1}},async addLike(t){try{if(!0===this.tweet.isProcessing)return;this.tweet.isProcessing=!0;const{data:e}=await l["a"].addTweetLike(t);if("success"!==e.status)throw new Error(e.message);this.tweet={...this.tweet,isLiked:!0,likeCount:this.tweet.likeCount+1},d["c"].fire({icon:"success",title:"已按讚"}),this.tweet.isProcessing=!1,this.$forceUpdate()}catch(e){this.tweet.isProcessing=!1,console.log(e),d["c"].fire({icon:"error",title:"按讚失敗"})}},async deleteLike(t){try{if(!0===this.tweet.isProcessing)return;this.tweet.isProcessing=!0;const{data:e}=await l["a"].cancelTweetLike(t);if("success"!==e.status)throw new Error(e.message);this.tweet={...this.tweet,isLiked:!1,likeCount:this.tweet.likeCount-1},d["c"].fire({icon:"success",title:"已取消讚"}),this.tweet.isProcessing=!1,this.$forceUpdate()}catch(e){this.tweet.isProcessing=!1,console.log(e),d["c"].fire({icon:"error",title:"取消讚失敗"})}}}},C=w,v=(s("e4e6"),s("2877")),f=Object(v["a"])(C,a,i,!1,null,"6d72be84",null);e["default"]=f.exports},"83de":function(t,e,s){},c437:function(t,e,s){var a,i,r=s("e1f4"),n=s("2366"),c=0,o=0;function l(t,e,s){var l=e&&s||0,d=e||[];t=t||{};var u=t.node||a,p=void 0!==t.clockseq?t.clockseq:i;if(null==u||null==p){var m=r();null==u&&(u=a=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=i=16383&(m[6]<<8|m[7]))}var w=void 0!==t.msecs?t.msecs:(new Date).getTime(),C=void 0!==t.nsecs?t.nsecs:o+1,v=w-c+(C-o)/1e4;if(v<0&&void 0===t.clockseq&&(p=p+1&16383),(v<0||w>c)&&void 0===t.nsecs&&(C=0),C>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=w,o=C,i=p,w+=122192928e5;var f=(1e4*(268435455&w)+C)%4294967296;d[l++]=f>>>24&255,d[l++]=f>>>16&255,d[l++]=f>>>8&255,d[l++]=255&f;var h=w/4294967296*1e4&268435455;d[l++]=h>>>8&255,d[l++]=255&h,d[l++]=h>>>24&15|16,d[l++]=h>>>16&255,d[l++]=p>>>8|128,d[l++]=255&p;for(var _=0;_<6;++_)d[l+_]=u[_];return e||n(d)}t.exports=l},c64e:function(t,e,s){var a=s("e1f4"),i=s("2366");function r(t,e,s){var r=e&&s||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var n=t.random||(t.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e)for(var c=0;c<16;++c)e[r+c]=n[c];return e||i(n)}t.exports=r},e1f4:function(t,e){var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(s){var a=new Uint8Array(16);t.exports=function(){return s(a),a}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},e4e6:function(t,e,s){"use strict";s("83de")}}]);
//# sourceMappingURL=chunk-f275d78a.d7b566b5.js.map