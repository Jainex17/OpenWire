import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageData, SectionData } from '../store/useEditorStore';
import PreviewSectionRenderer from '../components/PreviewSectionRenderer';

const TAILWIND_CDN = '<script src="https://cdn.tailwindcss.com"></script>';

const THEME_CONFIG = `
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          border: "#d0d0d0", // Default border color
          input: "#e0e0e0",
          ring: "#606060",
          background: "#f0f0f0",
          foreground: "#333333",
          primary: {
            DEFAULT: "#606060",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#e0e0e0",
            foreground: "#333333",
          },
          destructive: {
            DEFAULT: "#cc3333",
            foreground: "#ffffff",
          },
          muted: {
            DEFAULT: "#d9d9d9",
            foreground: "#666666",
          },
          accent: {
            DEFAULT: "#c0c0c0",
            foreground: "#333333",
          },
          popover: {
            DEFAULT: "#f5f5f5",
            foreground: "#333333",
          },
          card: {
            DEFAULT: "#f5f5f5",
            foreground: "#333333",
          },
        },
        borderRadius: {
          lg: "0.45rem",
          md: "calc(0.45rem - 2px)",
          sm: "calc(0.45rem - 4px)",
        },
      },
    },
  }
</script>
<style>
  body {
    background-color: #f0f0f0;
    color: #333333;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  
  /* Remove blue borders and outlines */
  * {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  
  /* Remove cursor pointer effects */
  * {
    cursor: default !important;
  }
  
  /* Disable all interactive elements */
  input, textarea, select, button, [contenteditable], .cursor-text {
    pointer-events: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #d1d5db; /* gray-300 */
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9ca3af; /* gray-400 */
  }
</style>
`;

const generatePageHtml = (page: PageData, sections: Record<string, SectionData>) => {
  const content = ReactDOMServer.renderToStaticMarkup(
    React.createElement('div', { className: 'w-full min-h-screen' },
      page.sections.map((sectionId) =>
        React.createElement(PreviewSectionRenderer, {
          key: sectionId,
          sectionId,
          sections,
        })
      )
    )
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title}</title>
    ${TAILWIND_CDN}
    ${THEME_CONFIG}
</head>
<body>
    ${content}
</body>
</html>`;
};

export const exportProject = async (pages: PageData[], sections: Record<string, SectionData>) => {
  const zip = new JSZip();

  pages.forEach((page, index) => {
    const html = generatePageHtml(page, sections);
    const fileName = index === 0 ? 'index.html' : `${page.title.toLowerCase().replace(/\s+/g, '-')}.html`;
    zip.file(fileName, html);
  });

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'openwire-export.zip');
};


export const exportSinglePage = async (page: PageData, sections: Record<string, SectionData>) => {
  const zip = new JSZip();

  const html = generatePageHtml(page, sections);
  zip.file('index.html', html);

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'openwire-export.zip');
};