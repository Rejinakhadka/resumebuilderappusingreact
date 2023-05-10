import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, TextField, Typography } from '@mui/material';

const ResumeForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('summary')}
          label="Professional Summary"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <TextField
          {...register('Highschool')}
          label="Education Qualifications - Highschool"
          fullWidth
          margin="normal"
        />

        <TextField
          {...register('university')}
          label="Education Qualifications - University"
          fullWidth
          margin="normal"
        />
        <TextField
          {...register('skills')}
          label="Academic and non-Academic skills"
          fullWidth
          margin="normal"
        />
        <TextField
          {...register('Career')}
          label="Career Objective"
          fullWidth
          margin="normal"
        />
        <TextField
          {...register('Experience')}
          label="Experience and Internships"
          fullWidth
          margin="normal"
        />
         <TextField
          {...register('Achievements')}
          label="Achievements"
          fullWidth
          margin="normal"
        />


    
        
        <Button type="submit" variant="contained" color="primary">
          Generate Resume
        </Button>
      </form>
    </Container>
  );
};

export default ResumeForm;
