import Logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Ensure this path is correct
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate('/'); // Redirect to Auth page after successful logout
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <nav className="bg-slate-800 text-white shadow-md border-b-2 border-teal-500">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center">
          <Link to="/WebFront" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-28 object-contain cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLogout}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
