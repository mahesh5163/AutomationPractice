const nodemailer = require("nodemailer");

const EMAIL = "maheshdhopre108@gmail.com";
const APP_PASSWORD = "zwpy wisx abnc fpyg"; // Get from Google Account

const hrEmails = [
  "hr1@company1.com",
  "hr2@company2.com",
  "hr3@company3.com",
  "hr4@company4.com",
  "hr5@company5.com",
  "hr6@company6.com",
  "hr7@company7.com",
  "hr8@company8.com"
];

const emailSubject = "Application for Software Test Engineer (QA) - Mahesh Dhopre";
const emailBody = `Dear team,

I am Mahesh Dhopre. I have 4+ years of experience of automation testing on healthcare Domain, Insurance and banking domain, e-Commerce. Please consider this email as my interest for the post of 'Software Test Engineer' (QA). My skill set seems to be a perfect match.

I attached my resume in this email.

Please review the same and I would be happy to hear back from you regarding this opportunity.

Thanks & Regards,
Mahesh
Mobile: +91-7066850747`;

// Path to your resume in Downloads folder
const RESUME_PATH = "C:\\Users\\Yogesh\\Downloads\\MaheshDhopreAutomation_4.2years.pdf";

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD, // Use App Password (NOT regular password)
  },
});

// Function to send email
async function sendEmailToHR(email, index, total) {
  try {
    console.log(`[${index}/${total}] Sending email to ${email}...`);

    const mailOptions = {
      from: `Mahesh <${EMAIL}>`,
      to: email,
      subject: emailSubject,
      text: emailBody,
      attachments: [
        {
          filename: "MaheshDhopreAutomation_4.2years.pdf",
          path: RESUME_PATH,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(`✓ Email sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to send email to ${email}: ${error.message}`);
    return false;
  }
}

// Main function
async function sendAllEmails() {
  console.log("Starting email sending process...\n");
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < hrEmails.length; i++) {
    const success = await sendEmailToHR(hrEmails[i], i + 1, hrEmails.length);
    if (success) successCount++;
    else failCount++;
    
    // Add 2 second delay between emails
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\n✓ Process completed!`);
  console.log(`✓ Sent: ${successCount}/${hrEmails.length}`);
  if (failCount > 0) console.log(`✗ Failed: ${failCount}`);
}

sendAllEmails().catch(console.error);
