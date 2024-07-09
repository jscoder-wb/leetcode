const checkRecord = s => {
  if (s.includes('LLL')) return false
  let absentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') absentCount++
  }

  return absentCount < 2
};