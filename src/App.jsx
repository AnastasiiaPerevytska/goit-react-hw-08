import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<RegistrationPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

