import React, { useEffect, useRef, useState } from "react";

const ReCaptcha = (sitekey, callback) => {
  const recaptchRef = useRef(null);
  const [isRecaptchLoaded, setRecaptchaLoaded] = useState(false);
  const onRecaptchaLoad = () => {
    setRecaptchaLoaded(true);
  };
  useEffect(() => {
    window.onRecaptchaLoad = onRecaptchaLoad;
    if (!window.grecaptcha) {
      const script = document.createElement(`script`);
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.asyc = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.grecaptcha && window.grecaptcha.render) {
      setRecaptchaLoaded(true);
    }

    return () => {
      window.onRecaptchaLoad = null;
    };
  }, []);

  useEffect(() => {
    if (isRecaptchLoaded) {
      window.grecaptcha.render(recaptchRef.current, {
        sitekey: sitekey,
        callback: callback,
      });
    }
  }, [isRecaptchLoaded]);
  return <div ref={recaptchRef}></div>;
};

export default ReCaptcha;
