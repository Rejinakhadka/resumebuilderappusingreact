import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div>
      <ResumeForm onSubmit={handleFormSubmit} />
      {resumeData && <ResumePreview data={resumeData} />}
    </div>
  );
};

export default App;
