(this["webpackJsonpcodeial-final-live"]=this["webpackJsonpcodeial-final-live"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(31),r=n.n(a),o=(n(66),n(4)),i=n(5),l=n(7),u=n(6),d=n(2),h=n(9),j=n(8),p=n(10),m=n(58),b="https://codeial.codingninjas.com:8000/api/v2/",f=function(){return"".concat(b,"/users/login")},O=function(){return"".concat(b,"/users/signup")},v=function(e,t){return"".concat(b,"/posts?page=").concat(e,"&limit=").concat(t)},g=function(){return"".concat(b,"/users/edit")},x=function(e){return"".concat(b,"/users/").concat(e)},N=function(){return"".concat(b,"/friendship/fetch_user_friends")},C=function(e){return"".concat(b,"/friendship/create_friendship?user_id=").concat(e)},_=function(e){return"".concat(b,"/friendship/remove_friendship?user_id=").concat(e)},S=function(){return"".concat(b,"/posts/create")},y=function(){return"".concat(b,"/comments/")},w=function(e,t){return"".concat(b,"/likes/toggle?likeable_id=").concat(e,"&likeable_type=").concat(t)},k=function(e){return"".concat(b,"/users/search?text=").concat(e)},E="UPDATE_POSTS",I="LOGIN_START",T="LOGIN_SUCCESS",P="LOGIN_FAILED",A="SIGNUP_START ",L="SIGNUP_SUCCESS",U="SIGNUP_FAILED",R="AUTHENTICATE_USER",F="LOG_OUT",D="CLEAR_AUTH_STATE",M="EDIT_USER_SUCCESSFUL",H="EDIT_USER_FAILED",B="USER_PROFILE_SUCCESS",z="USER_PROFILE_FAILURE",G="FETCH_USER_PROFILE",q="FETCH_FRIENDS_SUCCESS",J="ADD_FRIEND",K="REMOVE_FRIEND",W="ADD_POST",V="ADD_COMMENT",Q="UPDATE_POST_LIKE",X="FETCH_SEARCH_RESULTS_SUCCESS";function Y(e){var t=[];for(var n in e){var s=encodeURIComponent(n),c=encodeURIComponent(e[n]);t.push(s+"="+c)}return t.join("&")}function Z(){return localStorage.getItem("token")}function $(){return function(e){var t=v(1,25);fetch(t).then((function(e){return e.json()})).then((function(t){var n;console.log(t),e((n=t.data.posts,{type:E,posts:n}))}))}}function ee(e){return function(t){var n=S();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())},body:Y({content:e})}).then((function(e){return e.json()})).then((function(e){var n;console.log("dATA",e),e.success&&t((n=e.data.post,{type:W,post:n}))}))}}function te(e,t){return function(n){var s=y();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())},body:Y({content:e,post_id:t})}).then((function(e){return e.json()})).then((function(e){e.success&&n(function(e,t){return{type:V,comment:e,postId:t}}(e.data.comment,t))}))}}function ne(e,t,n){return function(s){var c=w(e,t);fetch(c,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}}).then((function(e){return e.json()})).then((function(t){console.log("LIKE DATA",t),t.success&&s(function(e,t){return{type:Q,postId:e,userId:t}}(e,n))}))}}var se=n(0),ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.posts;return Object(se.jsxs)("div",{className:"posts-list",children:[Object(se.jsx)(Fe,{}),e.map((function(e){return Object(se.jsx)(Me,{post:e},e._id)}))]})}}]),n}(s.Component);function ae(e,t){return function(n){n({type:I});var s=f();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Y({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(console.log("DATA",e),e.success)return localStorage.setItem("token",e.data.token),void n((t=e.data.user,{type:T,user:t}));var t,s;n((s=e.message,{type:P,error:s}))}))}}function re(e,t,n,s){return function(c){c({type:A});var a=O();fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Y({email:e,password:t,confirm_password:n,name:s})}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.success)return localStorage.setItem("token",e.data.token),void c((t=e.data.user,{type:L,user:t}));var t,n;c((n=e.message,{type:U,error:n}))}))}}function oe(){return{type:F}}function ie(){return{type:D}}function le(e,t,n,s){return function(c){var a=g();fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())},body:Y({name:e,password:t,confirm_password:n,id:s})}).then((function(e){return e.json()})).then((function(e){if(console.log("EDIT PROFIle data",e),e.success)return c((t=e.data.user,{type:M,user:t})),void(e.data.token&&localStorage.setItem("token",e.data.token));var t,n;c((n=e.message,{type:H,error:n}))}))}}function ue(e){return function(t){var n=k(e);fetch(n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}}).then((function(e){return e.json()})).then((function(e){console.log("SEARCH data",e),e.success?t(de(e.data.users)):t(de([]))}))}}function de(e){return{type:X,users:e}}var he=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).logout=function(){localStorage.removeItem("token"),e.props.dispatch(oe())},e.handleSearch=function(t){var n=t.target.value;e.props.dispatch(ue(n))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.results;return Object(se.jsxs)("nav",{className:"nav",children:[Object(se.jsx)("div",{className:"left-div",children:Object(se.jsx)(p.b,{to:"/",children:Object(se.jsx)("img",{src:"https://ninjasfiles.s3.amazonaws.com/0000000000003454.png",alt:"logo"})})}),Object(se.jsxs)("div",{className:"search-container",children:[Object(se.jsx)("img",{className:"search-icon",src:"https://image.flaticon.com/icons/svg/483/483356.svg",alt:"search-icon"}),Object(se.jsx)("input",{placeholder:"Search",onChange:this.handleSearch}),n.length>0&&Object(se.jsx)("div",{className:"search-results",children:Object(se.jsx)("ul",{children:n.map((function(e){return Object(se.jsx)("li",{className:"search-results-row",children:Object(se.jsxs)(p.b,{to:"/user/".concat(e._id),children:[Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"}),Object(se.jsx)("span",{children:e.name})]})},e._id)}))})})]}),Object(se.jsxs)("div",{className:"right-nav",children:[t.isLoggedin&&Object(se.jsxs)("div",{className:"user",children:[Object(se.jsx)(p.b,{to:"/settings",children:Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp",id:"user-dp"})}),Object(se.jsx)("span",{children:t.user.name})]}),Object(se.jsx)("div",{className:"nav-links",children:Object(se.jsxs)("ul",{children:[!t.isLoggedin&&Object(se.jsx)("li",{children:Object(se.jsx)(p.b,{to:"/login",children:"Log in"})}),t.isLoggedin&&Object(se.jsx)("li",{onClick:this.logout,children:"Log out"}),!t.isLoggedin&&Object(se.jsx)("li",{children:Object(se.jsx)(p.b,{to:"/signup",children:"Register"})})]})})]})]})}}]),n}(s.Component);var je=Object(h.b)((function(e){return{auth:e.auth,results:e.search.results}}))(he),pe=n(20),me=n(32),be=n(59),fe=(n(106),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).setupConnections=function(){var e=s.socket,t=Object(me.a)(s);console.log(")))))))))))))",s.userEmail),s.socket.on("connect",(function(){console.log("CONNECTION ESTABLISHED"),e.emit("join_room",{user_email:this.userEmail,chatroom:"codeial"}),e.on("user_joined",(function(e){console.log("NE USER JOINED",e)}))})),s.socket.on("receive_message",(function(e){var n=t.state.messages,s={};s.content=e.message,e.user_email===t.userEmail&&(s.self=!0),t.setState({messages:[].concat(Object(pe.a)(n),[s]),typedMessage:""})}))},s.handleSubmit=function(){var e=s.state.typedMessage;console.log("*************************",e),e&&s.userEmail&&s.socket.emit("send_message",{message:e,user_email:s.userEmail,chatroom:"codeial"})},s.state={messages:[],typedMessage:""},console.log(" I am here"),s.socket=be.io.connect("http://localhost:3000",{transport:["websocket"]}),s.userEmail=e.user.email,console.log(" I am here"),s.userEmail&&s.setupConnections(),s}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.typedMessage,s=t.messages;return Object(se.jsxs)("div",{className:"chat-container",children:[Object(se.jsx)("div",{className:"chat-header",children:"Chat"}),Object(se.jsx)("div",{className:"chat-messages",children:s.map((function(e){return Object(se.jsx)("div",{className:e.self?"chat-bubble self-chat":"chat-bubble other-chat",children:e.content})}))}),Object(se.jsxs)("div",{className:"chat-footer",children:[Object(se.jsx)("input",{type:"text",value:n,onChange:function(t){return e.setState({typedMessage:t.target.value})}}),Object(se.jsx)("button",{onClick:this.handleSubmit,children:"Submit"})]})]})}}]),n}(s.Component));Object(h.b)((function(e){return{user:e.auth.user}}))(fe);var Oe=function(e){return Object(se.jsxs)("div",{className:"friends-list",children:[Object(se.jsx)("div",{className:"header",children:"Friends"}),e.friends&&0===e.friends.length&&Object(se.jsx)("div",{className:"no-friends",children:"No friends found!"}),e.friends&&e.friends.map((function(e){return Object(se.jsx)(Ue,{friend:e.to_user},e._id)}))]})},ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.posts,n=e.friends,s=e.isLoggedin;return console.log("HOME_____________",this.props),Object(se.jsxs)("div",{className:"home",children:[Object(se.jsx)(ce,{posts:t}),s&&Object(se.jsx)(Oe,{friends:n})]})}}]),n}(s.Component);var ge=function(e){return Object(se.jsx)("div",{children:Object(se.jsx)("h2",{children:"404 Nothing Found Here..."})})},xe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleEmailChange=function(e){s.setState({email:e.target.value})},s.handlePasswordChange=function(e){s.setState({password:e.target.value})},s.handleFormSubmit=function(e){e.preventDefault(),console.log("THIS_STATE",s.state);var t=s.state,n=t.email,c=t.password;n&&c&&s.props.dispatch(ae(n,c))},s.state={email:"",password:""},s}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(ie())}},{key:"render",value:function(){var e=this.props.auth,t=e.error,n=e.inProgress,s=e.isLoggedin,c=(this.props.location.state||{from:{pathname:"/"}}).from;return s?Object(se.jsx)(j.a,{to:c}):Object(se.jsxs)("form",{className:"login-form",children:[Object(se.jsx)("span",{className:"login-signup-header",children:"Log In"}),t&&Object(se.jsx)("div",{className:"alert-error-dialog",children:t}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:this.handleEmailChange})}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:this.handlePasswordChange})}),Object(se.jsx)("div",{className:"field",children:n?Object(se.jsx)("button",{onClick:this.handleFormSubmit,disabled:n,children:"Logging In..."}):Object(se.jsx)("button",{onClick:this.handleFormSubmit,disabled:n,children:"Log In"})})]})}}]),n}(s.Component);var Ne=Object(h.b)((function(e){return{auth:e.auth}}))(xe),Ce=n(23),_e=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e,t){s.setState(Object(Ce.a)({},e,t))},s.onFormSubmit=function(e){e.preventDefault();var t=s.state,n=t.email,c=t.password,a=t.confirmPassword,r=t.name;n&&c&&a&&r&&s.props.dispatch(re(n,c,a,r))},s.state={email:"",password:"",name:"",confirmPassword:""},s}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(ie())}},{key:"render",value:function(){var e=this,t=this.props.auth,n=t.inProgress,s=t.error;return t.isLoggedin?Object(se.jsx)(j.a,{to:"/"}):Object(se.jsxs)("form",{className:"login-form",children:[Object(se.jsx)("span",{className:"login-signup-header",children:" Signup"}),s&&Object(se.jsx)("div",{className:"alert error-dailog",children:s}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{placeholder:"Name",type:"text",required:!0,onChange:function(t){return e.handleInputChange("name",t.target.value)}})}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{placeholder:"Email",type:"email",required:!0,onChange:function(t){return e.handleInputChange("email",t.target.value)}})}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{placeholder:"Confirm password",type:"password",required:!0,onChange:function(t){return e.handleInputChange("confirmPassword",t.target.value)}})}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("input",{placeholder:"Password",type:"password",required:!0,onChange:function(t){return e.handleInputChange("password",t.target.value)}})}),Object(se.jsx)("div",{className:"field",children:Object(se.jsx)("button",{onClick:this.onFormSubmit,disabled:n,children:"Signup"})})]})}}]),n}(s.Component),Se=Object(h.b)((function(e){return{auth:e.auth}}))(_e),ye=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e,t){s.setState(Object(Ce.a)({},e,t))},s.handleSave=function(){var e=s.state,t=e.password,n=e.confirmPassword,c=e.name,a=s.props.auth.user;s.props.dispatch(le(c,t,n,a._id))},s.state={name:e.auth.user.name,password:"",confirmPassword:"",editMode:!1},s}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(ie())}},{key:"render",value:function(){var e=this,t=this.props.auth,n=t.user,s=t.error,c=this.state.editMode;return Object(se.jsxs)("div",{className:"settings",children:[Object(se.jsx)("div",{className:"img-container",children:Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"})}),s&&Object(se.jsx)("div",{className:"alert error-dailog",children:s}),!1===s&&Object(se.jsx)("div",{className:"alert success-dailog",children:"Successfully updated profile!"}),Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"Email"}),Object(se.jsx)("div",{className:"field-value",children:n.email})]}),Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"Name"}),c?Object(se.jsx)("input",{type:"text",onChange:function(t){return e.handleChange("name",t.target.value)},value:this.state.name}):Object(se.jsx)("div",{className:"field-value",children:n.name})]}),c&&Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"New password"}),Object(se.jsx)("input",{type:"password",onChange:function(t){return e.handleChange("password",t.target.value)},value:this.state.password})]}),c&&Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"Confirm password"}),Object(se.jsx)("input",{type:"password",onChange:function(t){return e.handleChange("confirmPassword",t.target.value)},value:this.state.confirmPassword})]}),Object(se.jsxs)("div",{className:"btn-grp",children:[c?Object(se.jsx)("button",{className:"button save-btn",onClick:this.handleSave,children:"Save"}):Object(se.jsx)("button",{className:"button edit-btn",onClick:function(){return e.handleChange("editMode",!0)},children:"Edit profile"}),c&&Object(se.jsx)("div",{className:"go-back",onClick:function(){return e.handleChange("editMode",!1)},children:"Go back"})]})]})}}]),n}(s.Component);var we=Object(h.b)((function(e){return{auth:e.auth}}))(ye),ke=n(28),Ee=n.n(ke),Ie=n(41);function Te(e){return function(t){t({type:G});var n=x(e);fetch(n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}}).then((function(e){return e.json()})).then((function(e){var n,s;e.success?t((n=e.data.user,{type:B,user:n})):t((s=e.message,{type:z,error:s}))}))}}function Pe(e){return function(t){var n=N(e);fetch(n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}}).then((function(e){return e.json()})).then((function(e){var n;console.log("data",e),t((n=e.data.friends,{type:q,friends:n}))}))}}var Ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).checkIfUserIsAFriend=function(){console.log("this.props",s.props);var e=s.props,t=e.match,n=e.friends,c=t.params.userId;return-1!==n.map((function(e){return e.to_user._id})).indexOf(c)},s.handleAddFriendClick=Object(Ie.a)(Ee.a.mark((function e(){var t,n,c,a,r;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.userId,n=C(t),c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}},e.next=5,fetch(n,c);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent).success?(s.setState({success:!0,successMessage:"Added friend successfully!"}),s.props.dispatch((o=r.data.friendship,{type:J,friend:o}))):s.setState({success:null,error:r.message});case 10:case"end":return e.stop()}var o}),e)}))),s.handleRemoveFriendClick=Object(Ie.a)(Ee.a.mark((function e(){var t,n,c,a,r;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match,n=_(t.params.userId),c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(Z())}},e.next=5,fetch(n,c);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,console.log("await data",r),r.success?(s.setState({success:!0,successMessage:"Removed friends successfully!"}),s.props.dispatch((o=t.params.userId,{type:K,userId:o}))):s.setState({success:null,error:r.message});case 11:case"end":return e.stop()}var o}),e)}))),s.state={success:null,error:null,successMessage:null},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match;e.params.userId&&this.props.dispatch(Te(e.params.userId))}},{key:"componentDidUpdate",value:function(e){var t=e.match.params,n=this.props.match.params;t&&n&&t.userId!==n.userId&&this.props.dispatch(Te(n.userId))}},{key:"render",value:function(){var e=this.props,t=e.match.params,n=e.profile;console.log("this.props",t,this.props);var s=n.user;if(n.inProgress)return Object(se.jsx)("h1",{children:"Loading!"});var c=this.checkIfUserIsAFriend(),a=this.state,r=a.success,o=a.error,i=a.successMessage;return Object(se.jsxs)("div",{className:"settings",children:[Object(se.jsx)("div",{className:"img-container",children:Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"})}),Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"Name"}),Object(se.jsx)("div",{className:"field-value",children:s.name})]}),Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("div",{className:"field-label",children:"Email"}),Object(se.jsx)("div",{className:"field-value",children:s.email})]}),Object(se.jsxs)("div",{className:"btn-grp",children:[c?Object(se.jsx)("button",{className:"button save-btn",onClick:this.handleRemoveFriendClick,children:"Remove Friend"}):Object(se.jsx)("button",{className:"button save-btn",onClick:this.handleAddFriendClick,children:"Add Friend"}),r&&Object(se.jsx)("div",{className:"alert success-dailog",children:i}),o&&Object(se.jsx)("div",{className:"alert error-dailog",children:o})]})]})}}]),n}(s.Component);var Le=Object(h.b)((function(e){return{profile:e.profile,friends:e.friends}}))(Ae);var Ue=function(e){return Object(se.jsx)("div",{children:Object(se.jsxs)(p.b,{className:"friends-item",to:"user/".concat(e.friend._id),children:[Object(se.jsx)("div",{className:"friends-img",children:Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})}),Object(se.jsx)("div",{className:"friends-name",children:e.friend.email})]})})},Re=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleOnClick=function(){s.props.dispatch(ee(s.state.content)),s.setState({content:""})},s.handleChange=function(e){s.setState({content:e.target.value})},s.state={content:""},s}return Object(i.a)(n,[{key:"render",value:function(){return Object(se.jsxs)("div",{className:"create-post",children:[Object(se.jsx)("textarea",{className:"add-post",value:this.state.content,onChange:this.handleChange}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{id:"add-post-btn",onClick:this.handleOnClick,children:"Add Post"})})]})}}]),n}(s.Component),Fe=Object(h.b)()(Re),De=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleAddComment=function(e){var t=s.state.comment,n=s.props.post;"Enter"===e.key&&(s.props.dispatch(te(t,n._id)),s.setState({comment:""}))},s.handleOnCommentChange=function(e){s.setState({comment:e.target.value})},s.handlePostLike=function(){var e=s.props,t=e.post,n=e.user;s.props.dispatch(ne(t._id,"Post",n._id))},s.state={comment:""},s}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.user,s=this.state.comment,c=t.likes.includes(n._id);return Object(se.jsx)("div",{className:"post-wrapper",children:Object(se.jsxs)("div",{className:"post-header",children:[Object(se.jsxs)("div",{className:"post-avatar",children:[Object(se.jsx)(p.b,{to:"/user/".concat(t.user._id),children:Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})}),Object(se.jsxs)("div",{children:[Object(se.jsx)("span",{className:"post-author",children:t.user.name}),Object(se.jsx)("span",{className:"post-time",children:"a minute ago"})]})]}),Object(se.jsx)("div",{className:"post-content",children:t.content}),Object(se.jsxs)("div",{className:"post-actions",children:[Object(se.jsxs)("button",{className:"post-like no-btn",onClick:this.handlePostLike,children:[c?Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/1076/1076984.svg",alt:"like post"}):Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/1077/1077035.svg",alt:"likes-icon"}),Object(se.jsx)("span",{children:t.likes.length})]}),Object(se.jsxs)("div",{className:"post-comments-icon",children:[Object(se.jsx)("img",{src:"https://image.flaticon.com/icons/svg/1380/1380338.svg",alt:"comments-icon"}),Object(se.jsx)("span",{children:t.comments.length})]})]}),Object(se.jsx)("div",{className:"post-comment-box",children:Object(se.jsx)("input",{placeholder:"Start typing a comment",onChange:this.handleOnCommentChange,onKeyPress:this.handleAddComment,value:s})}),Object(se.jsx)("div",{className:"post-comments-list",children:t.comments.map((function(e){return Object(se.jsx)(He,{comment:e,postId:t._id},e._id)}))})]})},t._id)}}]),n}(s.Component);var Me=Object(h.b)((function(e){return{user:e.auth.user}}))(De);var He=function(e){var t=e.comment;return Object(se.jsxs)("div",{className:"post-comment-item",children:[Object(se.jsxs)("div",{className:"post-comment-header",children:[Object(se.jsx)("span",{className:"post-comment-author",children:t.user.name}),Object(se.jsx)("span",{className:"post-comment-time",children:"a minute ago"}),Object(se.jsxs)("span",{className:"post-comment-likes",children:[t.likes.length," likes"]})]}),Object(se.jsx)("div",{className:"post-comment-content",children:t.content})]})},Be=function(e){var t=e.isLoggedin,n=e.path,s=e.component;return console.log(e,s),console.log({path:n}),Object(se.jsx)(j.b,{path:n,render:function(e){return t?Object(se.jsx)(s,Object(d.a)({},e)):Object(se.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}})},ze=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("***************"),this.props.dispatch($());var e=Z();if(e){var t=Object(m.a)(e);console.log("user",t),this.props.dispatch(function(e){return{type:R,user:e}}({email:t.email,name:t.name,_id:t._id})),this.props.dispatch(Pe())}}},{key:"render",value:function(){console.log("PROPS________",this.props);var e=this.props,t=e.posts,n=e.auth,s=e.friends;return console.log(this.props.auth),Object(se.jsx)(p.a,{children:Object(se.jsxs)("div",{children:[Object(se.jsx)(je,{}),Object(se.jsxs)(j.d,{children:[Object(se.jsx)(j.b,{exact:!0,path:"/",render:function(e){return Object(se.jsx)(ve,Object(d.a)(Object(d.a)({},e),{},{posts:t,friends:s,isLoggedin:n.isLoggedin}))}}),Object(se.jsx)(j.b,{path:"/login",component:Ne}),Object(se.jsx)(j.b,{path:"/signup",component:Se}),Object(se.jsx)(Be,{path:"/settings",component:we,isLoggedin:n.isLoggedin}),Object(se.jsx)(Be,{path:"/user/:userId",component:Le,isLoggedin:n.isLoggedin}),Object(se.jsx)(j.b,{component:ge})]})]})})}}]),n}(c.a.Component);var Ge=Object(h.b)((function(e){return{posts:e.posts,auth:e.auth,friends:e.friends}}))(ze),qe=n(27),Je=n(60),Ke=n(61);var We={user:{},error:null,isLoggedin:!1,inProgress:!1};var Ve={user:{},error:null,success:null,inProgress:!1};var Qe=[];var Xe={results:[]};var Ye=Object(qe.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.posts;case W:return[t.post].concat(Object(pe.a)(e));case V:var n=e.map((function(e){return e._id===t.postId?Object(d.a)(Object(d.a)({},e),{},{comments:[t.comment].concat(Object(pe.a)(e.comments))}):e}));return n;case Q:var s=e.map((function(e){return e._id===t.postId?Object(d.a)(Object(d.a)({},e),{},{likes:[].concat(Object(pe.a)(e.likes),[t.userId])}):e}));return s;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(console.log("AUTH_REDUCER"),t.type){case D:return Object(d.a)(Object(d.a)({},e),{},{error:null});case I:case A:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!0});case T:case L:return Object(d.a)(Object(d.a)({},e),{},{user:t.user,isLoggedin:!0,inProgress:!1,error:null});case P:case U:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,error:t.error});case R:return Object(d.a)(Object(d.a)({},e),{},{user:t.user,isLoggedin:!0});case F:return Object(d.a)(Object(d.a)({},e),{},{user:{},isLoggedin:!1});case M:return Object(d.a)(Object(d.a)({},e),{},{user:t.user,error:!1});case H:return Object(d.a)(Object(d.a)({},e),{},{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(d.a)(Object(d.a)({},e),{},{success:!0,user:t.user,inProgress:!1});case z:return Object(d.a)(Object(d.a)({},e),{},{error:t.error,inProgress:!1});case G:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!0});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(pe.a)(t.friends);case J:return e.concat(t.friend);case K:var n=e.filter((function(e){return e.to_user._id!==t.userId}));return n;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(d.a)(Object(d.a)({},e),{},{results:t.users});default:return e}}});var Ze=Object(qe.c)(Ye,Object(qe.a)(Je.a,Ke.logger));console.log("STORE_______",Ze,Ze.getState()),r.a.render(Object(se.jsx)(h.a,{store:Ze,children:Object(se.jsx)(c.a.StrictMode,{children:Object(se.jsx)(Ge,{})})}),document.getElementById("root"))},66:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.eab00eae.chunk.js.map