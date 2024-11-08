import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Link } from 'wouter';

const PromptDisplayAndVoting = () => {
    const [prompts, setPrompts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Here you would add the logic to fetch the prompts from the backend
        // For now, we can just set some sample prompts
        const samplePrompts = [
            {
                id: 1,
                content: 'How to write a great story?',
                upvotes: 5,
                timestamp: '2024-11-01T12:00:00Z',
                tags: ['writing', 'creativity']
            },
            {
                id: 2,
                content: 'What are the best ways to learn programming?',
                upvotes: 3,
                timestamp: '2024-11-02T14:30:00Z',
                tags: ['programming', 'learning']
            }
        ];
        setPrompts(samplePrompts);
    }, []);

    const handleUpvote = (promptId) => {
        // Here you would add the logic to send the upvote to the backend
        // For now, we can just update the local state
        const updatedPrompts = prompts.map(prompt => {
            if (prompt.id === promptId) {
                return { ...prompt, upvotes: prompt.upvotes + 1 };
            }
            return prompt;
        });
        setPrompts(updatedPrompts);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">Prompts</h2>
            {prompts.map(prompt => (
                <div key={prompt.id} className="bg-white rounded shadow-md p-4 mb-4">
                    <p className="text-gray-700">{prompt.content}</p>
                    <p className="text-gray-500">Submitted on {prompt.timestamp}</p>
                    <p className="text-gray-500">Tags: {prompt.tags.join(', ')} </p>
                    <button onClick={() => handleUpvote(prompt.id)} className="bg-blue-500 text-white px-4 py-2 rounded">Upvote ({prompt.upvotes})</button>
                </div>
            ))}
            <Link to="/submit-prompt" className="bg-blue-500 text-white px-4 py-2 rounded">Submit a New Prompt</Link>
        </div>
    );
};

export default PromptDisplayAndVoting;