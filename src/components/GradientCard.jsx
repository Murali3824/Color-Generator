import React from 'react';
import { Copy, Check } from 'lucide-react';
const GradientCard = ({ gradient, onCopy, isCopied }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm">
            <div
                style={gradient.style}
                className="h-32 w-full"
            />
            <div className="p-4">
                <div className="font-medium mb-2">{gradient.name}</div>
                <div className="flex items-center justify-between">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded flex-1 mr-2">
                        {gradient.css}
                    </code>
                    <button
                        onClick={onCopy}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        title="Copy to clipboard"
                    >
                        {isCopied ? (
                            <Check className="w-5 h-5 text-green-500" />
                        ) : (
                            <Copy className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default GradientCard;