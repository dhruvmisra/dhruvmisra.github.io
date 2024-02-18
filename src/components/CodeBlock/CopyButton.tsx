import { useState } from "preact/hooks";

type CopyButtonProps = {
    text: string;
};

const CopyButton = ({ text }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };

    return (
        <button
            class={`copy-button p-2 rounded-md border border-slate-500 transition-opacity ${isCopied ? "copied" : ""}`}
            title="Copy"
            onClick={copy}
        >
            {isCopied ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#00FF00">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 0 24 24"
                    width="18px"
                    class="fill-slate-400"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
            )}
        </button>
    );
};

export default CopyButton;
