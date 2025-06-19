const videoUrl = "https://www.youtube.com/embed/VIDEO_ID";

export default function Dashboard() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">대시보드</h1>
      <div className="mb-6">
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title="개념 강의"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <ul className="space-y-2">
        {[1, 2, 3, 4, 5].map((id) => (
          <li key={id}>
            <a href={`/problem/${id}`} className="text-blue-600 underline">문제 {id} 풀기</a>
          </li>
        ))}
      </ul>
    </div>
  );
}