import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Container, Typography } from '@mui/material';

const ResumePreview = ({ data }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    handlePrint();
  }, [handlePrint]);

  return (
    <Container class="container" maxWidth="md">
      <div ref={componentRef}>
        <Typography variant="h4" gutterBottom>
          Resume Preview
        </Typography>

        <Typography variant="h6" gutterBottom>
          Professional Summary
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.summary}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Education Qualifications
        </Typography>
        <Typography variant="body1" gutterBottom>
          Degree: {data.Highschool}
        </Typography>
        <Typography variant="body1" gutterBottom>
          University: {data.university}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Skills: {data.skills}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Career: {data.Career}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Experience: {data.Experience}
        </Typography>
        <Typography variant="h6" gutterBottom>
         Achievements: {data.Achievements}
        </Typography>

       
      </div>
      <div>
        <Button variant="contained" onClick={handlePrint}>
          Print
        </Button>
        <Button variant="contained" onClick={() => window.print()}>
          Download PDF
        </Button>
      </div>
    </Container>
  );
};

export default ResumePreview;
