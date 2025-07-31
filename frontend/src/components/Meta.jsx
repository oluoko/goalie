import { useEffect } from "react";

const Meta = ({
  title = "Goalie",
  keywords = "goal tracking, personal goals, productivity",
  description = "Goalie - Your personal goal tracker",
}) => {
  useEffect(() => {
    // Set the document title
    document.title = title ? `${title} | Goalie` : "Goalie";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }

    // Set viewport meta tag (if not already present)
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement("meta");
      metaViewport.name = "viewport";
      metaViewport.content = "width=device-width, initial-scale=1";
      document.head.appendChild(metaViewport);
    }

    // Set charset (if not already present)
    let metaCharset = document.querySelector("meta[charset]");
    if (!metaCharset) {
      metaCharset = document.createElement("meta");
      metaCharset.setAttribute("charset", "utf-8");
      document.head.appendChild(metaCharset);
    }

    // Set favicon (if not already present)
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.href = "/favicon.ico";
      document.head.appendChild(favicon);
    }
  }, [title, keywords, description]);

  // This component doesn't render anything visible
  return null;
};

export default Meta;
