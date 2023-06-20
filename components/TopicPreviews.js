import Link from "next/link";
import topicData from '../app/topicData.json'
  

export default function TopicPreviews() {
    const topics = topicData;
  return (
    <div grid py-6>
      {topics.map((topic) => (
        <div className="grid md:grid-cols-2 border border-gray-300 rounded-lg my-5" key={topic.id}>
        <div className="Info px-4 py-2">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-60 py-6">
            <Link href={`/topic/${topic.id}`}>{topic.title}</Link>
          </h2>
          <p className="text-gray-500 px-2 py-3">{topic.description}</p>
          <p>Number of Questions: {topic.numQuestions}</p>
          <p>Assignment Status: {topic.assignmentStatus}</p>
        </div>
        <div>Video</div>
        </div>
      ))}
    </div>
  )
}
