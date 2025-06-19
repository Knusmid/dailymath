import { useState } from 'react';

const correctAnswer = '809701088301';
const hints = [
  '확실하게 주어진 1과 7을 12자리에 써넣어보자.',
  '0은 천억의 자리에 들어갈 수 없다.',
  '가장 큰 수는 내림차순, 가장 작은 수는 오름차순으로 나열하되, 앞자리에 0이 못 오게 하는 조건을 유의해야 한다.'
];

export default function Problem1() {
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setAttempts((prev) => Math.min(prev + 1, 4));
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">문제 1</h1>
      <p className="mb-4">
        6장의 수 카드 0,1,4,5,7,9를 두 번 씩 사용하여 백억의 자리 수가 1이고 천만의 자리수가 7인 12자리 자연수를 만들었다.
        이때, 가장 큰 수와 가장 작은 수의 차를 구하여라.
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="정답을 입력하세요"
        disabled={isCorrect === true}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isCorrect === true}
      >
        제출
      </button>

      {isCorrect === true && <p className="text-green-600 mt-4">정답입니다! 🎉</p>}
      {isCorrect === false && <p className="text-red-500 mt-4">틀렸습니다. 다시 시도해보세요.</p>}

      <div className="mt-6">
        {Array.from({ length: attempts }).map((_, i) => (
          <div key={i} className="bg-gray-100 p-3 my-2 border-l-4 border-blue-400">
            <strong>힌트 {i + 1}:</strong> {hints[i]}
          </div>
        ))}
      </div>
    </div>
  );
}