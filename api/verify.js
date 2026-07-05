// api/verify.js
export default function handler(req, res) {
    // Sirf POST request allow karenge (Security)
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Frontend se aaya password
    const userPassword = req.body.password;

    const correctPassword = process.env.paradox_password;
    const driveLink = process.env.folder_link;

    // Password Match Logic
    if (userPassword === correctPassword) {
        // Sahi hai toh link bhej do
        return res.status(200).json({ allowed: true, url: driveLink });
    } else {
        // Galat hai toh error bhej do
        return res.status(401).json({ allowed: false, message: 'Invalid Password' });
    }
}