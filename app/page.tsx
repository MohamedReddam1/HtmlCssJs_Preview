"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons from react-icons

export default function Home() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const iframeContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div
      className={`min-h-screen flex flex-col pb-20 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header and Dark Mode Toggle */}
      <div
        className={`p-4 flex justify-between items-center ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <h1 className="text-2xl font-bold">HTML, CSS, JS Live Preview</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-4 flex items-center space-x-2 ${
            darkMode ? "bg-blue-700" : "bg-gray-600"
          } text-white rounded shadow`}
        >
          {/* Conditionally render the icon based on darkMode */}
          {darkMode ? (
            <FaSun className="text-yellow-400" /> // Sun icon for light mode
          ) : (
            <FaMoon className="text-gray-100" /> // Moon icon for dark mode
          )}
          
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Input Section */}
        <div className="w-1/2 p-4 flex flex-col gap-4">
          {/* HTML Input */}
          <div className="flex flex-col">
            <label htmlFor="html" className="font-bold text-red-500 mb-2">
              HTML
            </label>
            <textarea
              id="html"
              className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-50"
              }`}
              rows="8"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="Write HTML here..."
            ></textarea>
          </div>

          {/* CSS Input */}
          <div className="flex flex-col">
            <label htmlFor="css" className="font-bold text-blue-500 mb-2">
              CSS
            </label>
            <textarea
              id="css"
              className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-50"
              }`}
              rows="8"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              placeholder="Write CSS here..."
            ></textarea>
          </div>

          {/* JavaScript Input */}
          <div className="flex flex-col">
            <label htmlFor="js" className="font-bold text-yellow-500 mb-2">
              JavaScript
            </label>
            <textarea
              id="js"
              className={`p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-50"
              }`}
              rows="8"
              value={js}
              onChange={(e) => setJs(e.target.value)}
              placeholder="Write JavaScript here..."
            ></textarea>
          </div>
        </div>

        {/* Output Section */}
        <div className="w-1/2 p-4">
          <label htmlFor="output" className="font-bold mb-2 block">
            Output
          </label>
          <iframe
            id="output"
            className={`w-full h-full border rounded ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            srcDoc={iframeContent}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
