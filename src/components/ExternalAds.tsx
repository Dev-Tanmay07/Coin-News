import { useEffect, useRef } from 'react';

const NATIVE_KEY = '9c04827d4139ac44521275b18b715857';
const BANNER_KEY = '27eb2745f8d3972c109841398702a349';

export function NativeBannerAd() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!ref.current || loaded.current) return;
    loaded.current = true;
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = `https://pl30555314.effectivecpmnetwork.com/${NATIVE_KEY}/invoke.js`;
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div ref={ref} className="w-full max-w-2xl">
        <div id={`container-${NATIVE_KEY}`} />
      </div>
    </div>
  );
}

export function Banner300x250Ad() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!ref.current || loaded.current) return;
    loaded.current = true;

    const config = document.createElement('script');
    config.type = 'text/javascript';
    config.text = `atOptions = { 'key' : '${BANNER_KEY}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
    ref.current.appendChild(config);

    const invoke = document.createElement('script');
    invoke.type = 'text/javascript';
    invoke.src = `https://www.highperformanceformat.com/${BANNER_KEY}/invoke.js`;
    ref.current.appendChild(invoke);
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div ref={ref} style={{ width: 300, minHeight: 250 }} />
    </div>
  );
}
