import React, { useRef, useEffect } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const carDetails = {
      model: formData.get('model'),
      year: formData.get('year'),
      color: formData.get('color'),
    };

    console.log(carDetails);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" defaultValue={initialData.model || ''} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" defaultValue={initialData.year || ''} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" defaultValue={initialData.color || ''} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
