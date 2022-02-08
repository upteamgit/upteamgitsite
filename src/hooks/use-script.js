import { useEffect } from 'react';

const useScript = scriptContent => {
    useEffect(() => {
        const script = document.createElement('script');

        const textNode = document.createTextNode(scriptContent)
        script.async = true;

        document.body.appendChild(textNode);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;

