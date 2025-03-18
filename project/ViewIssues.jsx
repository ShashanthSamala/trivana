import React, { useState, useEffect } from "react";

const ViewIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/issues');
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        const data = await response.json();
        setIssues(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Reported Issues</h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading issues...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Reported Issues</h2>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Reported Issues</h2>
      {issues.length === 0 ? (
        <p className="text-gray-500">No issues reported yet.</p>
      ) : (
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{issue.title}</h3>
              <p className="text-gray-700">{issue.description}</p>
              <p className="text-gray-600 text-sm">Location: {issue.location}</p>
              <p className="text-gray-500 text-sm">Submitted by: {issue.username || "Anonymous"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewIssues;
