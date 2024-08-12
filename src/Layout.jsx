
import { Outlet } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'


function Layout() {
  return (
    <div>
      <Navbar /> {/* Navbar is included in the layout */}
      <main>
        <Outlet /> {/* Page-specific content will be rendered here */}
      </main>
      <Footer /> {/* Footer is included in the layout */}
    </div>
  );
}

export default Layout;

// Purpose: To provide a consistent layout with common elements like Navbar and Footer around the page-specific content.
// Functionality:
// It wraps around pages that need the same layout structure (common for multiple routes).
