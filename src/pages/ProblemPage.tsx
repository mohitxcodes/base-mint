import RightSidebar from "../features/problem/RightSidebar";
import TopicSidebar from "../features/problem/TopicSidebar";
import ProblemList from "../features/problem/ProblemList";
import { useGetAllTopics } from "@/hooks/useGetAllTopics";
import { useState } from "react";

export default function ProblemPage() {
    const { data: topics } = useGetAllTopics();
    const [selectedTopic, setSelectedTopic] = useState<string>("LOOPS");

    return (
        <div className="relative h-full flex flex-col overflow-hidden transition-colors duration-200
                        bg-(--bg-secondary) border-t border-(--border-primary)
                        dark:border-(--dk-border)">

            {/* Dark mode gradient overlay */}
            <div className="absolute inset-0 hidden dark:block pointer-events-none"
                style={{ background: `linear-gradient(to bottom right, var(--dk-bg-from), var(--dk-bg-via), var(--dk-bg-to))` }} />

            {/* Dark mode blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden dark:block">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: "var(--dk-blob-a)" }} />
                <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full blur-3xl"
                    style={{ background: "var(--dk-blob-b)" }} />
            </div>

            {/* Light mode top fade */}
            <div className="absolute top-0 inset-x-0 h-64 pointer-events-none dark:hidden
                            bg-gradient-to-b from-(--bg-tertiary) to-transparent" />

            <div className="relative z-10 px-4 w-full sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">

                    {/* Left Sidebar — Topic Navigation */}
                    <div className="hidden lg:block shrink-0 lg:w-[18%] sticky top-8 lg:pr-8">
                        <TopicSidebar
                            selectedTopic={selectedTopic}
                            onSelectTopic={setSelectedTopic}
                            topics={topics || []}
                        />
                    </div>

                    {/* Center Content — Problems */}
                    <div className="flex-1 space-y-6 lg:px-8 min-h-[calc(100vh-12rem)] min-w-0
                                    lg:border-x border-(--border-primary) dark:border-(--dk-border)">
                        <ProblemList topicName={selectedTopic} />
                    </div>

                    {/* Right Sidebar — Widgets */}
                    <div className="shrink-0 w-full lg:w-[22%] space-y-6 lg:pl-8">
                        <RightSidebar />
                    </div>

                </div>
            </div>
        </div>
    );
}
