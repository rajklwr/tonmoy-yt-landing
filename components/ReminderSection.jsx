import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ReminderSection() {
  return (
    <div className={`relative py-12 px-6 lg:px-24 text-white`}>
      {/* Message Box */}
      <div className="flex items-center justify-center">
        <div className="p-4 sm:p-6 lg:p-8 bg-opacity-60 text-white bg-gradient-to-b  from-white/30 to-black/40 rounded-2xl sm:rounded-full shadow-2xl border-2 border-white ">
          <p className="text-md lg:text-xl font-medium">
            Please keep an eye on your inbox or WhatsApp, and make sure to respond promptly so we can lock in the best time for our conversation. <span className="text-blue-400">💬</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-end justify-center mt-10 space-y-4 lg:space-y-4">
  {/* WhatsApp Contact */}
  <a
    href="https://wa.me/916000205657"
    target="_blank"
    rel="noopener noreferrer"
    className="flex mr-5 items-center space-x-4"
  >
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
      <FaWhatsapp className="text-green-400 w-6 h-6" />
    </div>
    <p className="text-lg font-semibold">+91 6000205657</p>
  </a>

  {/* Instagram Contact */}
  <a
    href="https://www.instagram.com/tonmoyghosh__"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4"
  >
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
      <FaInstagram className="text-pink-400 w-6 h-6" />
    </div>
    <p className="text-lg font-semibold">@tonmoyghosh__</p>
  </a>
</div>

    </div>
  );
}
