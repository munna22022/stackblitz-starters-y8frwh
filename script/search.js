function searchID() {
  const searchValue = document.getElementById('search_id').value.trim();

  if (!searchValue) {
    alert('দয়া করে একটি ID বা কন্টাক্ট নম্বর দিন');
    return;
  }

  const url = `https://script.google.com/macros/s/AKfycbzOrU-lC6D6NZ_ALzK82eD8g2zrtIlZajUv1ateZm6bBkAy9m0fQUBYSLRXEMOL3geb/exec?searchValue=${encodeURIComponent(searchValue)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        fillForm(data.result);
      } else {
        alert('কোনও ফলাফল পাওয়া যায়নি');
      }
    })
    .catch(error => {
      console.error('ত্রুটি:', error);
      alert('কোনও ফলাফল পাওয়া যায়নি');
    });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return ''; // Handle invalid dates
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function fillForm(data) {
  console.log('Filling form with data:', data);

  // List of all form field IDs and their corresponding data keys
  const fields = {
    'applicant_bangla': 'Name Bangla',
    'applicant_english': 'Name English',
    'father_name_bangla': 'Father Name Bangla',
    'father_name_english': 'Father Name English',
    'mother_name_bangla': 'Mother Name Bangla',
    'mother_name_english': 'Mother Name English',
    'birthdate': 'Birthdate',
    'nationality': 'Nationality',
    'religion': 'Religion',
    'gender': 'Gender',
    'nid_number': 'NID Number',
    'birth_registration_number': 'Birth Registration Number',
    'marital_status': 'Marital Status',
    'contact': 'Contact',
    'email': 'Email',
    'quota': 'Quota',
    'current_address': 'Current Address',
    'current_village': 'Current Village',
    'current_union': 'Current Union',
    'current_post_office': 'Current Post Office',
    'current_postcode': 'Current Postcode',
    'current_upazila': 'Current Upazila',
    'current_district': 'Current District',
    'current_division': 'Current Division',
    'permanent_address': 'Permanent Address',
    'permanent_village': 'Permanent Village',
    'permanent_union': 'Permanent Union',
    'permanent_post_office': 'Permanent Post Office',
    'permanent_postcode': 'Permanent Postcode',
    'permanent_upazila': 'Permanent Upazila',
    'permanent_district': 'Permanent District',
    'permanent_division': 'Permanent Division',
    'ssc_lavel': 'SSC Lavel',
    'board_ssc': 'Board SSC',
    'roll_ssc': 'Roll SSC',
    'reg_ssc': 'Registration SSC',
    'result_ssc': 'Result SSC',
    'group_ssc': 'Group SSC',
    'passing_year_ssc': 'Passing Year SSC',
    'hsc_lavel': 'HSC Lavel',
    'board_hsc': 'Board HSC',
    'roll_hsc': 'Roll HSC',
    'reg_hsc': 'Registration HSC',
    'result_hsc': 'Result HSC',
    'group_hsc': 'Group HSC',
    'passing_year_hsc': 'Passing Year HSC',
    'graduation_level': 'Graduation Level',
    'degree_graduation': 'Degree Graduation',
    'university_graduation': 'University Graduation',
    'course_duration_graduation': 'Course Duration Graduation',
    'result_graduation': 'Result Graduation',
    'passing_year_graduation': 'Passing Year Graduation',
    'master_level': 'Master Level',
    'degree_master': 'Degree Master',
    'university_master': 'University Master',
    'course_duration_master': 'Course Duration Master',
    'result_master': 'Result Master',
    'passing_year_master': 'Passing Year Master'
  };

  for (const [id, key] of Object.entries(fields)) {
    const element = document.getElementById(id);
    if (element) {
      if (key === 'Birthdate') {
        element.value = data[key] ? formatDate(data[key]) : '';
      } else {
        element.value = data[key] || '';
      }
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  }
}
