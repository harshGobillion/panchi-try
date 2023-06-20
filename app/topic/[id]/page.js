'use client'
import VideoSection from "@/components/VideoSection";
import QuestionSection from "@/components/QuestionSection";
import AssignmentSection from "@/components/AssignmentSection";
import topicData from "@/app/topicData.json";

export default function TopicPage({params}) {
  const id = params.id;

  // Find the topic object with the matching ID
  const topic = topicData.find((topic) => topic.id === parseInt(id));

  if (!topic) {
    // Handle the case where the topic is not found
    return <div>Topic not found</div>;
  }

  return (
    <div>
      <h1>{topic.title}</h1>
      <VideoSection showVideo={true} />
      <QuestionSection />
      <AssignmentSection assignmentDescription={topic.assignmentDescription} />
    </div>
  );
}
