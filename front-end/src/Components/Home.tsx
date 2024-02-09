// import React from "react";
// import "../Nav.scss";
// import Main2 from "./Main2";
// import Fotter from "./Fotter";

// function Nav() {
//   return (
//     <>
//       <nav className="nav-for-fixed">
//         <div id="navbar">
//           <img id="logo" src="src/assets/Images/myntralogo.jpg" alt="Logo" />
//           <a className="navhover">MEN</a>
//           <a className="navhover">WOMEN</a>
//           <a className="navhover">KIDS</a>
//           <a className="navhover">HOME & lIVING</a>
//           <a className="navhover">BEAUTY</a>
//           <a className="navhover">STUDIO</a>

//           <input id="s" placeholder="search for product" />

//           <div>
//             <a>
//               <h3 className="navhover">order</h3>
//               <h3 className="navhover">return</h3>
//             </a>
//           </div>

//           <div>
//             <a>
//               <img
//                 id="cart"
//                 className="navhover"
//                 src="src/assets/Images/carticon.jpg"
//                 alt="Cart"
//               />
//             </a>
//             <p className="navhover">cart</p>
//           </div>
//           <div>
//             <a className="nav-profile">
//               <img
//                 id="profile"
//                 className="navhover"
//                 src="src/assets/Images/profileicon.jpg"
//                 alt="Profile"
//               />
//               <p className="navhover">profile</p>
//             </a>
//           </div>
//         </div>
//       </nav>
//       <div className="content">
//         <Main2 />
//         <Fotter />
//       </div>
//     </>
//   );
// }

// export default Nav;



//amazon
import React from 'react';
import Main2 from './Main2';
import Fotter from './Fotter';
import Header from './Header';
function Nav() {
  return (
   <>
   <Header/>
   <Main2/>
   <Fotter/>
   </>
  );
}

export default Nav;
