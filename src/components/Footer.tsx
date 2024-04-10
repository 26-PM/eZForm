"use client" 
function Footer() {
  return (
    <div className="mt-20 block bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
             <div className="about-us">
            <h3 className="font-bold mb-4">About Us</h3>
            <p>Founded by PM</p>
          </div>
          <div className="quick-links">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="https://26-pm.github.io/myWebsite">Portfolio</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="follow-us">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          <div className="contact-us">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>123 Random Street, City, State, India</p>
          </div>
        </div>
          <p className="text-center font-xs pt-8">Copyright © 2024 | PM</p>
    </div>
  )
}

export default Footer