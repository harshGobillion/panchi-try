export default function QuestionSection({
  answer1,
  answer2,
  handleAnswer1Change,
  handleAnswer2Change,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {/* Question 1 */}
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
        <h2 className="mb-3 text-2xl font-semibold">
          Question 1{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Watch the video and answer the following question:
        </p>
        <input
          type="text"
          value={answer1}
          onChange={handleAnswer1Change}
          placeholder="Your answer"
          className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Question 2 */}
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
        <h2 className="mb-3 text-2xl font-semibold">
          Question 2{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Watch the video and answer the following question:
        </p>
        <input
          type="text"
          value={answer2}
          onChange={handleAnswer2Change}
          placeholder="Your answer"
          className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Submit{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Submit your answers and check your results.
        </p>
      </button>
    </form>
  );
}
