import React from "react";
import logo from "./assets/Logo.png";
import {
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

function App() {

  const phone1 = "+919765400796";
  const phone2 = "+918888830696";

  const address = "First Floor, Survey No. 21, Ganesham Commercial-A, Office No. 102-A, Aundh - Ravet BRTS Rd, Pimple Saudagar, Pune, Maharashtra 411027";

  const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  // vCard download
  const downloadContact = () => {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Smart Unifolio
ORG:Smart Unifolio
TEL:${phone1}
TEL:${phone2}
ADR:${address}
END:VCARD
    `;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "SmartUnifolio.vcf";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] to-[#7897ca] flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#2f3c8f] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* Logo */}
        <div className="bg-white p-6 flex justify-center items-center border-b border-[#2f3c8f]/30">
          <img
            src={logo}
            alt="logo"
            className="w-full max-w-[400px] object-contain drop-shadow-[0_6px_18px_rgba(47,60,143,0.25)] animate-fadeIn"
          />
        </div>

        <div className="p-6 space-y-6">

          {/* Directors */}
          <div className="space-y-4">
            <p className="text-[#2f3c8f] text-sm font-medium">Directors</p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-[#2f3c8f]">Sanjay Wadatkar</p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaPhoneAlt className="text-[#2f3c8f] text-xs" />
                  <a href={`tel:${phone1}`}>{phone1}</a>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-[#2f3c8f]">Ganesh Lamkhade</p>
                <div className="flex items-center justify-end gap-2 text-sm text-gray-700">
                  <FaPhoneAlt className="text-[#2f3c8f] text-xs" />
                  <a href={`tel:${phone2}`}>{phone2}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2f3c8f]/30"></div>

          {/* Website */}
          <div className="flex items-center gap-3">
            <FaGlobe className="text-[#2f3c8f] text-lg" />
            <a href="https://example.com" target="_blank" className="text-[#2f3c8f] hover:underline">
              www.smartunifolio.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">

            {/* Icon */}
            <FaMapMarkerAlt className="text-[#2f3c8f] mt-[3px] text-lg shrink-0" />

            {/* Address (NOT clickable) */}
            <p className="text-gray-700 text-sm leading-relaxed">
              First Floor, Survey No. 21,<br />
              Ganesham Commercial-A,<br />
              Office No. 102-A, Aundh - Ravet BRTS Rd,<br />
              Pimple Saudagar, Pune, Maharashtra 411027
            </p>

          </div>

          {/* Social */}
          <div className="pt-4 border-t border-[#2f3c8f]/30 text-center">
            <p className="text-gray-500 text-sm mb-3">Follow us on</p>

            <div className="flex justify-between px-8 text-2xl">
              <FaFacebook className="text-blue-600 cursor-pointer hover:scale-125 transition" />
              <FaInstagram className="text-pink-500 cursor-pointer hover:scale-125 transition" />
              <FaMapMarkerAlt
                onClick={() => window.open(mapLink, "_blank")}
                className="text-red-500 cursor-pointer hover:scale-125 transition"
              />
              <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-125 transition" />
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-2">

            <button
              onClick={downloadContact}
              className="bg-[#2f3c8f] shadow-md hover:shadow-lg text-white p-2 rounded-lg transition text-sm"
            >
              Add Contact
            </button>

            <button
              onClick={() => window.open("#", "_blank")}
              className="bg-[#1da1a8] shadow-md hover:shadow-lg text-white p-2 rounded-lg transition text-sm"
            >
              Company Profile
            </button>

            <button
              onClick={copyToClipboard}
              className="border border-[#2f3c8f] text-[#2f3c8f] p-2 rounded-lg text-sm hover:bg-[#f1f5ff] transition"
            >
              Copy Link
            </button>

            <a
              href={`https://wa.me/${phone1}`}
              target="_blank"
              className="bg-green-600 shadow-md hover:shadow-lg text-white text-center p-2 rounded-lg text-sm transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
        `}
      </style>

    </div>
  );
}

export default App;