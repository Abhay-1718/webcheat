
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-8 border-t-2 border-teal-500 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="WebCheat Logo" className="h-10 w-28 object-contain" />
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-gray-200">
          &copy; 2024 WebCheat. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
