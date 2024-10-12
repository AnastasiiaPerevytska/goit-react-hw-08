import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearContactsOperation } from "../../redux/contacts/operations";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearContactsOperation());
    };
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

// import { NavLink, Outlet } from "react-router-dom";
// import { logout } from "../../redux/auth/operations";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectIsLoggedIn,
//   selectUser,
// } from "../../redux/auth/selectors";
// import styles from "./Layout.module.css";

// export default function Layout() {
//   const dispatch = useDispatch();
//   const { name } = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <>
//       <header className={styles.header}>
//         <div className={styles.wrap}>
//           <NavLink to="/">Home</NavLink>
//           {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
//         </div>
//         {!isLoggedIn && (
//           <div className={styles.wrap}>
//             <NavLink to="/register">Register</NavLink>
//             <NavLink to="/login">Log In</NavLink>
//           </div>
//         )}
//         {isLoggedIn && (
//           <div className={styles.wrap}>
//             <p>Hello, {name}!</p>
//             <button onClick={() => dispatch(logout())} type="button">
//               Logout
//             </button>
//           </div>
//         )}
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// }