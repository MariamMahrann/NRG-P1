const getRandomString = (length) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const formData = {
  name: `Test User ${Math.floor(Math.random() * 1000)}`,
  phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  email: `user${Math.floor(Math.random() * 1000)}@test.com`,
  country: 'India', // Ensure this matches a valid dropdown value
  city: `City ${Math.floor(Math.random() * 100)}`,
  username: `user_${getRandomString(5)}`,
  password: getRandomString(10),
};

export default formData;


export const links = [
  { label: 'Signin', href: '#login' },
  { label: 'ENTER TO THE TESTING WEBSITE', href: 'https://www.way2automation.com/way2auto_jquery/automation-practice-site.html' },
  { label: 'EXPLORE LIFETIME MEMBERSHIP', href: 'https://www.way2automation.com/lifetime-membership-club/' },
];
