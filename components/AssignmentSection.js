
export default function AssigmentSection({ assignmentDescription }) {
    const handleUpload = (event) => {
        // Handle the file upload logic here
      };
      return (
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
          <h2>Assignment</h2>
          <p className="mb-3 text-2xl font-semibold">{assignmentDescription}</p>
          <input type="file" accept="image/jpeg" onChange={handleUpload} />
          <button type="button" onClick={handleUpload}>
            Upload Image
          </button>
        </div>
      );
}
