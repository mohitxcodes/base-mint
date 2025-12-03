import { useState } from 'react';
import QuestionRow from './QuestionRow';

interface Question {
    id: number;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    points: number;
    isCompleted: boolean;
}

interface TopicAccordionProps {
    title: string;
    description: string;
    questions: Question[];
    defaultOpen?: boolean;
}

export default function TopicAccordion({ title, description, questions, defaultOpen = false }: TopicAccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white font-pj">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-pj">{description}</p>
                </div>
                <div className="flex items-center">
                    <span className="mr-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {questions.filter(q => q.isCompleted).length} / {questions.length}
                    </span>
                    <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {isOpen && (
                <div className="border-t border-gray-200 dark:border-gray-800">
                    {questions.map((question) => (
                        <QuestionRow key={question.id} {...question} />
                    ))}
                </div>
            )}
        </div>
    )
}
