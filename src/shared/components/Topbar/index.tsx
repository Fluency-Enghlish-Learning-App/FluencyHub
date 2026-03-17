import { Link, useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-4xl font-bold" style={{ color: '#52aaa5' }}>Fluency</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`text-xl font-bold hover:text-[#52aaa5] transition-colors ${isActive('/') ? 'text-[#52aaa5]' : 'text-gray-700'}`}
            >
              Trang chủ
            </Link>
            <Link
              to="/tinh-nang"
              className={`text-xl font-bold hover:text-[#52aaa5] transition-colors ${isActive('/tinh-nang') ? 'text-[#52aaa5]' : 'text-gray-700'}`}
            >
              Tính năng
            </Link>
            <Link
              to="/huong-dan"
              className={`text-xl font-bold hover:text-[#52aaa5] transition-colors ${isActive('/huong-dan') ? 'text-[#52aaa5]' : 'text-gray-700'}`}
            >
              Hướng dẫn
            </Link>
            <Link
              to="/blog"
              className={`text-xl font-bold hover:text-[#52aaa5] transition-colors ${isActive('/blog') ? 'text-[#52aaa5]' : 'text-gray-700'}`}
            >
              Blog
            </Link>
            <Link
              to="/lien-he"
              className={`text-xl font-bold hover:text-[#52aaa5] transition-colors ${isActive('/lien-he') ? 'text-[#52aaa5]' : 'text-gray-700'}`}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;