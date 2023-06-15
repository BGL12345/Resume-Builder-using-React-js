import React, { useState } from 'react';

function ResumeBuilder({ onPreview }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [skills, setSkills] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducationField = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleSkillsChange = (e) => {
    const enteredSkills = e.target.value.split(',').map(skill => skill.trim());
    setSkills(enteredSkills);
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      address,
      phone,
      education,
      skills,
    };
    onPreview(data);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form onSubmit={handlePreview}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>

        <h2>Education:</h2>
        {education.map((field, index) => (
          <div key={index}>
            <label>
              Institute:
              <input
                type="text"
                value={field.institute}
                onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                required
              />
            </label>
            <label>
              Year:
              <input
                type="text"
                value={field.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                required
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                value={field.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addEducationField}>Add More</button>
        <label>
        <h2>Skills</h2>
          <input type="text" value={skills.join(',')} onChange={handleSkillsChange} />
        </label><br></br>
        <button type="submit">Preview</button>
        
      </form>
    </div>
  );
}

export default ResumeBuilder;
