import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Link } from 'wouter';

const PromptSubmissionForm = () => {
    const [promptText, setPromptText] = useState('');
    const [tags, setTags] = useState([]);
    const [location, setLocation] = useLocation();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the prompt and tags to the console
        console.log('Prompt:', promptText);
        console.log('Tags:', tags);

        // Update the HTML to notify the user
        alert('Prompt submitted successfully!'); // Simple alert notification

        // Optionally, navigate back to the main prompts page
        setLocation('/prompts');
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl mb-4">Submit a Prompt</h2>
            <div className="mb-4">
                <label htmlForm="prompt-text" className="block text-gray-700 font-bold mb-2">Prompt Text:</label>
                <textarea id="prompt-text" value={promptText} onChange={(e) => setPromptText(e.target.value)} className="w-full h-32 border border-gray-300 rounded p-2"></textarea>
            </div>
            <div className="mb-4">
                <label htmlForm="tags" className="block text-gray-700 font-bold mb-2">Tags:</label>
                <input id="tags" value={tags.join(', ')} onChange={(e) => setTags(e.target.value.split(', '))} className="w-full border border-gray-300 rounded p-2"></input>
            </div>
            <button type="submitt" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
    );
};

export default PromptSubmissionForm;