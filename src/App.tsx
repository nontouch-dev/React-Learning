import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm.tsx';
import Users from './pages/User.tsx';
import About from './pages/About.tsx';

import ProtectedRoute from './components/ProtectedRoute.tsx';
import MainLayout from './components/MainLayout';

const Dashboard = () => <div>Dashboard Page</div>;
const Payment = () => <div>Payment Page</div>;
const Settings = () => <div>Settings Page</div>;

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route element={<ProtectedRoute />}>
					<Route element={<MainLayout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/users" element={<Users />} />
						<Route path="/payment" element={<Payment />} />
						<Route path="/about" element={<About />} />
						<Route path="/settings" element={<Settings />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
