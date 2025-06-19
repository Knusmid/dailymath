export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">📘 하루에 한문제씩! Daily MATH</h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8">
        초4부터 고2까지, 매주 개념 강의와 고난도 문제를 통해<br />
        스스로 생각하는 수학 훈련을 시작해보세요!
      </p>
      <a
        href="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition duration-200"
      >
        지금 시작하기 🚀
      </a>
    </div>
  );
}
