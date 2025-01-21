import React, { useState, useEffect } from 'react';
import { Copy, Check, RefreshCw, Palette } from 'lucide-react';
import { generateGradients } from '../utils/generateGradients';
import { generateColorPalette } from '../utils/generateColorPalette';

const GradientGenerator = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [selectedColor, setSelectedColor] = useState('#008080');
    const [generatedColors, setGeneratedColors] = useState([]);
    const [generatedGradients, setGeneratedGradients] = useState([]);

    useEffect(() => {
        handleGenerate();
    }, []); // Generate initial colors on mount

    const handleGenerate = () => {
        const colors = generateColorPalette(selectedColor);
        const gradients = generateGradients(selectedColor);
        setGeneratedColors(colors);
        setGeneratedGradients(gradients);
    };

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Palette className="w-8 h-8 text-teal-600" />
                            <h1 className="text-2xl font-bold text-gray-800">Color Generator</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                <input
                                    type="color"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="w-10 h-8 rounded cursor-pointer"
                                />
                                <span className="text-sm font-medium text-gray-600">{selectedColor}</span>
                            </div>
                            <button
                                onClick={handleGenerate}
                                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Generate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Color Shades Grid */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Color Shades (0-100%)</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {generatedColors.map((color, index) => (
                            <div
                                key={index}
                                className="flex flex-col space-y-2 p-3 border rounded-lg hover:shadow-md transition-shadow bg-gray-50"
                            >
                                <div
                                    className="w-full h-12 rounded-md border"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="flex items-center justify-between">
                                    <div className="text-xs">
                                        <div className="font-medium">{color.percent}</div>
                                        <div className="text-gray-500">{color.hex}</div>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(color.hex, `color-${index}`)}
                                        className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                                        title="Copy color code"
                                    >
                                        {copiedIndex === `color-${index}` ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradients Grid */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Gradient Variations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {generatedGradients.map((gradient, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden bg-gray-50 hover:shadow-md transition-shadow">
                                <div
                                    className="h-32 w-full"
                                    style={gradient.style}
                                />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium">{gradient.name}</div>
                                        <button
                                            onClick={() => copyToClipboard(`background: ${gradient.css};`, `gradient-${index}`)}
                                            className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                                            title="Copy gradient code"
                                        >
                                            {copiedIndex === `gradient-${index}` ? (
                                                <Check className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                    <code className="text-xs bg-white px-2 py-1.5 rounded block overflow-x-auto">
                                        background: {gradient.css};
                                    </code>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientGenerator;