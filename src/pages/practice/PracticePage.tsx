import DashboardStats from "./components/DashboardStats";
import TopicAccordion from "./components/TopicAccordion";
import RightSidebar from "./components/RightSidebar";

const practiceData = [
    {
        title: "If-Else Statements",
        description: "Master conditional logic and decision making in your code.",
        questions: [
            { id: 1, title: "Check if a number is positive or negative", difficulty: "Easy" as const, points: 10, isCompleted: true },
            { id: 2, title: "Find the largest of three numbers", difficulty: "Easy" as const, points: 15, isCompleted: true },
            { id: 3, title: "Check for Leap Year", difficulty: "Medium" as const, points: 20, isCompleted: false },
            { id: 4, title: "Calculate Grade based on marks", difficulty: "Medium" as const, points: 25, isCompleted: false },
        ]
    },
    {
        title: "Loops (For, While)",
        description: "Learn to repeat tasks efficiently using loops.",
        questions: [
            { id: 5, title: "Print numbers from 1 to 100", difficulty: "Easy" as const, points: 10, isCompleted: false },
            { id: 6, title: "Calculate Factorial of a number", difficulty: "Medium" as const, points: 20, isCompleted: false },
            { id: 7, title: "Check if a number is Prime", difficulty: "Medium" as const, points: 25, isCompleted: false },
            { id: 8, title: "Print Fibonacci Sequence", difficulty: "Hard" as const, points: 35, isCompleted: false },
        ]
    },
    {
        title: "Functions",
        description: "Organize your code into reusable blocks.",
        questions: [
            { id: 9, title: "Function to add two numbers", difficulty: "Easy" as const, points: 10, isCompleted: false },
            { id: 10, title: "Function to check Palindrome", difficulty: "Medium" as const, points: 20, isCompleted: false },
            { id: 11, title: "Recursive function for Factorial", difficulty: "Hard" as const, points: 30, isCompleted: false },
        ]
    }
];

export default function PracticePage() {
    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800/20 pointer-events-none"></div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-pj">Practice Dashboard</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-pj">Track your progress and master the fundamentals.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content - 75% width on large screens */}
                    <div className="lg:col-span-9 space-y-8">
                        <DashboardStats />

                        <div className="space-y-6">
                            {practiceData.map((topic, index) => (
                                <TopicAccordion
                                    key={index}
                                    title={topic.title}
                                    description={topic.description}
                                    questions={topic.questions}
                                    defaultOpen={index === 0}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar - 25% width on large screens */}
                    <div className="lg:col-span-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
