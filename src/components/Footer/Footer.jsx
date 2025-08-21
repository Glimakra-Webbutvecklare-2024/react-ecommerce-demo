function Footer() {
  return (

    <footer className="bg-[#2c3e50] text-white py-8 px-4 mt-auto">
      <div className="text-center">
        <p className="mb-4">&copy; 2025 E-Commerce Store. All rights reserved.</p>
        <div className="flex justify-center gap-8">
          <a href="#privacy" className="text-white no-underline p-2 transition-all duration-300 ease-in-out hover:opacity-80">Privacy Policy</a>
          <a href="#terms" className="text-white no-underline p-2 transition-all duration-300 ease-in-out hover:opacity-80">Terms of Service</a>
          <a href="#support" className="text-white no-underline p-2 transition-all duration-300 ease-in-out hover:opacity-80">Support</a>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
