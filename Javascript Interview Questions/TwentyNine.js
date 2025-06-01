function calculateAge(dob) {
  const birth = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  console.log(age)
  console.log(today.getFullYear())
}

calculateAge("2000-06-01");