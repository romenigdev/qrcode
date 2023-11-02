import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Index = () => {
    const [url, setUrl] = useState('');
    const [showQR, setShowQR] = useState(false);

    const handleGenerate = () => {
        if (url.trim() !== '') {
            setShowQR(true);
        } else {
            alert('Por favor, insira uma URL válida.');
            setShowQR(false);
        }
    }

    const handleDownload = () => {
        const canvas = document.getElementById("myQRCode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col ">
            <div className="p-10 bg-white shadow-md rounded-md bg-[#F0F1E1]">
            <img src="/logo.png" alt="Logo" className="w-1/3 mb-6 mx-auto"/>

                <div className="flex flex-col items-center space-y-4 ">
                    <input 
                        type="text" 
                        placeholder="Insira a URL aqui"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                    <button 
                        onClick={handleGenerate}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
                    >
                        Gerar QRCode
                    </button>

                    {showQR && (
                        <div className="flex flex-col items-center space-y-4">
                            <QRCode
                                id="myQRCode"
                                value={url}
                            />
                            <button 
                                onClick={handleDownload}
                                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
                            >
                                Fazer download do QRCode
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">romenig.dev@gmail.com</p>
        </div>
    );
}

export default Index;
