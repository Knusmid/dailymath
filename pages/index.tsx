export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">수학 힌트 학습 사이트</h1>
      <p className="mb-6">초등 4학년부터 고2까지, 개념 강의와 어려운 문제, 단계별 힌트를 통해 스스로 사고하게 합니다.</p>
      <a href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded">시작하기</a>
    </div>
  );
}