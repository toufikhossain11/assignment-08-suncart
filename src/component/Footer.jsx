import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineMail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-orange-500">Sun</span>
              <span className="text-sky-400">Cart</span>
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Discover your perfect summer essentials — stylish sunglasses,
              skincare, outfits, and beach must-haves all in one place.
            </p>

            <div className="flex gap-3 mt-6">
              <a className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 transition flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-400 transition flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-orange-400">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer">Sunglasses</li>
              <li className="hover:text-white cursor-pointer">Summer Outfits</li>
              <li className="hover:text-white cursor-pointer">Skincare</li>
              <li className="hover:text-white cursor-pointer">Beach Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-orange-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-orange-400">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-2">
                <MdPhone className="text-sky-400 text-xl" />
                +880 1234-567890
              </p>

              <p className="flex items-center gap-2">
                <MdOutlineMail className="text-sky-400 text-xl" />
                support@suncart.com
              </p>

              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2026 SunCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}