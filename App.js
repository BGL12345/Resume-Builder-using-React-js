import React, { useState } from 'react';
import ResumeBuilder from './ResumeBuilder';

function App() {
  const [resumeData, setResumeData] = useState(null);

  const handlePreview = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      <ResumeBuilder onPreview={handlePreview} />
      <div className="Preview">
        <h2>Preview:</h2>
        {resumeData && (
          <div>
            <p>Name: {resumeData.name}</p>
            <p>Email: {resumeData.email}</p>
            <p>Address: {resumeData.address}</p>
            <p>Phone: {resumeData.phone}</p>

            <h3>Education:</h3>
            {resumeData.education.map((field, index) => (
              <div key={index}>
                <p>Institute: {field.institute}</p>
                <p>Year: {field.year}</p>
                <p>Degree: {field.degree}</p>
              </div>
            ))}

            <h3>Skills:</h3>
            <ul>
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;
