import React, { useState } from 'react';
import { useLocation, useNavigate } from 'wouter';

const ModelComparisonInterface = () => {
    const [selectedModels, setSelectedModels] = useState([]);
    const [promptText, setPromptText] = useState('');
    const [responses, setResponses] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleModelSelection = (model) => {
        if (selectedModels.includes(model)) {
            setSelectedModels(selectedModels.filter(m => m !== model));
        } else {
            setSelectedModels([...selectedModels, model]);
        }
    };

    const handlePromptEnter = (e) => {
        setPromptText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would add the logic to send the prompt to the selected models
        // and receive the responses from the backend
        // For now, we can just set some sample responses
        const sampleResponses = [
            {
                modelName: 'GPT',
                responseText: 'This is a sample response from GPT.',
                timestamp: '2024-11-03T10:00:00Z'
            },
            {
                modelName: 'Claude',
                responseText: 'This is a sample response from Claude.',
                timestamp: '2024-11-03T10:05:00Z'
            }
        ];
        setResponses(sampleResponses);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl mb-4">Model Comparison</h2>
            <div className="mb-4">
                <label htmlFor="models" className="block text-gray-700 font-bold mb-2">Select Models:</label>
                <div>
                    <input type="checkbox" id="gpt" onChange={() => handleModelSelection('GPT')} className="mr-2" />
                    <label htmlFor="gpt" className="text-gray-700">GPT</label>
                    <input type="checkbox" id="claude" onChange={() => handleModelSelection('Claude')} className="mr-2" />
                    <label htmlFor="claude" className="text-gray-700">Claude</label>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="prompt-text" className="block text-gray-700 font-bold mb-2">Prompt Text:</label>
                <label htmlFor="prompt-text" className="block text-gray-700 font-bold mb-2">Prompt Text:</label>
                <textarea id="prompt-text" value={promptText} onChange={(e) => handlePromptEnter(e.target.value)} className="w-full h-32 border border-gray-300 rounded p-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            {responses.map(response => (
                <div key={response.modelName} className="bg-white rounded shadow-md p-4 mb-4">
                    <p className="text-gray-700">{response.modelName}: {response.responseText}</p>
                    <p className="text-gray-500">Generated on {response.timestamp}</p>
                </div>
            ))}
        </form>
    );
};

export default ModelComparisonInterface;