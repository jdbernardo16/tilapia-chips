const detectMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|android|touch|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
      userAgent
    );
  return isMobile;
};

export { detectMobile };
